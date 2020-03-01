import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { NavBar, NavLogo, NavBarMenu } from 'components';
import { useParams, useHistory, Switch, Route } from 'react-router-dom';
import links from 'constants/links';
import { JobContext } from 'contexts';
import Pages from 'pages';
import { getJob } from 'services';

const getNextURL = status => {
  switch (status) {
    case 'draft':
      return links.jobHelperDraft;
    case 'cancelled':
      return links.jobHelperCancelled;
    case 'open':
      return links.jobHelperOpen;
    case 'reserved':
      return links.jobHelperReserved;
    case 'in_progress':
      return links.jobHelperInProgress;
    case 'reviewing':
      return links.jobHelperReviewing;
    case 'complete':
      return links.jobHelperComplete;
    default:
      return links.jobHelperUnauthorized; // Unauthorized
  }
};

const JobHelper = () => {
  const history = useHistory();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [job, setJob] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getJob(id);
        setJob(data);

        const nextURL = getNextURL(data.status).replace(':id', id);
        history.push(nextURL);
      } catch {
        const nextURL = links.jobHelperUnauthorized.replace(':id', id);
        history.push(nextURL);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [id, history]);

  if (isLoading) return <CircularProgress />;

  return (
    <JobContext.Provider value={job}>
      <NavBar padRight>
        <NavBarMenu />
        <NavLogo />
      </NavBar>
      <Switch>
        <Route path={links.jobHelperCancelled} component={Pages.JobHelperCancelled} />
        <Route path={links.jobHelperComplete} component={Pages.JobHelperComplete} />
        <Route path={links.jobHelperInProgress} component={Pages.JobHelperInProgress} />
        <Route path={links.jobHelperOpen} component={Pages.JobHelperOpen} />
        <Route path={links.jobHelperReserved} component={Pages.JobHelperReserved} />
        <Route path={links.jobHelperReviewing} component={Pages.JobHelperReviewing} />
        <Route path={links.jobHelperUnauthorized} component={Pages.JobHelperUnauthorized} />
      </Switch>
    </JobContext.Provider>
  );
};

export default JobHelper;
