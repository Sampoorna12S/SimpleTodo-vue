import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import CreateTodo from '@/components/CreateTodo.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('CreateTodo.vue', () => {
  let actions, getters, state;
  let store;

  beforeEach(() => {
    actions = {
      addTodo: jest.fn(),
    };
    getters = {
      allTodos: jest.fn(),
    };
    state = {
      allTodos: [{ id: 1, title: 'Test Case', completed: false }],
    };
    store = new Vuex.Store({
      actions,
      getters,
      state,
    });
  });
  it('renders createTodo', () => {
    const wrapper = shallowMount(CreateTodo, { store, localVue });
    expect(wrapper.isVisible()).toBe(true);
  });
});
