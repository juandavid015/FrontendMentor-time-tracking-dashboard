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
        
        const timeCollection = {
          daily: [],
          weekly: [],
          monthly: []
        }
        data.forEach(( time => {
          const {title, timeframes } =  time;
          const {daily, weekly, monthly} = timeframes

          timeCollection.daily.push({title: title, timeframes: daily})
          timeCollection.weekly.push({title: title, timeframes: weekly})
          timeCollection.monthly.push({title: title, timeframes: monthly})
        }))
        setData(timeCollection);
        return(timeCollection)
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
