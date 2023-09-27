import { BrowserRouter, Route, Routes } from "react-router-dom";
import Front from "./components/layout/front";
import Hero from "./pages/Hero";
import Category from "./pages/admin/Caregoty";
import Posts from "./pages/common/Posts";
import Blog from "./pages/user/Blog";
import AboutUs from "./pages/AboutUs";
import MyPost from "./pages/user/MyPost";
import Register from "./pages/common/Register";
import Accaunt from "./pages/common/Accaunt";
import LogIn from "./pages/LogIn";
import AllPosts from "./pages/AllPosts";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />}>
          <Route index element={<Hero />} />
          <Route path="category" element={<Category />} />
          <Route path="posts" element={<Posts />} />
          <Route path="blog/:blogsId" element={<Blog />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<LogIn />} />
          <Route path="all-posts" element={<AllPosts />} />
          <Route path="accaunt" element={<Accaunt />} />
          <Route path="myposts" element={<MyPost />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
