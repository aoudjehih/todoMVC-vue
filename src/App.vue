<template>
  <section class="todoapp">

     <!-- Header -->
     <header class="header">
        <h1>todos</h1>
        <input @keyup.enter="addNewTodo" v-model="label"  autocomplete="off" placeholder="What needs to be done?" class="new-todo">
     </header>

     <!-- Body -->
     <section class="main">
        <input id="toggle-all" type="checkbox" class="toggle-all"> <label for="toggle-all">Mark all as complete</label> 
        <ul class="todo-list" v-for="(todoItem, index) in todoList">
           <Task 
           :isCompleted="todoItem.isCompleted" 
           :isEditing="todoItem.isEditing" 
           :label="todoItem.labelTask" 
           @edition="setEdition(index)" 
           @toggle="toggle(index)"
           @onBlur="focusout(index)"
           @onDestroy="destroy(index)"
           ></Task>
        </ul>
     </section>
   
     <!-- Footer -->
     <footer class="footer">
        <span class="todo-count"><strong>1</strong> item left
        </span> 
        <ul class="filters">
           <li><a href="#/all" class="selected">All</a></li>
           <li><a href="#/active" class="">Active</a></li>
           <li><a href="#/completed" class="">Completed</a></li>
        </ul>
        <button class="clear-completed">
        Clear completed
        </button>
     </footer>
  </section>
</template>

<!--<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>-->

<script>
import HelloWorld from './components/HelloWorld.vue'
import Task from './components/task/index.vue'

export default {
  name: 'app',
  components: {
    Task
  },
  data () {
    return {
      label: '',
      todoList: [
        {
          labelTask: 'label1',
          isCompleted: false,
          isEditing: false
        },
        {
          labelTask: 'label2',
          isCompleted: false,
          isEditing: false
        },
        {
          labelTask: 'label3',
          isCompleted: false,
          isEditing: false
        }
      ]
      
    }
  },
  methods: {
    addNewTodo: function () {
      if(this.label.trim().length) {
        this.todoList.push({labelTask: this.label, isCompleted: false});
        this.label = '';
      }
    },
    toggle: function(index){
      this.todoList[index].isCompleted =! this.todoList[index].isCompleted;
    },
    setEdition: function(index){
      this.todoList[index].isEditing =! this.todoList[index].isEditing;
    },
    focusout: function(index){
      if(this.todoList[index].isEditing) {
        this.todoList[index].isEditing = false;
      }
    },
    destroy: function(index){
      this.todoList.splice(index, 1);
    },
  }
}
</script>



<style>
  @import 'http://todomvc.com/examples/vue/node_modules/todomvc-app-css/index.css';
</style>
