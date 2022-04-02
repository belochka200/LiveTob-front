import NavBar from "./components/ui/navbar/NavBar";
import "./styles/grid.css"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Footer from "./components/ui/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
