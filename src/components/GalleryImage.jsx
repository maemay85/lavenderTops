import { useParams, Link } from "react-router-dom"
import { galleryData } from "../assets/galleryData";
import { useNavigate } from "react-router-dom";
import useKeypress from "react-use-keypress";

const GalleryImage = () => {

  const { imageId } = useParams();
  const id = Number(imageId)
  const image = galleryData[id];
  const navigate = useNavigate();
  useKeypress(['ArrowLeft', 'ArrowRight'], (e)=> {
    if (e.key === 'ArrowLeft' && id>1) navigate(`/gallery/${id-1}`);
  if (e.key === 'ArrowRight' && id<galleryData.length-1) navigate(`/gallery/${id+1}`);
  })

  return(
    <div className="galleryimage-container">
      { id >1 ? <Link to={`/gallery/${id-1}`}>{`< Prev `}</Link> : <div></div>}
      <div className={`galleryimage-${image.direction}`}>
        <img src ={image.imageUrl} />
      </div>
      { id < galleryData.length-1 ? <Link to={`/gallery/${id+1}`}>{` Next >`}</Link> : <div></div>}
    </div>
  )
}

export default GalleryImage
