import './App.css'

// MY IMPORTS
import Header from "./components/Header.js"
import NavLeftMenu from "./components/NavLeftMenu.js"
import Main from "./components/Main.js"

function App() {
  return (
    <div className="app">
      <Header/>
      <NavLeftMenu/>
      <Main/>
    </div>
  )
}

export default App
