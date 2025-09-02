

const Show = (show) => {

  const {title, venue, date} = show.show;
  const formattedDate = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;



  return (
    <div className="show">
      <h2>{title}</h2>
      <p className="venue">{`${venue.name} (${venue.location}) - ${formattedDate}`}</p>
    </div>
  )
}

export default Show
