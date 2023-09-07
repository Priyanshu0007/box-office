
import React, { useState ,useCallback} from 'react'
import ActorGrid from '../component/actor/ActorGrid';
import CustomRadio from '../component/CustomRadioComponent';
import MainPageLayout from '../component/MainPageLayout'
import ShowGrid from '../component/show/ShowGrid';
import { apiGet } from '../mics/config';
import { useLastQuerry } from '../mics/custom-hook';
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.style';
const Home = () => {
    const [input,setInput]=useLastQuerry();
    const [result,setResult]=useState(null);
    const [searchOption,setSeatchOption]=useState("shows");
    const isShowSearch= searchOption==="shows";
  
    const onInputChange=useCallback((ev)=>{
        setInput(ev.target.value);
    },[setInput]);
    const onSearch=()=>{
        //https://api.tvmaze.com/search/shows?q=girls
        apiGet(`/search/${searchOption}?q=${input}`).then(result=>{setResult(result)});
    }
    const onKeyDown=(ev)=>{
        if (ev.keyCode===13) {
            onSearch();
        }
    }
    const onRadioChange=useCallback((ev)=>{
        setSeatchOption(ev.target.value);
    },[]);
    const renderResults=()=>{
        if (result&&result.length===0) {
            return(<div>No result</div>);
        }
        if (result&&result.length>0) {
            return(result[0].show?<ShowGrid data={result} />:<ActorGrid data={result} />);
        }
        return null;
    }
  return (
    <div>
        <MainPageLayout>
            <SearchInput type="text" onChange={onInputChange} placeholder="Search for something" onKeyDown={onKeyDown} value={input}></SearchInput>
            <RadioInputsWrapper>
                <div><CustomRadio label="Shows" id='show-search' type="radio" value="shows" checked={isShowSearch} onChange={onRadioChange}></CustomRadio></div>
                <div><CustomRadio label="Actors" id='actor-search' type="radio" value="people" checked={!isShowSearch} onChange={onRadioChange}></CustomRadio></div>
            </RadioInputsWrapper>
            <SearchButtonWrapper><button type='button' onClick={onSearch}>search</button></SearchButtonWrapper>
            {renderResults()}
        </MainPageLayout>
    </div>
  )
}

export default Home