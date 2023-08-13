
import React from 'react'
import Navbar from '../Navbar/Navbar'
import SearchForm from '../Search/Search'
import HotelList from "../HotelList/HotelList"

const Home = () => {
  return (
    <div>
    <div><Navbar /> </div>
    <div> <SearchForm/></div>
    <div> <HotelList/></div>
    </div>
    
    
  )
}

export default Home
