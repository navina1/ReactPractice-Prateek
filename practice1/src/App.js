import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';
import Transfer from './components/Transfer';
import Stopwatch from './components/Stopwatch';
import Counter from './components/Counter';
import Tabs from './components/Tabs';
import TrafficLight from './components/TrafficLight';
import ProgressBar from './components/ProgressBar';
import MoleGame from './components/MoleGame';
import Header from './components/Header';

import { Route, Routes } from 'react-router-dom';
import IndexPage from './components/IndexPage';
import AnalogClock from './components/AnalogClock';
import Rating from './components/Rating';
import CardGame from './components/CardGame';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<IndexPage/>} />
          <Route path='/accordian' element={<Accordion/>} />
          <Route path='/counter' element={<Counter/>} />
          <Route path='/molegame' element={<MoleGame/>} />
          <Route path='/progressbar' element={<ProgressBar/>} />
          <Route path='/stopwatch' element={<Stopwatch/>} />
          <Route path='/tabs' element={<Tabs/>} />
          <Route path='/trafficlight' element={<TrafficLight/>} />
          <Route path='/transfer' element={<Transfer/>} />
          <Route path='/analogClock' element={<AnalogClock/>} />
          <Route path='/rating' element={<Rating/>} />
          <Route path='/cardgame' element={<CardGame/>} />
      </Routes>
    </div>
  );
}

export default App;
