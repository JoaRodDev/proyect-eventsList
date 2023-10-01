import React from 'react'
import EventItem from './components'
import LoadSpiner from '../LoadSpiner';


function Events({searchTerm, events}) {
    const handleEventItemClick = (id) => {
        console.log("evento clickeado: "+ id)
    }

    const renderEvents = ( ) => {
        let eventsFiltered = events;

        if(searchTerm.length > 0){
            eventsFiltered = eventsFiltered.filter((item) => item.name.toLocaleLowerCase().includes(searchTerm))
        }

        return eventsFiltered.map((eventItem) => (
            <EventItem key={`event-item-${eventItem.id}`}
            name={eventItem.name}
            image={eventItem.images[0].url}
            info={eventItem.info}
            onEventClick={handleEventItemClick}
            id={eventItem.id}
            />
        ));
    };

    return (
        <div>
            <p>Eventos</p>
            {renderEvents()}
        </div>
    )
}

export default Events