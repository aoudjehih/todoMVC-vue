export default {
  name: 'my-footer',
  components: {},
  props: {
    completed: Number,
    clearCompleted: Boolean
    
  },
  data () {
    return {
      isAllSelected: true,
      isActiveSelected: false,
      isCompletedSelected: false,
      isClearCompletedSelected: false
    }
  },
  computed: {
    
  },
  mounted () {

  },
  methods: {
    setSelection: function(selectedButton){
      this.isAllSelected = false;
      this.isActiveSelected = false;
      this.isCompletedSelected = false;
      this.isClearCompletedSelected = false;
      eval("this." + selectedButton + " = " + true);
    }
  }
}
