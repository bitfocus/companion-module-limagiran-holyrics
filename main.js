const { InstanceBase, Regex, runEntrypoint, InstanceStatus } = require('@companion-module/base')
const UpgradeScripts = require('./upgrades')
const UpdateActions = require('./actions')
const UpdateFeedbacks = require('./feedbacks')
const UpdateVariableDefinitions = require('./variables')
const PollVariables = require('./poll')

class ModuleInstance extends InstanceBase {
	constructor(internal) {
		super(internal)
	}

	async init(config) {
		this.configUpdated(config)
		this.state = {}
	}
	// When module gets deleted
	async destroy() {
		this.log('debug', 'destroy')
	}

	async configUpdated(config) {
		this.config = config

		this.updateStatus(InstanceStatus.Ok)

		var bible_versions = JSON.parse( await this.do_command('GetBibleVersions') )
		this.CHOICES_BIBLE_VERSIONS = bible_versions.data.map( (v) => { return { id: v['key'], label: v['title'] } })

		this.updateActions() // export actions
		this.updateFeedbacks() // export feedbacks
		this.updateVariableDefinitions() // export variable definitions
		this.initPolling()
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
		console.log('Command: ', cmd, JSON.stringify(options))
		let url = `http://${this.config.host}:${this.config.port}/api/${cmd}?token=${this.config.token}`
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(options),
		})
		return response.text()
	}
}

runEntrypoint(ModuleInstance, UpgradeScripts)
