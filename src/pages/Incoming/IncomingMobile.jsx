import React from 'react';
import { CircularProgress } from '@material-ui/core';
import IncomingCard from './_IncomingCard';

const Incoming0Mobile = props => <div>{props.isLoading && <CircularProgress />}</div>;

export default Incoming0Mobile;
