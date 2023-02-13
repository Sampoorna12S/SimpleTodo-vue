<template>
  <div>
    <div
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-sm">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div v-if="!pendingModal"
            class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h4 class="text-2xl font-semibold"> {{ title }} </h4>
          </div>
          <div v-if="pendingModal"
            class="items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <button @click="setOption(pending)" class="border-2 border-black-700 p-2 rounded mr-7"
              :class="{ [`bg-sky-300 border-sky-700`]: isPending }">{{ FILTERS.PENDING }}</button>
            <button class="border-2 border-black-700 p-2 rounded" :class="{ [`bg-sky-300 border-sky-700`]: !isPending }"
              @click="setOption(completed)">{{ FILTERS.COMPLETED }}</button>
          </div>
          <!--body-->
          <div v-if="!pendingModal" class="relative p-6 flex-auto">
            <p class="my-4 text-slate-500 text-lg leading-relaxed"> {{ content }} </p>
          </div>
          <div v-show="pendingModal" v-for="(item, index) in list" class="relative p-3 flex flex-nowrap" :key='item.id'>
            <p>{{ index+ 1}}. {{ item.title }}</p>
          </div>
          <p v-if="pendingModal && list.length == 0" class="p-2">{{ NO_DATA }}</p>
          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button v-if="!pendingModal"
              class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button" v-on:click="deleteItem(todo.id)"> {{ BUTTON.DELETE }} </button>
            <button
              class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              :class='{ [`text-blue-500`]: pendingModal }' type="button" @click='toggleModal()'> {{ BUTTON.CANCEL }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { NO_DATA, FILTERS, BUTTON, pending, completed } from '../utilities/constants'
import { getCompletedTasks, getPendingTasks } from '../utilities/utils'

export default {
  data() {
    return {
      list: this.todoList ? getPendingTasks(this.todoList) : [], isPending: true, NO_DATA, FILTERS, BUTTON, pending, completed
    }
  },
  props: {
    todo: {},
    title: String,
    content: String,
    pendingModal: Boolean,
    todoList: []
  },
  methods: {
    ...mapActions(["deleteTodo"]),
    toggleModal: function () {
      this.$emit('clickEvent', false)
    },
    deleteItem(id) {
      this.deleteTodo(id)
    },
    setOption(val) {
      if (val == pending) {
        this.isPending = true
        this.list = getPendingTasks(this.todoList)
      } else {
        this.isPending = false
        this.list = getCompletedTasks(this.todoList)
      }
    }
  }
}
</script>