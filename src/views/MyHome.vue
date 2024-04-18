<template>
  <div>
    Home Page
    <form @submit.prevent="addTodo">
      <input type="text" v-model="todoObj.name" placeholder="Enter Your Todo" />
      <div class="date">
        <label for="">From</label>
        <input type="date" v-model="todoObj.from" />
      </div>
      <div class="date">
        <label for="">To</label>
        <input type="date" v-model="todoObj.to" />
      </div>
      <input type="submit" />
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import mixins from '@/mixins/todo'
const {todoList, addToLocal} = mixins()
const todoObj = ref({
  id: 0,
  name: '',
  from: '',
  to: '',
  created_at: '',
  isCompleted:false
})

const addTodo = () => {
  todoObj.value.id = todoList.value.length + 1
  todoObj.value.created_at = new Date()
  todoList.value.push(todoObj.value)
  todoObj.value = {
    id: 0,
    name: '',
    from: '',
    to: '',
    created_at: '',
    isCompleted:false
  }
  addToLocal()
  console.log(todoList.value)
}


</script>

<style scoped>
form {
  width: 80%;
  display: flex;
  flex-direction: column;
}
form .date {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
}
input[type='text'] {
  width: 50%;
  padding: 15px;
}
input[type='date'] {
  width: 50%;
  padding: 15px;
}
input[type='submit'] {
  background-color: brown;
  color: aliceblue;
  font-size: 15px;
  padding: 14px;
}
</style>
