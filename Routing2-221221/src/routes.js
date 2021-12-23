import Home from './components/pages/Home';
import PostDetail from './components/pages/PostDetail';
import Posts from './components/pages/Posts';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import PostSearch from './components/pages/PostSearch';

const routes = [
  { title: 'Ana Sayfa', path: '/', element: Home, isNav: true },
  { title: 'Hakkımızda', path: 'about', element: About, isNav: true },
  { title: 'Posts', path: 'posts', element: Posts, isNav: true },
  {
    title: 'PostDetail',
    path: 'posts:postId',
    element: PostDetail,
    isNav: false,
  },
  { title: 'Contact', path: 'contact', element: Contact, isNav: true },
  { title: 'Search', path: 'arama', element: PostSearch, isNav: false },
];

export default routes;
