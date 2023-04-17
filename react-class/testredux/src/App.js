import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import First from './components/First';
import Second from './components/Second';
import Category from './components/Category';
import { useEffect } from 'react';
import { fetchCategory } from './redux-config/CategorySlice';

function App() {
  const {value} = useSelector(state=>state.data); //
  const {headOfficeAddress} = useSelector(state=>state.address);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchCategory());
  },[]);
  return <>
     <h1>It is App component: {value} {headOfficeAddress}</h1>
     {/* <First/>
     <Second/> */}
     <Category/>
  </>
}

export default App;
