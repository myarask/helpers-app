// const host = 'https://helpers-test-api.herokuapp.com';
const host = 'http://localhost:5000';
const CLIENTS = `${host}/clients`;
const SESSIONS = `${host}/sessions`;
const JOBS = `${host}/jobs`;
const JOBS_ID = id => `${host}/jobs/${id}`;
const JOB_SERVICES = `${host}/job_services`;
const REQUESTERS_ID_CLIENTS = id => `${host}/requesters/${id}/clients`;

export { CLIENTS, SESSIONS, JOBS, JOBS_ID, JOB_SERVICES, REQUESTERS_ID_CLIENTS };
