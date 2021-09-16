import { createSlice } from "@reduxjs/toolkit";
import Service from "../../services";

const slice = createSlice({
    name: "shorten",
    initialState: {
        shortenLink: null,
        lists: [],
    },
    reducers: {
        setLists: (state, action) => {
            state.lists = action.payload.lists;
        },
    },
});

const { setLists } = slice.actions;

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

export const getLists = () => async (dispatch, getState) => {
    let response;
    try {
        response = await Service.api.getLists();
    } catch (error) {
        console.log(error.message);
        throw error;
    }

    const data = response.data;
    dispatch(
        setLists({
            lists: data.lists,
        })
    );
    return data.lists;
};

export default slice.reducer;
