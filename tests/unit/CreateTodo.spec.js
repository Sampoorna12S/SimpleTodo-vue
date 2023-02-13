import { createLocalVue, mount } from '@vue/test-utils';
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
      allTodos: [],
    };
    store = new Vuex.Store({
      actions,
      getters,
      state,
    });
  });
  it('renders createTodo', () => {
    const wrapper = mount(CreateTodo);
    expect(wrapper.isVisible()).toBe(true);
  });
});
