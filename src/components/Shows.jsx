
import { showData } from '../assets/showData'
import { useState } from 'react'
import Show from './Show'


const Shows = () => {

  const currentDate = new Date();
  const [upcoming, setUpcoming] = useState(true);
  const upcomingShows = [];
  const pastShows = [];
  showData.forEach((show) => show.date >= currentDate ? upcomingShows.push(show) : pastShows.push(show));


  return (upcoming ?
    <div className="shows">
      <h1>Upcoming Shows:</h1>
      {upcomingShows.length ?
        (upcomingShows.map((show)=>
        <Show key={show.id} show={show} />)
        )
        :
        <h2>{`No shows scheduled :(`}</h2>
      }
      <p className="show-time" onClick={()=>setUpcoming(false)}>See past shows</p>
    </div>
    :
    <div className="shows">
      <h1>Past Shows:</h1>
      {pastShows.map((show)=>
      <Show key={show.id} show={show} />)}
      <p className="show-time" onClick={()=>setUpcoming(true)}>See upcoming shows</p>
    </div>
  )
}

export default Shows
