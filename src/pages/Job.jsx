import React, { useContext } from 'react';
import { AppContext } from 'contexts';
import { useParams, Redirect } from 'react-router-dom';
import links from 'constants/links';

const Job = () => {
  const { requesterId } = useContext(AppContext);
  const { id } = useParams();
  const link = requesterId ? links.jobRequester : links.jobHelper;

  return <Redirect to={link.replace(':id', id)} />;
};

export default Job;
