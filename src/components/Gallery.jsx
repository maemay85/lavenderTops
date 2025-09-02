import { Link } from 'react-router-dom'
import { galleryData } from '../assets/galleryData'

const Gallery = () => {

  return (
    <div className="gallery">
      {galleryData.map((image)=>
        <Link className={image.direction} key={image.id} to={`/gallery/${image.id}`}>
          <img src={image.imageUrl} />
        </Link>)}
    </div>
  )
}

export default Gallery
