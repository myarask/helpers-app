const host = 'https://helpers-test-api.herokuapp.com';
// const host = 'http://localhost:5000';
const CLIENTS = `${host}/clients`;
const HELPERS_ME = `${host}/helpers/me`;
const SESSIONS = `${host}/sessions`;
const JOBS = `${host}/jobs`;
const JOBS_ID = id => `${host}/jobs/${id}`;
const JOB_SERVICES = `${host}/job_services`;
const JOB_REVIEWS = `${host}/job_reviews`;
const REQUESTERS_ID_CLIENTS = id => `${host}/requesters/${id}/clients`;

export { CLIENTS, HELPERS_ME, SESSIONS, JOBS, JOBS_ID, JOB_REVIEWS, JOB_SERVICES, REQUESTERS_ID_CLIENTS };
