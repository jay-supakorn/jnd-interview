import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "user",
    initialState: {
        user: null,
        accessToken: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
            if (action.payload.access_token) {
                state.accessToken = action.payload.access_token;
                localStorage.setItem(
                    "accessToken",
                    action.payload.access_token
                );
            } else {
                const accessToken = localStorage.getItem("accessToken");
                state.accessToken = accessToken;
            }
        },
    },
});

const { setUser } = slice.actions;

export const login = (username, password) => async (dispatch) => {
    // let response;
    // try {
    //     response = await Service.webapi.login({
    //         username,
    //         password,
    //     });
    // } catch (error) {
    //     console.log(error.message);
    //     throw error;
    // }
    // const data = response.data;
    // dispatch(setUser(data));
};

export default slice.reducer;
