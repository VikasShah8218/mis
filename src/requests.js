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

export {
  getFromServer,
 domain,
};
