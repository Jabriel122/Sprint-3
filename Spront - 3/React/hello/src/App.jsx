
import "./App.css";
import Rotas from "./routes";
import { ThemeContext } from "./context/ThemeContext";
import { useContext, useEffect, useState } from "react";
function App() {

  // const [theme, setTheme] = useState(ThemeContext);
  // const produto = [
  //   {

  //   }
  // ];
  const [theme, setTheme] = useState("light");

  // const { ThemeContext } = useContext(ThemeContext);
  useEffect(() => {
    const tm = localStorage.getItem("theme")
    if(tm !== null){
      setTheme(tm)
    }else{
      setTheme("light")
    }
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App ${theme === "dark" ?  "App-dark" : ""}`}>
        <Rotas />
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
