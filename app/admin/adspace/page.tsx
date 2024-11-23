import React from 'react'
import dynamic from 'next/dynamic'
const DynamicAdForm = dynamic(
  () => import('./Adspace'),
  { ssr: false }
)
 
const page = () => {
  return (
    <DynamicAdForm/>
  )
}

export default page