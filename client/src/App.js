import { Routes, Route } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import AllPosts from './pages/AllPosts';
import Home from './pages/Home';
import Folders from './pages/Folders';
import StepsList from './components/Folders/StepsList';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Layout from './components/Layout';

{
  /*  <Header/>
      <h1 className="home-title">Gestión de expedientes</h1> */
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*  public routes */}
        <Route path="/login" element={<Login />} />
        {/*  private routes */}
        <Route path="/" exact element={<Home />} />
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/add" element={<CreatePost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/folders" element={<Folders />} exact />
        <Route path="/folders/:folderlist" element={<StepsList />} />
        {/* catch all */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
