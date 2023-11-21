import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Detail.css"
import {format, parseISO} from "date-fns"
import { es } from 'date-fns/locale'

function Detail() {
    const {detailId} = useParams();
    const [eventData, setEventData] = useState({})
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${detailId}?apikey=${import.meta.env.VITE_TICKETMASTER_APIKEY}`)
                const data = await response.json();

                setEventData(data);
                setIsLoading(false)
                console.log(data)
            } catch (error) {
                setEventData({});
                setError(error);
                setIsLoading(false);
            }
        }
        fetchEventData();
    }, []);

    if(isLoading && Object.keys(eventData) === 0){
        return <div>Loading event...</div>
    }

    if(Object.keys(error) > 0){
        <div>Error</div>
    }

    console.log(eventData)
    return (
        <div className="container_detail" >
            <div className='container_infoDetail'>
                <img className="imageEvent_infoDetail" src={eventData.images?.[0].url} alt="" />
                <h3>{eventData.name}</h3>
                <p>{eventData.info}</p>
                {eventData.dates?.start.dateTime ? <p>{format(new Date(eventData.dates?.start.dateTime), "d LLLL yyyy H:mm", { locale: es })}hrs</p> : null}
            </div>
            <div className='container_seatInfo'>
                <h5>Mapa del evento</h5>
                <img src={eventData.seatmap?.staticUrl} alt="Seatmap event" />
                <p>{eventData.placeNote}</p>
                <p>Prices ${eventData.priceRanges?.[0].min} - ${eventData.priceRanges?.[0].max} {eventData.priceRanges?.[0].currency}</p>
            </div>
            <a href={eventData.url}>Go get your tickets</a>
        </div>
    )
}

export default Detail