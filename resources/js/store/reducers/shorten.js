import { createSlice } from "@reduxjs/toolkit";
import Service from "../../services";

const slice = createSlice({
    name: "shorten",
    initialState: {
        shortenLink: null,
    },
    reducers: {
        setShortenLink: (state, action) => {
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

const { setShortenLink } = slice.actions;

export const actionShortenLink = (value) => async (dispatch) => {
    let response;
    try {
        response = await Service.api.shorten({ shortenName: value });
    } catch (error) {
        if (error.status === 422) {
            console.log(error.data);
            this.setState({ isError: true });
        }
    }
    if (response) {
        console.log(response);
        // dispatch(setShortenLink(data));
        // this.props.saveResponse(response.data);
        // this.setState({ isSuccess: true });
        // this.props.history.push("/");
    }
};

export default slice.reducer;
