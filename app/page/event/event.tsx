import React from 'react'
import EventCard, { eventType } from './eventCard'


const Event = async() => {

    const res= await fetch(`${process.env.BACKEND_URL}api/event`,{cache:"no-cache"})
    const data:eventType[]=await res.json();

  return (
    <>
    {data.map(item=><EventCard key={item.id} item={item}/>)}

    </>
  )
}

export default Event