<template>
  <div class="container">
    <form @submit.prevent="addTodoFromPage" class="row">
      <div class="form-group col-6 offset-3">
        <h2 for="inputTodo">TODO</h2>
        <ul>
          <li v-for="(todo, index) in getTodos" :key="index">
            {{ todo }}
          </li>
        </ul>
        <input
          v-model="todoInput"
          type="text"
          class="form-control"
          id="inputTodo"
          placeholder="TODOを入力..."
        />
      </div>
      <button type="submit" class=" col-6 offset-3 btn btn-primary btn-block">TODOを追加する</button>
    </form>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        todoInput: ''
      }
    },
    methods: {
      addTodoFromPage(){
        this.$store.dispatch("addTodoFromActions", this.todoInput);
        this.todoInput = "";
      },
    },
    computed: {
      getTodos(){
        return this.$store.getters.getTodos;
      }
    },
  }
</script>