import MainPage from "./components/MainPage.vue";
import ToDoList from "./components/ToDoList.vue";
import NotePad from "./components/NotePad.vue";
import GamesCounter from "./components/GamesCounter.vue";
import ChatView from './components/ChatView.vue'

export default [
  { path: "/", component: MainPage, name: "MainPage" },
  { path: "/todo", component: ToDoList, name: "ToDoList" },
  { path: "/notepad", component: NotePad, name: "NotePad" },
  { path: "/games-counter", component: GamesCounter, name: "GamesCounter" },
  { path: '/chat', component: ChatView, name: "ChatView" },
];
