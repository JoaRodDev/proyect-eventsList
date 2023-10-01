import React from 'react'
import { Outlet } from 'react-router-dom'


function Profile() {
  return (
    <div>
        <h1>Profile</h1>
        <Outlet/>
    </div>
  )
}

export default Profile