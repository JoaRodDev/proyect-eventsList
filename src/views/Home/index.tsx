import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import Events from '../../components/Events'
import Navbar from '../../components/Navbar'
import useEventsData from '../../hooks/useEventsData'
import LoadSpiner from '../../components/LoadSpiner'
import ReactPaginate from 'react-paginate'
import "./Home.css"

function Home() {
    const { events, isLoading, error, fetchEvents, page } = useEventsData();
    const [searchTerm, setSearchTerm] = useState("")
    const containerRef = useRef()
  
    useEffect(() => {
        fetchEvents();
    }, [])

    const handlePageClick = ({ selected }) => {
        fetchEvents(`&keyword=${searchTerm}&page=${selected}`)
    }

    const handleNavbarsearch = (term) => {
      setSearchTerm(term);
      fetchEvents(`&keyword=${term}`);
    }

    const renderEvents = () => {
        if(isLoading) {
            return <LoadSpiner/>
        }

        if(error) {
            return <div><h3>Sorry, error to find a events</h3></div>
        }

        return (
            <div>
                <Events searchTerm={searchTerm} events={events}/>
                <ReactPaginate
                className='pagination_events'
                nextClassName=''
                previousClassName=''
                pageClassName='pagination_page'
                activeClassName='pagination_active'
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={page.totalPages}
                previousLabel="<"
                renderOnZeroPageCount={null}
                />
            </div>
        )
    }

    return (
      <>
        <Navbar onSearch={handleNavbarsearch} ref={containerRef} />
        { renderEvents() }
      </>
    )
}

export default Home