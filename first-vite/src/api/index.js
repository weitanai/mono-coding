import axios from 'axios';


const http = axios.create({
    baseURL: '/api',
    headers: {
        'content-Type': 'application/json',
    },
    withCredentials: true,
});


export async function getData(url) {
    console.log('get data--------------------');
    const res = await http.get(url);
    return res;
}

export async function postData(url, params) {
    console.log('post data--------------------');
    const res = await http.post(
        url,
        params,
    )
    return res;
}
