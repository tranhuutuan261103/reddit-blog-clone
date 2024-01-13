import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./views/Blog/Blog";
import Comment from "./views/Comment/Comment";
import Navbar from "./views/containers/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/comments/:id" element={<Comment />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
