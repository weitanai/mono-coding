import axios from 'axios';


const http = axios.create({
    baseURL: '/api',
    headers: {
        'content-Type': 'application/json',
    },
    withCredentials: true,
});

http.interceptors.response.use((response) => {
    const { data } = response;
    if (data.code !== 0) {
        alert(data.message);
    }
    return data.data;
}, (err) => {
    console.error(err);;
    return Promise.reject(err);
})


async function getBaseData(url: string, params: Object) {
    try {
        const response = await http.get(url);
        return response;
    } catch (err) {
        console.error(err);
    }
}

export async function postBaseData(url:string, params: Object) {
    try {
        const response = await http.post(url, params);
        return response;
    } catch (err) {
        console.error(err);
    }
}


// user opearation

export async function getUserList(url: string, params: Object) {
    const res = await postBaseData(url);
    return res;
}
export async function modifyUser(url: string, params : any) {
    const res = await postBaseData(url, params);
    return res;
}
export async function delUserList(url: string, params : any) {
    const res = await postBaseData(url, params);
    return res;
}

export async function postData(url: string, params : any) {
    console.log('post data--------------------');
    const res = await postBaseData(
        url,
        params,
    )
    return res;
}


export async function signUp(url: string, params : any) {
    console.log('signUp data--------------------');
    const res = await postBaseData(
        url,
        params,
    )
    return res;
}

export async function login(url: string, params : any) {
    console.log('login data--------------------');
    const res = await postBaseData(
        url,
        params,
    )
    return res;
}

export async function logout(url: string) {
    console.log('login data--------------------');
    const res = await http.get(url);
    return res;
}



// post request
export async function createPost(url: string, params : any) {
    console.log('create post data--------------------');
    const res = await postBaseData(
        url,
        params,
    )
    return res;
}

export async function updatePost(url: string, params : any) {
    console.log('create post data--------------------');
    const res = await postBaseData(
        url,
        params,
    )
    return res;
}
export async function getPostLists(url: string, params : any) {
    const res = await postBaseData(url, params);
    return res;
}


export async function getPostContent(url: string, params : any) {
    console.log('get post content data--------------------');
    const res = await postBaseData(
        url,
        params,
    )
    return res;
}



export async function getPostUserList(url: string) {
    console.log('get user list data--------------------');
    const res = await getBaseData(
        url,
    )
    return res;
}





export async function getUserPostList(url: string) {
    console.log('get user list data--------------------');
    const res = await getBaseData(
        url
    )
    return res;
}


// get color list 

export async function getColorList(url: string) {
    try {
        const res = await getBaseData(url);
        return res;
    } catch (error) {
        console.error(error);
    }
   
}