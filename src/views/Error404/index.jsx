import React from 'react'
import "./Error404.css"
import ButtonOne from '../../components/buttonOne'
import { Link, useRouteError } from 'react-router-dom'

function Error404() {
    const error = useRouteError();
  return (
    <div>
        <h1>{error.status}, Sorry!</h1>
        <h4>We can't find the route you are looking for</h4>
        <p>{ error.data }</p>
        <Link path={"/"}>
            <ButtonOne text="Homepage" />
        </Link>
    </div>
  )
}

export default Error404