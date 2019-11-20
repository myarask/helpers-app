// const host = 'https://helpers-test-api.herokuapp.com';
const host = 'http://localhost:5000';
const SESSIONS = `${host}/sessions`;
const REQUESTERS_ID_CLIENTS = id => `${host}/requesters/${id}/clients`;

export { SESSIONS, REQUESTERS_ID_CLIENTS };
