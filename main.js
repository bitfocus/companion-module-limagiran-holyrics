const { InstanceBase, Regex, runEntrypoint, InstanceStatus } = require('@companion-module/base')
const UpgradeScripts = require('./upgrades')
const UpdateActions = require('./actions')
const UpdateFeedbacks = require('./feedbacks')
const UpdateVariableDefinitions = require('./variables')
const UpdatePresets = require('./presets')
const PollVariables = require('./poll')


class ModuleInstance extends InstanceBase {
	static DEVELOPER_forceStartupUpgradeScript = 0

	constructor(internal) {
		super(internal)
	}

	async init(config) {
		this.configUpdated(config)
		this.state = {}
	}
	// When module gets deleted
	async destroy() {
		if (this.pollTimer) {
			clearInterval(this.pollTimer)
		}
		this.log('debug', 'destroy')
	}

	async configUpdated(config) {
		this.config = config

		this.connected = false
		

		var bible_versions = JSON.parse( await this.do_command('GetBibleVersions') )
		if (bible_versions != null) {
			this.CHOICES_BIBLE_VERSIONS = bible_versions.data.map( (v) => {
				if (v['key'].startsWith("#shortcut ")) {
					return { id: v['version'], label: v['key'].substring(10) + " (shortcut)" }
				}
				return { id: v['key'], label: v['title'] }
			})
			this.CHOICES_BIBLE_VERSIONS.unshift({id: 'default', label: 'Use system default'})
		} else {
			this.CHOICES_BIBLE_VERSIONS = [{id: '0', label:'NOT INITIALIZED'}]
		}

		this.updateActions() // export actions
		this.updateFeedbacks() // export feedbacks
		this.updateVariableDefinitions() // export variable definitions
		this.initPolling()
		
		await this.updatePresets()
	}

	// Return config fields for web config
	getConfigFields() {
		return [
			{
				type: 'textinput',
				id: 'host',
				label: 'IP Address',
				width: 6,
				default: '127.0.0.1',
				regex: Regex.IP,
			},
			{
				type: 'number',
				id: 'port',
				label: 'IP Port',
				width: 6,
				min: 1,
				max: 65535,
				default: 8091,
			},	
			{
				type: 'textinput',
				id: 'token',
				label: 'Access Token',
				width: 4,
			},
		]
	}

	async updatePresets() {
		await UpdatePresets(this)
	}

	updateActions() {
		UpdateActions(this)
	}

	updateFeedbacks() {
		UpdateFeedbacks(this)
	}

	updateVariableDefinitions() {
		UpdateVariableDefinitions(this)
	}

	initPolling() {
		if (this.pollTimer) {
			clearInterval(this.pollTimer)
		}
		this.pollTimer = setInterval(async () => {
			PollVariables(this)
		},1000)
 
	}

	async do_command(cmd, options={}) {
		async function fetchWithTimeout(resource, options = {}) {
			const { timeout = 8000 } = options
			
			const controller = new AbortController()
			const id = setTimeout(() => controller.abort(), timeout)
		  
			const response = await fetch(resource, {
			  ...options,
			  signal: controller.signal  
			})
			clearTimeout(id)
		  
			return response
		}

		let url = `http://${this.config.host}:${this.config.port}/api/${cmd}?token=${this.config.token}`
		var response
		try {
			response = await fetchWithTimeout(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(options),
			})
			
			if (response.status != 200) {
				this.connected = false
				this.updateStatus(InstanceStatus.ConnectionFailure, response.statusText)
				return null
			}
		} catch (e) {
			this.connected = false
			this.updateStatus(InstanceStatus.ConnectionFailure)
			return null
		}
		if (!this.connected) {
			this.connected = true
			this.updateStatus(InstanceStatus.Ok)
		}
		return response.text()
	}
}

runEntrypoint(ModuleInstance, UpgradeScripts)
