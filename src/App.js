import Topbar from './components/topbar/Topbar'
import './App.css';
import Header from './components/header/Header';
import TableContent from './components/tablecontent/TableContent';
import About from './components/about/About';
import Obj from './components/obj/Obj';
import Features from './components/features/Features';
import Pro from './components/pro/Pro';
import Play from './components/play/Play';
import Footer from './components/footer/Footer'

function App() {
  return (
   <>
   <Topbar/>
   <Header/>
   <TableContent/>
   <About/>
   <Obj/>
   <Features/>
   <Pro/>
   <Play/>
   <Footer/>
   </>
  );
}

export default App;
