import React, { useEffect, useState } from 'react'
import MainPageLayout from '../component/MainPageLayout'
import ShowGrid from '../component/show/ShowGrid';
import { apiGet } from '../mics/config';
import { useShows } from '../mics/custom-hook'

const Starred = () => {
  const [starred]=useShows();
  const [shows,setShows]=useState(null);
  const [isLoading,setIsLoading]=useState(true);
  const [error,SetError]=useState("");
  useEffect(()=>{
    if (starred&&starred.length>0) {
        const promise=starred.map(showId=>apiGet(`/shows/${showId}`));
        Promise.all(promise).then(apiData=>apiData.map(show=>({show})))
        .then(result=>{
          setShows(result)
          setIsLoading(false)
        }).catch(err=>{
          SetError(err.message)
          setIsLoading(false)
        });
    }else{
      setIsLoading(false)
    }
  },[starred]);
  return (
    <div>
        <MainPageLayout>
          {isLoading&&<div>shows are loading</div>}
          {error && <div>Error occured:{error}</div>}
          {!isLoading&&!shows&&<div>No show were added</div>}
          {!isLoading&&!error&&shows&&<ShowGrid data={shows}></ShowGrid>}
          </MainPageLayout>
    </div>
  )
}

export default Starred