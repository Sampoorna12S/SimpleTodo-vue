<template>
  <div class="flex float-right">
    <button v-if="allTodos.length > 0" @click='openModal'
      class="border-2 border-blue-700 p-2 rounded"><img class='w-10' src="../assets/categorize.svg" /></button>
    <div v-if="showModal">
      <ModalComponent @clickEvent="openModal($val)" :todoList="allTodos" :title="PENDING_TITLE" :pendingModal="true" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ModalComponent from './ModalComponent.vue';
import { PENDING_TITLE } from '@/utilities/constants';

export default {
  components: {
    ModalComponent
  },
  data() {
    return { showModal: false, PENDING_TITLE }
  },
  computed: {
    ...mapGetters(["allTodos"])
  },
  methods: {
    openModal() {
      this.showModal = !this.showModal
    },
  },
}
</script>

<style lang="scss" scoped>

</style>