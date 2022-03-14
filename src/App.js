import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Article from "./Component/Article";
import { BlogProvider } from "./Component/BlogContext";
import CategoryPage from "./Component/CateogryPage";
import Header from "./Component/Header";
import Home from "./Component/Home";
import PageNotFound from "./Component/PageNotFound";

function App() {
  return (
    <div>
      <BlogProvider>
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/article/:articleTitle/:articleCategory"
              element={<Article />}
            />
            <Route
              path="/categoryPage/:categoryName"
              element={<CategoryPage />}
            />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </BlogProvider>
    </div>
  );
}

export default App;
