import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import Header from './components/Layout/Header';
import AllPosts from './pages/AllPosts';
import Home from './pages/Home';
import Folders from './pages/Folders';
import StepsList from './components/Folders/StepsList';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <h1 className="home-title">Gestión de expedientes</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/posts" component={AllPosts} />
        <Route path="/add" component={CreatePost} />
        <Route path="/edit/:id" component={EditPost} />
        <Route path="/folders" component={Folders} exact />
        <Route path="/folders/:folderlist" component={StepsList} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
