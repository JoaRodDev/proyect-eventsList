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
                const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${detailId}?apikey=PJJSX2JIhkbejyMMk1QIkJFaY0rwSjto`)
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

    console.log(format(parseISO(new Date(eventData.dates?.start.dateTime)), "d LLLL yyyy H:mm", { locale: es }))

    return (
        <div className="container_detail" >
            <div className='container_infoDetail'>
                <img src={eventData.images?.[0].url} alt="" />
                <h3>{eventData.name}</h3>
                <p>{eventData.info}</p>
                {/* {eventData.dates?.start.dateTime ? <p>{format(new Date(eventData.dates?.start.dateTime), "d LLLL yyyy H:mm")}hrs</p> : null} */}
            </div>
        </div>
    )
}

export default Detail