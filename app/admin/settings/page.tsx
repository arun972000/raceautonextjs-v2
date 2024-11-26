import dynamic from 'next/dynamic'
import React from 'react'
const Admin_GeneralSettingsPage = dynamic(()=>import('./components/GeneralSettingsPage'))

const page = () => {
  return (
    <Admin_GeneralSettingsPage/>
  )
}

export default page