import React from 'react'

function EventItem({info, name, image, onEventClick, id}) {
  return (
    <div>
        <img src={image} alt={name} width={500} height={400}/>
        <h3>{name}</h3>
        <p>{info}</p>
        <button onClick={(evt) => {
            evt.stopPropagation(),
            onEventClick(id)}}
            > Ver más</button>
    </div>
  )
}

export default EventItem