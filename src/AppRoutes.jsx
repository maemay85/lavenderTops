import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"
import GalleryImage from "./components/GalleryImage"
import Shows from "./components/Shows"

const AppRoutes = () => {
  return(
<div className="approutes">

<Routes>

  <Route path='/' element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/gallery" element={<Gallery />} />
  <Route path="/shows" element={<Shows />} />
  <Route path="/gallery/:imageId" element={<GalleryImage />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<Home />} />

</Routes>

</div>
  )
}

export default AppRoutes
