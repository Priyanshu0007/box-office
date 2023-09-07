import React from 'react'
import ActorCard from './ActorCard'
import NotFound from "../../image/NotFound.jpg"
import { FlexGrid } from '../styled'

const ActorGrid = ({data}) => {
  return (
    <FlexGrid>
        {
        data.map(({person})=> 
        <ActorCard 
        key={person.id} 
        name={person.name} 
        country={person.country?person.country.name:null}
        birthday={person.birthday}
        deathday={person.deathday}
        gender={person.gender}
        image={person.image?person.image.medium:NotFound}
        />)
        }
    </FlexGrid>
  )
}

export default ActorGrid