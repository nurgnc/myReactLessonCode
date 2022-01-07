import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';

const routes = [
  { title: 'Ana Sayfa', element: Home, path: '/', isNav: true },
  { title: 'Hakkımızda', element: About, path: '/hakkimizda', isNav: true },
  { title: 'Profile', element: Profile, path: '/profile', isNav: true },
];

export default routes;
