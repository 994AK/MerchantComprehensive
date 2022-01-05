import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://127.0.0.1:7001',
    timeout: 10000,
})

export const get = (url, params = {},token=localStorage.isLogin) => {
    return new Promise((resolve, reject) => {
        instance.get(url, {
            headers: {
                'Authorization': "Bearer"+ token
            },
            params,
        }).then(response => {
            resolve(response.data)
        }, err => {
            if (err.response.status === 401) {
                localStorage.clear()
            }
            reject(err)
        })
    })
}

export const post = (url, data = {},token=localStorage.isLogin) => {
    return new Promise((resolve, reject) => {
        instance.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization':"Bearer"+ token
            },
        }).then(response => {
            resolve(response.data)
        }, err => {
            reject(err)
        })
    })
}

export const postBlob = (url, data = {},token=localStorage.isLogin) => {
    return new Promise((resolve, reject) => {
        instance.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization':"Bearer"+ token
            },
            responseType: 'blob',
        }).then(response => {
            resolve(response.data)
        }, err => {
            reject(err)
        })
    })
}

