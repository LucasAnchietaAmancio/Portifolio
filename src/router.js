import {BrowserRouter,Route,Router, Routes} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
function AppRouter(){

    return(
        <BrowserRouter>
         <Header/>
         <Routes>
            <Route path='/' element={<Home/>}/>
         </Routes>
         <Footer/>
        </BrowserRouter>
    )
}

export default AppRouter;