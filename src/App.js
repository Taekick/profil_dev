import React from "react";
import Picture from "./Picture/Picture";
import Profil from "./Profil/Profil.js";
import Skills from "./Skills/Skills";

function App() {
  return (
    <div className='wrapper'>
      <Picture></Picture>
      <Profil></Profil>
      <Skills></Skills>
    </div>
  );
}

export default App;
