import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "aa895120-4c83-43f4-817f-3e0dfff7b9e4"
    }
});

const instanceForProfile = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/profile/',
    withCredentials:true,
    headers: {
        'API-KEY': 'b965dcf5-4242-4105-9d78-4213229b0a9e'
    }
})
const instanceForUser = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
    }
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanceForUser.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId){
      return     axios
      .post(
        `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,{},
        {
          withCredentials: true,
          headers: {
           'API-KEY': 'b965dcf5-4242-4105-9d78-4213229b0a9e'}
        }
      )
    },

    unfollow(userId){
        return axios.delete(
              `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
              {
                withCredentials: true,
                headers: {
                  'API-KEY': 'b965dcf5-4242-4105-9d78-4213229b0a9e'}
              }
            )
    }
}


export const profileAPI = {
    getProfile(id) {
        return instanceForProfile.get(`${id}`)
            .then(response => response.data)
    },
  getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        console.log(status, 'from api')
        return instance.put(`profile/status`, { status: status });
    }
  
   


}
