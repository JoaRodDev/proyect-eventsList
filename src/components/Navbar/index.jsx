import React, { useState } from 'react'

function Navbar({onSearch}) {

  const [search, setSearch] = useState("")
  
  const handleInputChange = (evt) =>{
    setSearch(evt.target.value)
  }

  const handleInputKeyDown = (evt) => {
    if(evt.key === "Enter"){
      onSearch(search)
    } 
  }

  return (
    <div>
        <p>Boletera</p>
        <input 
        placeholder='Busca tu evento favorito' 
        type="text" 
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        value={search}
        />
    </div>
  )
}

export default Navbar