import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import'./GalleryList.css';

function GalleryList({picList, fetchPics}){
    console.log(`In GalleryList`);

    return(
        <div className="galleryContainer">
            {picList.map(pic => (
                <GalleryItem
                    key={pic.id}
                    pic={pic}
                    fetchPics = {fetchPics}
                />
            ))}
        </div>
    )
}

export default GalleryList;