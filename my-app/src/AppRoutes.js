import Home from './Pages/Homepage.js';
import Projects from './Pages/ViewingPage.js';

const AppRoutes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/projects', component: <Projects /> }
];

export default AppRoutes;