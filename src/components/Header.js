import React from "react";
import foto from "../assets/Grupo de máscara 2@2x"

function Header() {
  return (
    <div>
        <nav>
            <ul>
                <li>ABOUT</li>
                <li>RECIPES</li>
                <li>RECIPES</li>
            </ul>
        </nav>
      <img src={foto} alt=""/>
    </div>
  );
}

export default Header;
