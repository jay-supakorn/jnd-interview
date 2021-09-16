import { createSlice } from "@reduxjs/toolkit";
import Service from "../../services";

const slice = createSlice({
    name: "shorten",
    initialState: {
        shortenLink: null,
    },
    reducers: {
        // setShortenLink: (state, action) => {
        //     state.user = action.payload.user;
        //     state.accessToken = action.payload.access_token;
        // },
    },
});

const {} = slice.actions;

export const actionShortenLink = (value) => async (dispatch) => {
    let response;
    try {
        response = await Service.api.shorten({ shortenName: value });
    } catch (error) {
        console.log(error.message);
        throw error;
    }

    return response;
};

export default slice.reducer;
