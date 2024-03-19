import { galleryData } from '../assets/galleryData'

const Gallery = () => {

  return (
    <div className="gallery">
      {galleryData.map((image)=> <img key={image.id} src={image} />)}
    </div>
  )
}

export default Gallery
