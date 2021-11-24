import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Route, Routes } from "react-router-dom";

import { HomePage } from './comps/homepage';
import { MyNavBar } from './comps/MyNavBar';
import { CompanyPage } from './comps/CompanyPage';
import { useState } from 'react';
import  FavouritesPage  from './comps/FavouritesPage';


function App() {
  const[search, setSearch] = useState("developer")
  return (
    <BrowserRouter>
    <MyNavBar setSearch={setSearch} />
    <Routes>
      <Route path="/"  element={<HomePage search={search} />} />
      <Route path="/:companyId"  element={<CompanyPage />} />
      <Route path="/favourites" element={<FavouritesPage/>} />
    </Routes>
  </BrowserRouter>
)
  
}

export default App;
