import React from 'react'
import Navs from './Navs'
import Title from './Title'
const MainPageLayout = ({children}) => {
  return (
    <div>
    <Title title="On Air" subtitle="Find any shows and actors"></Title>
    <Navs></Navs>
    {children}
    </div>
  )
}

export default MainPageLayout