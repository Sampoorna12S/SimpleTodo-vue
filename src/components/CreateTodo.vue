<template>
  <div>
    <h1 class="text-2xl font-semibold text-blue-700">{{ MY_TODO }}</h1>
    <div class="p-5 flex sm:h-20">
      <input @change="todoTextChange" type="text" class="border-2 border-black-700 mr-5 w-full pl-5 pr-5 rounded"
        v-model="todoText" data-testid='create-input'/>
      <button v-bind:disabled='todoText === ""' @click="addTodoItem"
        class=" sm:text-sm text-xs bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded mr-5"
        :class="{ [`pointer-events-none text-gray-700 border-gray-500`]: todoText == '' }">{{ BUTTON.ADD }}</button>
        <task-filters />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { getAddObject } from '../utilities/utils'
import { BUTTON, MY_TODO } from '@/utilities/constants';
import TaskFilters from './TaskFilters.vue';

export default {
  components: { TaskFilters },
  data() {
    return {
      todoText: "", BUTTON, MY_TODO,
    }
  },
  methods: {
    ...mapActions(["addTodo"]),
    addTodoItem() {
      this.addTodo(getAddObject(this.todoText))
      this.todoText = ""
    },
    todoTextChange(e) {
      this.todoText = e.target.value
    },
  },
}
</script>