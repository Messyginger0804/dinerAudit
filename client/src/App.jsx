import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdatePage from './pages/UpdatePage';
import DetailPage from './pages/DetailPage';
import Home from './pages/Home';


function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />

          <Route path='/restaurants/:id/update' Component={UpdatePage} />

          <Route path='/restaurants/:id' Component={DetailPage} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
