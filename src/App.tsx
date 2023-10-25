import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./containers/Main/Main";
import Layout from "./containers/Layout/Layout";
import BlogPost from "./containers/BlogPost/BlogPost";
import "./styles/index.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
