
import './App.css';
import NavBar from './Components/Sidebar';
import Header from './Components/Header';
import Body from './Components/Body';
import Home from './Components/Home';
import PlayingNowApi from './Components/PlayingNowApi';
import TopRated from './Components/TopRated';


function App() {


  return (
    <div className="App">
      <Header />
      <NavBar />

      <Body>
        <Home />
        <PlayingNowApi />
        <TopRated />
      </Body>

    </div>
  );
}

export default App;
