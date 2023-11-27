import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/home';
import Layout from './component/layout';
import About from './page/about';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
