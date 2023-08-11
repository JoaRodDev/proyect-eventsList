import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Events from './components/Events'
import SingupForm from './components/SignupForm'

function App() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleNavbarsearch = (term) => {
    setSearchTerm(term)
  }

  return (
    <>
      {/* <Navbar onSearch={handleNavbarsearch}/>
      <Events searchTerm={searchTerm}/> */}
      <SingupForm/>
    </>
  )
}

export default App
