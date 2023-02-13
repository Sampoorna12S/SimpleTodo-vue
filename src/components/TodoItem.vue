<template>
  <div class="flex flex-nowrap px-20 w-100 my-5">
    <div class="mr-10">
      <input :checked="completed" @change="onCompleted(todo)" type="checkbox" />
    </div>
    <p v-if="!editing" class="mr-10" :class="{ [`line-through`]:completed}">{{ todo.title }}</p>
    <input v-bind:value="todoText" v-else type="text" @change="todoTextChange" class="mr-10 border-2 border-sky-700 rounded border-opacity-25 pr-2 w-full pl-2" />
    <button v-if="!completed" @click="updateTodoItem(todo)"
      class="inline-block px-3 py-1 border-1 border-blue-400 text-blue-400 font-small text-xs leading-tight uppercase rounded-full transition duration-150 ease-in-out">{{
        editing?BUTTON.UPDATE: BUTTON.EDIT
      }}</button>
    <button  v-if="!completed" @click="openModal"
      class="inline-block px-3 py-1 border-1 border-red-400 text-red-400 font-small text-xs leading-tight uppercase rounded-full transition duration-150 ease-in-out">
      {{ BUTTON.DELETE }}
    </button>
    <button @click='addTodoItem(todo)'
      class="inline-block px-3 py-1 border-1 border-amber-400 text-amber-400 font-small text-xs leading-tight uppercase rounded-full transition duration-150 ease-in-out">
      {{ BUTTON.DUPLICATE }} </button>
    <div v-if="showModal">
      <ModalComponent @clickEvent="openModal($val)" :todo="todo" :content='DELETE_CONTENT' :title="DELETE_TITLE"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import ModalComponent from './ModalComponent.vue';
import { BUTTON, DELETE_CONTENT, DELETE_TITLE } from '@/utilities/constants';
import { getAddObject } from '../utilities/utils';

export default {
  components: { ModalComponent },
  props: {
    todo: {}
  },
  data() {
    return { todoText: '', editing: false, completed: false, showModal: false, DELETE_CONTENT, DELETE_TITLE, BUTTON }
  },
  methods: {
    ...mapActions(["updateTodo","addTodo"]),
    onCompleted(todo) {
      this.completed=!todo.completed
      todo.completed = !todo.completed
      this.updateTodo(todo)
    },
    todoTextChange(e) {
      this.todoText = e.target.value
    },
    updateTodoItem(todo) {
      this.editing = this.editing == true ? false : true
      if (this.editing) {
        this.todoText = todo.title
        this.updateTodo(todo)
      }
      else {
        todo.title = this.todoText
      }
    },
    openModal() {
      this.showModal = !this.showModal
    },
    addTodoItem(todo){
      this.addTodo(getAddObject(todo.title))
    }
  },
}
</script>

<style lang="scss" scoped>

</style>