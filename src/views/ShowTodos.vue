<template>
  <div>
    <h2>show todos</h2>

    <table v-if="todoList.length >0">
      <thead>
        <th>Todo Name</th>
        <th>Start</th>
        <th>End</th>
        <th>Created At</th>
        <th>ِActions</th>
      </thead>
      <tbody>
        <tr
          v-for="(todo, i) in todoList"
          :key="i"
          :style="`${todo.isCompleted ? 'background-color : yellow' : ''}`"
        >
          <td>{{ todo.name }}</td>
          <td>{{ todo.from }}</td>
          <td>{{ todo.to }}</td>
          <td>{{ new Date(todo.created_at).toLocaleDateString() }}</td>
          <td>
            <button v-if="todo.isCompleted" @click="completed(i)">Incompleted</button>
            <button v-else @click="completed(i)">Completed</button>
            <button @click="deleteTodo(i)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <h2 v-else>No Todos To Show</h2>
  </div>
</template>

<script setup>
import mixins from '@/mixins/todo'
const {todoList, addToLocal} = mixins()

const deleteTodo = (index) => {
  todoList.value.splice(index, 1)
  addToLocal()
}
const completed = (index) => {
  todoList.value[index].isCompleted = !todoList.value[index].isCompleted
  addToLocal()
 
}


</script>

<style scoped>
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

table td,
table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}

table tr:hover {
  background-color: #ddd;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
</style>
