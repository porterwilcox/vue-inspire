<template>
    <div class="todo col-8 movecard">
       <div class="card m-1 flex-row justify-content-between border border-dark">
          <h3 :class="{strike: todoData.completed}">{{todoData.description}}</h3> 
          <div>
          <i class="fas fa-trash fa-2x" @click="deleteTodo"></i>
          <i class="fas fa-edit fa-2x" data-toggle="modal" :data-target="'#modal' + todoData._id"></i>  
         </div>
      </div>
   <div class="modal" :id="'modal' + todoData._id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <!-- <div class="modal-dailog" role="document"> -->
         <div class="modal-content">
            <div class="modal-header">
               <h5 class="modal-title" id="exampleModalLabel">Edit Task</h5>
               <button type="button" class="close btn-info" @click="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
               </button>
            </div>
            <div class="modal-body">
               <form @submit.prevent="editTodo" class="d-flex justify-content-between">
                  <input required type="text" v-model="todoData.description" placeholder="Edit Todo">
                  <button type="submit" class="btn btn-dark">UPDATE</button>
               </form>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-danger" data-dismiss="modal" @click="finish">FINISHED</button>
            </div>
            </div>
         <!-- </div> -->
      </div>
   </div>
</template>

<script>
export default {
   name: "todo",
   props: ['todoData'],
   data() {
      return {}
   },
   computed: {},
   methods: {
      deleteTodo() {
         this.$store.dispatch('deleteTodo', this.todoData._id)
      },
      editTodo() {
         this.$store.dispatch('editTodo', this.todoData)
         this.close()
      },
      close() {
      $(`#modal${this.todoData._id}`).hide()
      $('body').removeClass('modal-open')
      $('.modal-backdrop').remove()
      },
      finish() {
         this.todoData.completed = true
         this.$store.dispatch('editTodo', this.todoData)
         this.close()
      }
      //will need to write methods for put and delete here
   },
   components: {}
}
</script>

<style>
.modal {
   margin-top: 15%;
   width: 50%;
   left: 25%;
}
.movecard {
   margin-left: 15%;
}
.strike {
   text-decoration: line-through;
}
</style>
