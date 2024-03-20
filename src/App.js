import "../node_modules/bootstrap/dist/css/bootstrap.css"


import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Clint from "./clint/Clint";
import { EditClint } from "./clint/Edit";

function App() {

  return (
<Routes>
  <Route path='/' element ={<Clint />} />
  <Route path='/edit' element ={<EditClint /> } />
</Routes>
  );
}

export default App;
