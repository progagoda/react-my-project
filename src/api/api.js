import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: { "API-KEY": "***" }
});
export const usersApi =
{
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    authMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;

            })
    },
    getProfile(userId) {
        return profileApi.getProfile(userId);
    },
    unfollow(id) {
        return instance.delete(`/follow/${id}`).then(response => {
            return response.data;
        })
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data;
        })
    }
}
export const profileApi =
{
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data;
            })
    },
    getStatus(userId) {

        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status', { status: status })
    }
}
