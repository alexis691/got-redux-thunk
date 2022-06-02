import axios from "axios";

export default axios.create({
    baseURL: 'https://thronesapi.com/api/v2'
})