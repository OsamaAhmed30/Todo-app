import { ref, onMounted } from 'vue'

const mixins = () => {
  const todoList = ref([])
    //add to local storage
  const addToLocal = () => {
    localStorage.setItem('todo', JSON.stringify(todoList.value))
  }
  const updateTodo=()=>{
    if (localStorage.getItem('todo')) {
      todoList.value = JSON.parse(localStorage.getItem('todo'))
    }
  }
  onMounted(() => {
    updateTodo()
  })

  return {todoList, addToLocal, updateTodo,onMounted}

}

export default mixins