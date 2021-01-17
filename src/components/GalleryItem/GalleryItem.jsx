import'./GalleryItem.css';

function GalleryItem ({pic, fetchPics}) {
    return(
        <div key={pic.id} className="itemBox">
            <img src={pic.path}></img>
            <p>{pic.description}</p>
            <p>Likes: {pic.likes}</p>
        </div>
    )
}

export default GalleryItem;