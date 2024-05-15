module.exports = [
	/*
	 * Place your upgrade scripts here
	 * Remember that once it has been added it cannot be removed!
	 */
	function v1_2_0(context, props) {
		var updateActions=[]
		for (const action of props.actions) {
			if (action.actionId === "play_audio" || action.actionId === "play_video") {
				action.options.volume = String(action.options.volume)
				updateActions.push(action)
			}
		}

	 	return {
	 		updatedConfig: null,
	 		updatedActions: updateActions,
	 		updatedFeedbacks: [],
	 	}
	},
]
