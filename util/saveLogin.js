import cookies from "next-cookies";

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_TOKEN = 'LOGIN_TOKEN';

// 保存登陆之后信息
export const saveLoginStorage = (userInfo) => {
    if (process.browser) {
        sessionStorage.setItem(LOGIN_USER, JSON.stringify(userInfo));
    }
    document.cookie = `${LOGIN_USER}=${JSON.stringify(userInfo)}; path=/`;
};

export const getLoginStorage = (ctx) => {
    // const userInfo = rocess.browser && sessionStorage.getItem(LOGIN_USER) ? JSON.parse(sessionStorage.getItem(LOGIN_USER)) : cookies(ctx)[LOGIN_USER];
    if (process.browser) {//客户端
        const temp = sessionStorage.getItem(LOGIN_USER);
        return temp ? JSON.parse(temp) : {};
    } else { //服务端
        return cookies(ctx)[LOGIN_USER] || {};
    }
};


export const saveToken = (token) => {
    sessionStorage.setItem(LOGIN_TOKEN, JSON.stringify(token));
    document.cookie = `${LOGIN_TOKEN}=${JSON.stringify(token)}; path=/`;
};

export const getToken = (ctx) => {
    //access_token
    //const userToken = rocess.browser && sessionStorage.getItem(LOGIN_TOKEN) ? JSON.parse(sessionStorage.getItem(LOGIN_TOKEN));
    //return userToken ? JSON.parse(userToken) : {};
    if (process.browser) {//客户端
        const temp = sessionStorage.getItem(LOGIN_TOKEN);
        return temp ? JSON.parse(temp) : {};
    } else { //服务端
        return cookies(ctx)[LOGIN_TOKEN] || {};
    }
}


export const clearLoginStorage = () => {
    sessionStorage.removeItem(LOGIN_USER);
    sessionStorage.removeItem(LOGIN_TOKEN);
};
