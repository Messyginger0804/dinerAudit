import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdatePage from './pages/UpdatePage';
import DetailPage from './pages/DetailPage';
import Home from './pages/Home';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />

          <Route path='/restaurants/:id/update' Component={UpdatePage} />

          <Route path='/restaurants/:id' Component={DetailPage} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
