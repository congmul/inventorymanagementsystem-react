import axios from "axios";

const API = {
    getData: (endPoint) => {
        return axios.get(endPoint);
    }
}

export default API;