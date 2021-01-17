import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';

function App() {

    const [picList, setPicList] = useState([]);

    useEffect(() => {
      fetchPics();
    }, [])

    const fetchPics = () => {
      axios.get('/gallery')
      .then((response) => {
        setPicList(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <main>
          <GalleryList 
            picList = {picList}
            fetchPics = {fetchPics}
          />
        </main>
      </div>
    );
}

export default App;
