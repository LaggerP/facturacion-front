const queryParams = new URLSearchParams(window.location.search);
const token = queryParams.get('token');
const client = queryParams.get('from');

const apiUrl = 'https://notflix-fya-backend.herokuapp.com/api';


module.exports = {apiUrl: apiUrl, token: token, client:client};
