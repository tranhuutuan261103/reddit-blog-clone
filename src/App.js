import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/reset.css";
import "./assets/fonts/stylesheet.css";
import Blog from "./views/Blog/Blog";
import Comment from "./views/Comment/Comment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/comments" element={<Comment />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
