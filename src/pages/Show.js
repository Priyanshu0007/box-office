import React from 'react'
import {useParams} from "react-router-dom"
import Cast from '../component/show/Cast';
import Detail from '../component/show/Detail';
import Season from '../component/show/Season';
import ShowMainData from '../component/show/ShowMainData';
import { useShow } from '../mics/custom-hook';
import { InfoBlock, ShowPageWrapper } from './Show.style';



const Show = () => {
    const {id}=useParams();
    const {show,isLoading,error}=useShow(id);
    if (isLoading) {
        return <div>Data is being loaded</div>
    }
    if (error) {
        return <div>Error occured: {error} </div>
    }
  return (
    <ShowPageWrapper>
        <ShowMainData image={show.image} name={show.name} rating={show.rating} summary={show.summary} tags={show.genres}></ShowMainData>
        <InfoBlock>
            <h2>Details</h2>
            <Detail status={show.status} network={show.network} premiered={show.premiered}></Detail>
        </InfoBlock>
        <InfoBlock>
            <h2>seasons</h2>
            <Season seasons={show._embedded.seasons}></Season>
        </InfoBlock>
        <InfoBlock>
            <h2>Cast</h2>
            <Cast cast={show._embedded.cast}></Cast>
        </InfoBlock>
    </ShowPageWrapper>
  )
}

export default Show