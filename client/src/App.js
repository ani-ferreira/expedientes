import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreatePost from "./components/pages/CreatePost";
import EditPost from "./components/pages/EditPost";
import Header from "./components/Layout/Header";
import AllPosts from "./components/pages/AllPosts";
import Home from "./components/pages/Home";
import Folders from "./components/pages/Folders";
import StepsList from "./components/Folders/StepsList";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <h1 className="home-title">Gestión de expedientes</h1>
      <Switch>
        <Route path="/" exact component={Home} />
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
