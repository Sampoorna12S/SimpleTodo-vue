import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import TodoList from '@/components/TodoList.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('TodoList.vue', () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      allTodos: jest.fn(),
    };
    store = new Vuex.Store({
      getters,
    });
  });
  it('renders todoList', () => {
    const wrapper = shallowMount(TodoList, { store, localVue });
    expect(wrapper.isVisible()).toBe(true);
  });
});
