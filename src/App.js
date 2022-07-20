import logo from './logo.svg';
import './App.css';
import LeftBar from './components/LeftBar/LeftBar';
import Daily from './components/Body/Daily';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Weekly from './components/Body/Weekly';
import Monthly from './components/Body/Monthly';
import React, { useState, useEffect} from 'react';

function App() {
 
  const getData=()=>{
    
    fetch("data.json")
      .then(res => {
        return res.json();
      })
      .then(data =>  {
        
        let daily = data.map(time => {
          return {title: time.title, timeframes: time.timeframes.daily};
          
        })
        let weekly = data.map(time => {
          return {title: time.title, timeframes: time.timeframes.weekly};
          
        })
        let monthly = data.map(time => {
          return {title: time.title, timeframes: time.timeframes.monthly};
          
        })
        setData({daily: daily, weekly: weekly, monthly: monthly});
        return(daily, monthly, weekly)
      });
  }
  const [data, setData] = useState([]);
  useEffect(()=>{
     getData();
  },[])
  
  
 
  return (
    <BrowserRouter>
      <main className="App" >
        <div className='grid-container'>
          <LeftBar />
          <Routes>
            <Route path='/daily' element={<Daily data = {data.daily}/>}/>
            <Route path={'/weekly'} element={<Weekly data={data.weekly}/>}/>
            <Route path={'/'} element={<Weekly data={data.weekly}/>}/>
            <Route path='monthly' element={<Monthly data= {data.monthly}/>}/>
          </Routes>
          
        </div>
      </main>
    </BrowserRouter>
    
  );
}

export default App;
