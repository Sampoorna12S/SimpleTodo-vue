<template>
  <div>
    <div v-for="todo in allTodos" :key='todo.id'>
      <TodoItem :todo="todo"/>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    TodoItem,
  },
  computed: {
    ...mapGetters(["allTodos"])
  },
}
</script>

<style lang="scss" scoped>

</style>