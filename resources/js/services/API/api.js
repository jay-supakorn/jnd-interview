import axios from "axios";

const api = {
    register: (payload) => {
        return axios({
            url: `/api/register`,
            method: "POST",
            crossdomain: true,
            data: payload,
        }).catch((error) => {
            throw error.response;
        });
    },
    login: ({ username, password }) => {
        return axios({
            url: `/api/login`,
            method: "POST",
            crossdomain: true,
            data: {
                username: username,
                password: password,
            },
        }).catch((error) => {
            if (error.response.status === 401) {
                localStorage.removeItem("accessToken");
                window.location = "/login";
            }
        });
    },
    shorten: ({ shortenName }) => {
        return axios({
            url: `/api/shorten-action`,
            method: "POST",
            crossdomain: true,
            data: {
                shortenName: shortenName,
            },
        }).catch((error) => {
            if (error.response.status === 401) {
                localStorage.removeItem("accessToken");
                window.location = "/login";
            } else {
                throw error.response;
            }
        });
    },
    getLists: () => {
        return axios({
            url: `/api/lists`,
            method: "POST",
            crossdomain: true,
            data: {},
        }).catch((error) => {
            if (error.response.status === 401) {
                localStorage.removeItem("accessToken");
                window.location = "/login";
            } else {
                throw error.response;
            }
        });
    },
};

export default api;
