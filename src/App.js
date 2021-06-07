import './App.css'

// MY IMPORTS
import Header from "./components/Header.js"
import NavLeftMenu from "./components/NavLeftMenu.js"
import Main from "./components/Main.js"


import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import downloadButton from './assets/icons/download-button.png'
import rateStarButton from './assets/icons/rate-star-button.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'

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
