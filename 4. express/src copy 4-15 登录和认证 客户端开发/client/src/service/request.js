//1. 发送请求的时候，如果有token，需要附带到请求头中
//2. 响应的时候，如果有token，保存token到本地(localStorage)
//3. 相应的时候，如果响应的消息码是403(没有token，token失效)，本地删除token

import axios from 'axios';
export default function () {
    let instance = axios;
    const token = localStorage.getItem('token');
    if (token) {
        instance = axios.create({
            headers: {
                authorization: "bearer "+token
            }
        });
    }
    instance.interceptors.response.use(resp => {
        if (resp.headers.authorization) {
            localStorage.setItem('token', resp.headers.authorization)
        }
        return resp;
    }, err => {
        if (err.response.status === 403) {
            localStorage.removeItem('token');
        }
        return Promise.reject(err);
    });
    return instance;
}