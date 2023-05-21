import http from "./http";

async function getBaseData(url: string, params){
    try {
        const response = await http.get(url);
        return response;
    } catch (err) {
        console.error(err);
    }
}

async function postBaseData(url: string, params){
    try {
        const response = await http.post(url, params);
        return response;
    } catch (err) {
        console.error(err);
    }
}



// user ----------
export async function getUserList(url: string, params) {
    const res = await postBaseData(url, params);
    return res;
}

export async function modifyUser(url: string, params) {
    const res = await postBaseData(url, params);
    return res;
}

export async function deleteUser(url: string, params) {
    const res = await postBaseData(url, params);
    return res;
}




export async function postData(url: string, params) {
    console.log("post data--------------------");
    const res = await postBaseData(
        url,
        params,
    );
    return res;
}



export async function signUp(url, params) {
    console.log("signUp data--------------------");
    const res = await postBaseData(
        url,
        params,
    );
    return res;
}

export async function login(url, params) {
    console.log("login data--------------------");
    const res = await postBaseData(
        url,
        params,
    );
    return res;
}

export async function logout(url) {
    console.log("login data--------------------");
    const res = await http.get(url);
    return res;
}



// post request
export async function createPost(url, params) {
    console.log("create post data--------------------");
    const res = await postBaseData(
        url,
        params,
    );
    return res;
}

export async function updatePost(url, params) {
    console.log("create post data--------------------");
    const res = await postBaseData(
        url,
        params,
    );
    return res;
}
export async function getPostLists(url, params) {
    const res = await postBaseData(url, params);
    console.log("get post list data--------------------", res);

    return res;
}


export async function getPostContent(url, params) {
    console.log("get post content data--------------------");
    const res = await postBaseData(
        url,
        params,
    );
    return res;
}
