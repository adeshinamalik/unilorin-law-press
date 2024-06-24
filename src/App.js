import './App.css';
import Homepage from './pages/Homepage';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Journal from './pages/Journal';
import UserContextProvider from './pages/Context/UserContextProvider';
import PostNews from './pages/PostNews';
import PostArticle from './pages/PostArticle';
import ThemeContextProvider from './pages/Context/ThemeContextProvider';
import NewsList from './pages/NewsList';
import PostBlog from './pages/PostBlog';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import Test from './pages/Test';
import NewsDetail from './pages/NewsDetail';
import ArticlePage from './pages/ArticlePage';
import ArticlesList from './pages/ArticleList';
import PostEvent from './pages/PostEvent';
import EventDetails from './pages/EventDetails';
import EventListings from './pages/EventListings';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <ThemeContextProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/events" element={<EventListings/>} />
            <Route path="/signup" element={<Register />} />
            <Route path="/news" element={<NewsList />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/postarticle" element={<PostArticle />} />
            <Route path="/postblog" element={<PostBlog />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/test/:id" element={<Test />} />
            <Route path="/News/:id" element={<NewsDetail />} />
            <Route path="/articles/:id" element={<ArticlePage />} />
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/post-event" element={<PostEvent />} />
            <Route path="/events/:id" element={<EventDetails />} />



            <Route
              path="/postnews"
              element={
                <PostNews />
              }
            />
            {/* Add more routes as needed */}
          </Routes>
        </ThemeContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
