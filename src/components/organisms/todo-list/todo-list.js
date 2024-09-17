import task from '../../molecules/task/index.vue'
import myFooter from '../../molecules/my-footer/index.vue'

export default {
    name: 'todo-list',
    components: {
        task,
        myFooter
    },
    data () {
        return {
            label: '',
            todoListShow: '',
            todoList: [],
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
        this.todoList = this.getStoredList()
        this.todoListShow = this.todoList;
    },
    methods: {
        save: function() {
            const todolist = JSON.stringify(this.todoList);
            localStorage.setItem('todolist', todolist);
        },
        getStoredList: function() {
            var list = []
            if (localStorage.getItem('todolist')) {
                try {
                    list = JSON.parse(localStorage.getItem('todolist'));
                } catch(e) {
                    localStorage.removeItem('todolist');
                }
            }

            return list
        },
        addNewTodo: function () {
            if(this.label.trim().length) {
                this.todoList.push({labelTask: this.label, isCompleted: false});
                this.label = '';

                this.save()
                this.todoListShow = this.todoList;
            }
        },
        toggle: function(index) {
            this.todoList[index].isCompleted =! this.todoList[index].isCompleted;
            this.save()
            this.todoListShow = this.todoList;
        },
        setEdition: function(index) {
            var activeItemsList = [];
            for (var i = 0; i<this.todoList.length; i++) {
                if(i == index) {
                    var obj = this.todoList[i]
                    obj.isEditing =! this.todoListShow[index].isEditing;
                    activeItemsList.push(obj);
                } else {
                    activeItemsList.push(this.todoList[i]);
                }
            }

            this.todoListShow = activeItemsList;
        },
        focusout: function(index) {
            var activeItemsList = [];
            for (var i = 0; i<this.todoList.length; i++) {
                if(i == index) {
                    var obj = this.todoList[i]
                    obj.isEditing = false;
                    activeItemsList.push(obj);
                } else {
                    activeItemsList.push(this.todoList[i]);
                }
            }

            this.todoListShow = activeItemsList;
        },
        destroy: function(index) {
            this.todoList.splice(index, 1);
            this.save()
            this.todoListShow = this.todoList;
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
            this.save()
            this.todoListShow = this.todoList;
        },
        enterEditing: function(arg1, arg2){
            this.todoList[arg2].isEditing = false;
            this.todoList[arg2].labelTask = arg1;
            this.save()
        },
        toggleAll: function() {
            if (this.todoList.length > 0) {
                var toggled = false
                for (var i = 0; i<this.todoList.length; i++) {
                    if(!this.todoList[i].isCompleted) {
                        this.todoList[i].isCompleted = true
                        toggled = true
                    }
                }

                if (!toggled) {
                    for (i = 0; i<this.todoList.length; i++) {
                        if(this.todoList[i].isCompleted) {
                            this.todoList[i].isCompleted = false
                        }
                    }
                }

                this.save()
                this.todoListShow = this.todoList;
            }

        }
    }
}