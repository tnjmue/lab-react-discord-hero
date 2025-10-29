// src/App.jsx
import './App.css';
import DownloadButton from './components/DownloadButton.jsx';
import Header from "./components/Header.jsx"
import Navbar from './components/Navbar.jsx';
import OpenButton from './components/OpenButton.jsx';
import Text from "./components/Text.jsx"
import discordBackground from './assets/discord-background.png';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <Header />
        <Text />
        <DownloadButton />
        <OpenButton />
      </div>

      <img src={discordBackground} id="background" />

    </div>

  );
}

export default App;