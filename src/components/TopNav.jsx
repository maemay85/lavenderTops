import { Link } from 'react-router-dom'

const TopNav = () => {
  return (
  <div className="topnav">
    <Link to={'/home'}>Home</Link>
    <Link to={'/gallery'}>Gallery</Link>
  </div>
  )
}

export default TopNav
