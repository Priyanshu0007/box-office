import React from 'react';

import NotFound from "../../image/NotFound.jpg"
import { Star } from '../styled';
import { Headline, MainDataWrapper, TagList } from './ShowMainData.style';

const ShowMainData = ({ name, rating, summary, tags, image }) => {
  return (
    <MainDataWrapper>
      <img src={image ? image.original : NotFound } alt="show-cover" />
      <div className='text-side'>
        <Headline>
          <h1>{name}</h1>
          <div>
            <Star />
            <span>{rating.average || 'N/A'}</span>
          </div>
        </Headline>
        <div className='summary' dangerouslySetInnerHTML={{ __html: summary }} />

        <div>
          Tags:{' '}
          <TagList>
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </TagList>
        </div>
      </div>
    </MainDataWrapper>
  );
};
export default ShowMainData;