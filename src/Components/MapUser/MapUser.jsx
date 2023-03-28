import React from 'react'
import Maps from '../Maps/Maps'
import User from '../User/User'
import "./MapUser.css"
const MapUser = () => {
  return (
    <div className='Mapuser'>
        <div className='muUser'>
        <User/>
        </div>

<div className='muUser'>
<Maps/>
</div>


    </div>
  )
}

export default MapUser