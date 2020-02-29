import { JOBS_ID, JOB_REVIEWS } from 'constants/apis';
import axios from 'utils/axios';

// Visit Interactions
const acceptJob = (id, helperId) => {
  const status = 'reserved';
  const payload = { status, helperId };
  return axios.patch(JOBS_ID(id), payload);
};

const startJob = id => {
  const payload = { status: 'in_progress' };
  return axios.patch(JOBS_ID(id), payload);
};

const finishTasks = id => {
  const payload = { status: 'reviewing' };
  return axios.patch(JOBS_ID(id), payload);
};

const reviewJob = (id, options) => {
  const payload = {
    ...options,
    jobId: Number(id),
  };
  return axios.post(JOB_REVIEWS, payload);
};

const finishJob = id => {
  const payload = { status: 'complete' };
  return axios.patch(JOBS_ID(id), payload);
};

// Jobs

const getJob = id => {
  return axios.get(JOBS_ID(id));
};

export { acceptJob, startJob, finishTasks, reviewJob, finishJob, getJob };
