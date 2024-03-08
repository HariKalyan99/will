import './App.css'
import axios from 'axios';
import Header from './components/Header';
import Mainsection from './components/Mainsection';
import { useEffect, useState } from 'react';

function App() {
  const [display, setDisplay] = useState("createPost");
  
  const displayTab = (tab) => {
    setDisplay(tab)
  }

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const {signal} = controller;
    const fetchApi = async() => {
      try{
        const {data} = await axios.get(`http://localhost:8081/posts`, signal);
      setPostList(data)
      }catch(err){
        console.log("Error", err);
      }
    }

    fetchApi();

    return () => {
      controller.abort();
    }
  }, [])



  return (
    <div>
      <Header />
      <Mainsection display={display} displayTab={displayTab} postList={postList}/>
    </div>
  )
}

export default App
