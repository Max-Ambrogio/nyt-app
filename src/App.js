import React from 'react';
import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import logo from './logo.svg';
import './App.scss';
import Header from './components/header';
import About from './pages/About';
import BlogLanding from './pages/BlogLanding';
import BlogArticle from './pages/BlogArticle';
import Search from './pages/Search';
import SearchResults from './pages/SearchResult';


function AppWrapper(props){
  return (<article>{props.children}</article>)
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<AppWrapper />} /> 
              <Route path='about' element={<About />} />
              <Route path='blog' element={<BlogLanding />}>
                <Route path=":blogId" element={<BlogArticle />} />
                <Route index element={<BlogArticle />} />
                <Route path='*' element={<p>Select an article</p>} />
              </Route>
              <Route path='search' element={<Search />}> 
                <Route path=':searchId' element={<SearchResults />} />
                <Route index element={<SearchResults />} />
                <Route path='*' element={<p>Select an article</p>} />
              </Route>
              
          </Routes>
        </main>

        <footer>
          &copy; 2022 me.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
