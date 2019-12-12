import React from 'react';
import { ButtonBase, Box } from '@material-ui/core';
import HeartIconFull from 'assets/icons/heart-solid-teal.svg';
import HeartIconOutline from 'assets/icons/heart-outline-teal.svg';

const Heart = props => (
  <ButtonBase onClick={props.onClick}>
    <Box m={1}>
      <img
        src={props.isFull ? HeartIconFull : HeartIconOutline}
        style={{ width: '30px', height: '30px' }}
        alt="heart"
      />
    </Box>
  </ButtonBase>
);

const Rating = props => (
  <Box display="flex" justifyContent="center">
    <Heart isFull={props.starRating > 0} onClick={() => props.setStarRating(1)} />
    <Heart isFull={props.starRating > 1} onClick={() => props.setStarRating(2)} />
    <Heart isFull={props.starRating > 2} onClick={() => props.setStarRating(3)} />
    <Heart isFull={props.starRating > 3} onClick={() => props.setStarRating(4)} />
    <Heart isFull={props.starRating > 4} onClick={() => props.setStarRating(5)} />
  </Box>
);

export default Rating;
