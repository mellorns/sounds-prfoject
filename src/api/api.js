import * as axios from "axios";


let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": '4f84fa5d-8107-49e5-ae25-fe4d0f0b2b9f'
    }
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
    },
    followUser(id) {
        return instance.post(`follow/${id}`)
    }
}



export const profileAPI = {

    getProfile  (userId) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    },
    getProfileStatus (userId) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/status/${userId}`)
    },
    setProfileStatus (status) {
        return instance.put(`https://social-network.samuraijs.com/api/1.0/profile/status`, {
            status: status
        })
    }
}





export const authAPI = {
    me ()  {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
    },
    login(data) {
        return instance.post(`/auth/login`, data)
    },
    logout() {
        return instance.delete(`/auth/login`)
    }

}



