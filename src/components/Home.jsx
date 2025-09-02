import { Link } from "react-router-dom"

const Home = () => {
  return(
    <div className="home">
      <h1>{`lavendertops.com is under construction!`}</h1>
      <h2>in the meantime check out pics from our first show in our <Link to="/gallery">Gallery</Link></h2>
    </div>
  )
}

export default Home
