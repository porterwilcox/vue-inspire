<template>
    <div class="todos container-fluid">
       <router-link class="mx-5" :to="{name: 'dashboard'}">BACK TO DASHBOARD</router-link>
        <h1 class="main-text text-center">What's On The Agenda, Today?</h1>
    <div class="row">
        <div class="col">
            <form class="send-it" @submit.prevent="createTodo">
                <input required type="text" v-model="newTodo.description" placeholder="WHAT'S UP?">
                <button type="submit" class="btn btn-dark">SEND IIIIIT</button>
            </form>
            <h2 class="main-text text-center">"{{incompleteTodos}} THINGS TO DO TODAY. YOU CAN DO IT!"</h2>
        </div>
    </div>
    <todo v-for="todo in todos" :todoData="todo" />
        <!-- could utilize a v-for on a component and don't forget to pass a prop -->
    </div>
</template>

<script>
import Todo from '@/components/Todo.vue'
export default {
   name: "todos",
   props: [],
   data() {
      return {
          newTodo: {
              description: '',
          }
      }
   },
   computed: {
       todos() {
           return this.$store.state.todos
       },
       incompleteTodos() {
           return this.todos.filter(t => !t.completed).length
       }
       //What property in the state will you care to observe here?
   },
   methods: {
       //will most likely write method for add a todo here
       createTodo() {
           this.$store.dispatch('createTodo', {...this.newTodo})
           this.newTodo.description = ''
       }
   },
   components: {
       Todo
   }
}
</script>

<style>
.send-it {
    margin-left: 30%
}
.main-text {
    color: white;
    text-shadow: 0 0 5px black;
}
</style>
