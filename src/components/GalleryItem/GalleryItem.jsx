import'./GalleryItem.css';
import axios from 'axios';
import {useState} from 'react';

function GalleryItem ({pic, fetchPics}) {

    const [isClicked, setIsClicked] = useState(false);

    const putLike = () => {
        axios.put(`/gallery/like/${pic.id}`, pic.id)
        .then((response) => {
          fetchPics();
        })
        .catch((err) => {
          console.log(err);
        })
    }

    const toggleDescription = () => {
        setIsClicked(!isClicked);
    }

    return(
        <div key={pic.id}  className="itemBox">
            <span onClick={toggleDescription}>
                {isClicked
                    ? <span>{pic.description}</span>
                    : <img src={pic.path}></img>
                }
            </span>
            <button onClick={putLike}>Like</button>
            <span>{pic.likes} people like this!</span>
        </div>
    )
}

export default GalleryItem;