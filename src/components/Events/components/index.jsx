import React from 'react'
import { Link } from 'react-router-dom'

function EventItem({info, name, image, onEventClick, id}) {
  return (
    <div>
        <img src={image} alt={name} width={500} height={400}/>
        <h3>{name}</h3>
        <p>{info}</p>
        <button onClick={(evt) => {
            evt.stopPropagation(),
            onEventClick(id)}}> 
              <Link to={`/detail/${id}`}>
                See More
              </Link>
            </button>
    </div>
  )
}

export default EventItem