const MyDirectives = {

	install: function(Vue, options) {
		Vue.directive('focus', {
	    inserted:function(element){
		element.focus()
		// console.log(element, binding, vnode, oldnode)
	}
})
	}
}

export default MyDirectives