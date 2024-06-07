import { createRouter, createWebHistory } from "vue-router";
import TodosList from "../components/TodoList.vue";
import TodoDetails from "../views/TodoDetails.vue";
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      redirect: "/todos",
    },
    {
      path: "/todos",
      component: TodosList,
    },
    {
      path: "/todos/:id",
      component: TodoDetails,
      props: true,
    },
  ],
});
