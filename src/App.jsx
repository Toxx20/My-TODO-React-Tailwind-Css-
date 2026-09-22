import { useEffect, useState } from "react";
import "./index.css";
import { BodyContainer } from "./layout/BodyContainer.jsx";

function App() {
  // theme de Todo
  const [theme,setTheme]=useState(() => {
    return localStorage.getItem("theme") || "dark";
  })

  const themeTodo = theme === 'dark'

  function darkTheme(){
    setTheme('dark')
  }

  function lightTheme(){
    setTheme('light')
  }

  useEffect(()=>{
    localStorage.setItem("theme",theme)
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    }
    else{
      document.documentElement.classList.remove('dark')
    }

  },[theme])
  
  return (
    <section className="container">
      <BodyContainer ThemeTodo={themeTodo} FnDarkTheme={darkTheme} FnLightTheme={lightTheme} ></BodyContainer>
    </section>
  );
}





export default App;
