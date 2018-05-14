const MyDirectives = {

	install: function(Vue, options) {
		Vue.directive('focus', {
	    inserted:function(element){
		element.focus()
		// console.log(element, binding, vnode, oldnode)
	}
})

		// Vue.mixin({
		// 	mounted: function(){
		// 		console.log(this.$el) //pratimo sve elemente na stranici
		// 	}
		// })
//v-validate:required.email ce izgledati direktiva 
		Vue.directive('validate',{
			inserted: function (element, binding) {
				const RULES = {
					REQUIRED: 'required',
					NUMBER: 'number',
					EMAIL: 'email'
				}

				const MESSAGES_CLASSNAME = 'validator-messages'

				let validationRules = binding.value 


				// console.log(validationRules, 'validationRules')

				element.addEventListener('submit', (event)=>{
					event.preventDefault()
					// console.log('event', event, validationRules)
					Object.keys(validationRules).forEach(key=>{
						let input = element.querySelector(`#${key}`)
						if (!input) {
							throw new Error(`Input element for validation rule ${key} not found`)
						}
						if(validationRules[key].indexOf(RULES.REQUIRED) > -1 && !input.value.length){
							let messageElement = document.createElement('div')
							messageElement.id = MESSAGES_CLASSNAME
							let oldMessageElement = element.querySelector(`#${MESSAGES_CLASSNAME}`)
							if (oldMessageElement) {
								oldMessageElement.remove()
							}

							messageElement.innerHTML = `${key.toUpperCase()} field is required`
							element.appendChild(messageElement)
						} 
					});
					
				})
					
				// let isRequired = binding.arg === RULES.REQUIRED



				// element.addEventListener('input', (event)=>{
					
				// 	let value = event.target.value //izvucen value polja da mozemo dole pisati value
					
				// 	if (isRequired && !value.length) {

				// 		console.log('Field is required', event.target.name)
				// 	}
				// 	// console.log(event.target.value, 'value')	
				// })
				
			}
		})
	}
}

export default MyDirectives