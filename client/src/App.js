import { Routes, Route } from 'react-router-dom';
import RequireAuth from '../src/components/RequireAuth';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import AllPosts from './pages/AllPosts';
import Home from './pages/Home';
import Folders from './pages/Folders';
import StepsList from './components/Folders/StepsList';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Layout from './components/Layout';
import Admin from './pages/Admin';
import Register from './pages/Register';
import RequireAdmin from './components/RequireAdmin';
import Unathorized from './pages/Unathorized';
import {useSelector} from 'react-redux'
import axios from 'axios';

const token = localStorage.getItem('token');
axios.defaults.headers["Authorization"]= token

const App = () => {
  const token = useSelector((state)=>state.authReducer.token)
console.log(token)
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*  public routes */}
        <Route path="login" element={<Login />} />
        <Route path="unathorized" element={<Unathorized />} />
        {/*  private routes */}
        <Route element={<RequireAuth />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<AllPosts />} />
          <Route path="add" element={<CreatePost />} />
          <Route path="edit/:id" element={<EditPost />} />
          <Route path="folders" element={<Folders />} exact />
          <Route path="folders/:folderlist" element={<StepsList />} />
          <Route element={<RequireAdmin />}>
            <Route path="admin" element={<Admin />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
        {/* catch all */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
