import axios from "axios";

const http = axios.create({
    baseURL: "/api",
    headers: {
        "content-Type": "application/json",
    },
    withCredentials: true,
});

http.interceptors.response.use((response)=>{
    const data = response.data;
    if (typeof data.data === "object") {
        return data.data;
    } else {
        return data;
    }
}, (err)=>{
    console.error(err);
    return Promise.reject(err);
});

export default http;