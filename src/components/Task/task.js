export default {
  name: 'task',
  props: {
    isCompleted: Boolean,
    isEditing: Boolean,
    label: String
  },
  data () {
    return {

    }
  },
  computed: {
  
  },
  mounted () {
  
  },
  methods: {
    setFocus: function(){
      setTimeout(() => {
        this.$refs.label.focus()
      })
    },
    onEnterButton (e) {
      this.$emit('onEnterButton', e.target.value)
    }
  }
}
