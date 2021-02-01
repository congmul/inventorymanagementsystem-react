import axios from "axios";

const API = {
    getData: (endPoint) => {
        return axios.get(endPoint);
    },
    postDate: (endPoint, data) => {
        return axios.post(endPoint, data);
    }
}

export default API;