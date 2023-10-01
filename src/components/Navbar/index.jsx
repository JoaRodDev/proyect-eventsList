import React, { forwardRef, useEffect, useImperativeHandle, useState, useRef } from 'react'

const Navbar = forwardRef(({onSearch}, ref) => {
  const [search, setSearch] = useState("")

  useEffect(() => {
    //
  }, [search, onSearch])
  
  const handleInputChange = (evt) =>{
    setSearch(evt.target.value)
  }

  const handleInputKeyDown = (evt) => {
    if(evt.key === "Enter"){
      onSearch(search)
    } 
  }

  useImperativeHandle(ref, () => ({
    search,
  }))

  return (
    <div ref={ref}>
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
});

Navbar.displayName = "Navbar"

export default Navbar