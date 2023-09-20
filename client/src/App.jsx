import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdatePage from './pages/UpdatePage';
import DetailPage from './pages/DetailPage';
import Home from './pages/Home';
import { RestaurantsContextProvider } from './context/RestaurantsConext';


function App() {
  return (
    <RestaurantsContextProvider>
      <main className='py-[2%]'>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Home} />

            <Route path='/restaurants/:id/edit' Component={UpdatePage} />

            <Route path='/restaurants/:id' Component={DetailPage} />
          </Routes>
        </BrowserRouter>
      </main>
    </RestaurantsContextProvider>
  )
}

export default App
