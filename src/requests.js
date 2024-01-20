import axios from "axios";
// const domain = "localhost:8000"
const domain = "shah-market-backend.techkingdom.in"
// import Cookies from "js-cookie";
window.baseURL = `http://${domain}/`


// --------------- get request ---------------
const getFromServer = async (urlPath) => {
  try {
    const res = await axios.get(`${window.baseURL}${urlPath}`);
    return { status: true, data: res.data };
  } 
  catch (error) {
    return { status: false, data: {} };
  }
};

// Check if the document is currently in fullscreen
function isFullscreen() {
  return (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  );
}

// Request fullscreen on the document
function requestFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

export {
  getFromServer,
  domain,
  requestFullscreen,
  isFullscreen,
};
