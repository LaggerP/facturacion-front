const queryParams = new URLSearchParams(window.location.search);
const token = queryParams.get('token');
const client = queryParams.get('from');

const apiUrl = 'https://notflix-fya-backend.herokuapp.com/api';
const subsKey = process.env.REACT_APP_SUBS_KEY;


module.exports = {apiUrl: apiUrl, token: token, client:client, subsKey: subsKey};
