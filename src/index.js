import Home from './containers/Home.js';
import Todo from './containers/Todo.js';
import Router from './Router.js';

const router = new Router();
const HomePage = new Home({ router });
const TodoPage = new Todo({ router });
const pages = [
  { name:'home', path:'', page: HomePage },
  { name:'todo', path:'todo', page: TodoPage }
]

router.setPage({ pages });