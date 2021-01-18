import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header.jsx';
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
      })
      .catch((err) => {
        console.log(err);
      })
    }

    return (
      <div className="App">
        <Header />
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
