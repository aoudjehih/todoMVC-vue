import FormValidator from '../validator/form-validator'

export default {

  install (Vue) {

    Vue.directive('validate', {
      bind: function (el, binding, vnode) {

        let vmodel = vnode.data.directives.find(function(o) {
          return o.name === 'model'
        })

        if (!vmodel) {
          vmodel = vnode.data.model
        }

        if (!vmodel) {
          throw "v-model attribute is required for field validation"
        }

        let rules = binding.expression.replace(/`/g,'')
        if (!rules) {
          throw "rule is required for field validation"
        }

				let str = vmodel.expression.split('.')
				if(str.length !== 2) {
					throw 'v-model should bind the form object and the field name'
				}
				const {immediate} = binding.modifiers
				//récupérer le nom du form
				vnode.context.validator.bindField(str[0], str[1], vmodel.value, rules, immediate)
      },
			update: function (el, binding, vnode, oldVnode) {
				let vmodel = vnode.data.directives.find(function(o) {
          return o.name === 'model'
        });

				if (!vmodel) {
					vmodel = vnode.data.model
				}

				let ovmodel = oldVnode.data.directives.find(function(o) {
					return o.name === 'model'
				});
				if (!ovmodel) {
					ovmodel = oldVnode.data.model
				}

				if(vmodel.value === ovmodel.value) return
				let str = vmodel.expression.split('.')
        let rules = binding.expression.replace(/`/g,'')
        const {immediate} = binding.modifiers

        vnode.context.validator.validateField(str[0], str[1], vmodel.value, rules, immediate)
      }
    })

    Vue.mixin({
      data() {
        return {
          validator: '',
        }
      },
      beforeMount() {
        this.validator = new FormValidator()
      }
    });
  }
}
