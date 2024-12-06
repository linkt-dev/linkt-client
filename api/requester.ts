import axios from "axios";

const API_VERSION = 'v1';

const apiRequester = axios.create({
    baseURL:`https://api.linkt.one/api/${API_VERSION}`
});

export default apiRequester;