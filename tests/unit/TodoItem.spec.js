import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import TodoItem from '@/components/TodoItem.vue';

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
  it('renders Todoitem', () => {
    const wrapper = shallowMount(TodoItem, { propsData: { todo: { title: 'Need to do Test cases', id: 1, completed: false } } });
    expect(wrapper.isVisible()).toBe(true);
  });
});
