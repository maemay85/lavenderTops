
import { showData } from '../assets/showData'
import Show from './Show'


const Shows = () => {


  return (
    <div className="shows">
      {showData.map((show) => { return(
        <>
         <Show key={show.id} show={show} />
        </>)
      })}
    </div>
  )
}

export default Shows
