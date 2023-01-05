import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRoutes from './app-routes';
import SideMenu from "./components/side-menu/side-menu";

function App() {
  return (
    <>
    
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
    </>
    
    
  );
}

export default App;
