import { createStore } from "vuex";
import { Todo } from "../types/types";

interface Store {
  todos: Todo[];
  isModalOpen: boolean;
  todoIdToDelete: null | undefined | number;
}

export default createStore({
  state() {
    return {
      todos: [
        {
          name: "Learn Vue",
          id: 1231312,
          isCompleted: false,
        },
      ],
      isModalOpen: false,
      todoIdToDelete: null,
    };
  },
  getters: {
    todos(state: Store) {
      return state.todos;
    },
    checkExistingTodos(state: Store) {
      return state.todos && state.todos.length > 0;
    },
    countIncompleteTodos(state: Store) {
      return state.todos.reduce((acc: number, curr: Todo) => {
        if (!curr.isCompleted) {
          return (acc += 1);
        }
        return acc;
      }, 0);
    },
    isModalOpen(state: Store) {
      return state.isModalOpen;
    },

    getTodoToDelete(state: Store) {
      return state.todoIdToDelete;
    },
  },
  mutations: {
    createTodo(state: Store, newTodo: Todo) {
      state.todos.push(newTodo);
    },
    deleteTodo(state: Store, id: number) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    deleteCompletedTodos(state: Store) {
      state.todos = state.todos.filter((todo) => !todo.isCompleted);
    },
    toggleCheck(state: Store, id: number) {
      const updatedTodos = [...state.todos];
      const updatedTodoIndex = updatedTodos.findIndex((todo) => todo.id === id);
      updatedTodos[updatedTodoIndex].isCompleted =
        !updatedTodos[updatedTodoIndex].isCompleted;
      state.todos = updatedTodos;
    },
    toggleModal(state: Store) {
      state.isModalOpen = !state.isModalOpen;
    },
    setTodoId(state: Store, id: number) {
      state.todoIdToDelete = id;
    },
  },

  actions: {
    createTodo({ commit }, newTodo: Todo) {
      commit("createTodo", newTodo);
    },
    deleteTodo({ commit }, id: number) {
      commit("deleteTodo", id);
    },
    deleteCompletedTodos({ commit }) {
      commit("deleteCompletedTodos");
    },
    toggleCheck({ commit }, id: number) {
      commit("toggleCheck", id);
    },
    toggleModal({ commit }) {
      commit("toggleModal");
    },
    setTodoId({ commit }, id: number) {
      commit("setTodoId", id);
    },
  },
});
