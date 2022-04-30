import axios from 'axios';

const instance=axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/profile/',
    // withCredentials:true,
    // headers: {
    //     'API-KEY': 'b965dcf5-4242-4105-9d78-4213229b0a9e'
    // }
})

export const profileAPI={
    getProfile (id){
        return instance.get(`${id}`)
        .then(response=> response.data)
        }
}

