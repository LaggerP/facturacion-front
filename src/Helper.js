const queryParams = new URLSearchParams(window.location.search);
let token = queryParams.get('token');

const apiUrl = 'https://notflix-fya-backend.herokuapp.com/api';
const subsKey = process.env.REACT_APP_SUBS_KEY;

token = token != undefined ? token: getCookie("externalClientToken");

function getCookie(cname) { //find a specific cookie
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

module.exports = {apiUrl: apiUrl, token: token, subsKey: subsKey};
