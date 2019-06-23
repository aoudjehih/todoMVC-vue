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
        <ul class="todo-list" v-for="(todoItem, index) in todoListShow">
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
     <Bas 
     :completed="getCompleted"
     :clearCompleted="showClearButton"
     @allClicked="showAllItems()"
     @activeClicked="showActiveItems()"
     @completedClicked="showCompletedItems()"
     @clearCompletedClicked="clearCompletedItems()"
     ></Bas>
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
import Task from './components/Task/index.vue'
import Bas from './components/Bas/index.vue'

export default {
  name: 'app',
  components: {
    Task,
    Bas
  },
  data () {
    return {
      label: '',
      todoListShow: '',
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
      ],
      
      
    }
  },
  computed: {
    getCompleted: function() {
        var c = 0;
        for (var i = 0; i<this.todoList.length; i++) {
          if(!this.todoList[i].isCompleted) {
            c++;
          }
        }

        return c;
    },
    showClearButton: function() {
      for (var i = 0; i<this.todoList.length; i++) {
        if(this.todoList[i].isCompleted) {
         return true;
        }
      }

      return false;
    }
  },
  mounted () {
   this.todoListShow = this.todoList;
  },
  methods: {
    addNewTodo: function () {
      if(this.label.trim().length) {
        this.todoList.push({labelTask: this.label, isCompleted: false});
        this.label = '';
      }
    },
    toggle: function(index) {
      this.todoList[index].isCompleted =! this.todoList[index].isCompleted;
    },
    setEdition: function(index) {
      this.todoList[index].isEditing =! this.todoList[index].isEditing;
    },
    focusout: function(index) {
      if(this.todoList[index].isEditing) {
        this.todoList[index].isEditing = false;
      }
    },
    destroy: function(index) {
      this.todoList.splice(index, 1);
    },
    showAllItems: function() {
      this.todoListShow = this.todoList;
    },
    showActiveItems: function() {
      var activeItemsList = [];
      for (var i = 0; i<this.todoList.length; i++) {
        if(!this.todoList[i].isCompleted) {
          activeItemsList.push(this.todoList[i]);
        }
      }

      this.todoListShow = activeItemsList; 
    },
    showCompletedItems: function() {
      var completedList = [];
      for (var i = 0; i<this.todoList.length; i++) {
        if(this.todoList[i].isCompleted) {
          completedList.push(this.todoList[i]);
        }
      }
      this.todoListShow = completedList; 
    },
    clearCompletedItems: function() {
     var uncompletedList = [];
      
      for (var i = 0; i<this.todoList.length; i++) {
        if(!this.todoList[i].isCompleted) {
          uncompletedList.push(this.todoList[i])
        }
      }

      this.todoList = uncompletedList;
      this.todoListShow = this.todoList;
    }
  }
}
</script>



<style>
  @import 'http://todomvc.com/examples/vue/node_modules/todomvc-app-css/index.css';
</style>
