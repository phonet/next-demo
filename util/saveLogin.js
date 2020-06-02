export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_TOKEN = 'LOGIN_TOKEN';

// 保存登陆之后信息
export const saveLoginStorage = (userInfo) => {
    sessionStorage.setItem(LOGIN_USER, JSON.stringify(userInfo));
};

export const getLoginStorage = () => {
    const userInfo = sessionStorage.getItem(LOGIN_USER);
    return userInfo ? JSON.parse(userInfo) : {};
};


export const saveToken = (token) => {
    sessionStorage.setItem(LOGIN_TOKEN, JSON.stringify(token));
};

export const getToken = () => {
    //access_token
    const userToken = sessionStorage.getItem(LOGIN_TOKEN);
    return userToken ? JSON.parse(userToken) : {};
}


export const clearLoginStorage = () => {
    sessionStorage.removeItem(LOGIN_USER);
    sessionStorage.removeItem(LOGIN_TOKEN);
};
