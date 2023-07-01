import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import { searchAPI } from "../../utils"

export interface Category {
    tag: string,
    label: string
}

export interface Company {
    display_name: string
}

export interface Location {
    area: string[],
}

export interface Job {
     adref: string,
     keywords: string[],
     title: string,
     location: Location,
     salary_min: number,
     id: string,
     latitude: string,
     longitude: string,
     company: Company,
     salary_is_predicted: string,
     redirect_url: string,
     contract_time: string,
     salary_max: number,
     description: string,
     created: string,
     category: Category,
}

export interface JobState {
    loading: boolean,
    jobs: Job[],
    selected: number,
    filterBy: string,
    location: string,
    searchTerm: string,
    sortBy: string,
    error: string | null
}

const initialState: JobState = {
    loading: false,
    jobs: [],
    selected: 0,
    error: null,
    location: "Canada",
    sortBy: "title",
    searchTerm: "",
    filterBy: "all"
}

export const search = createAsyncThunk(
    "job/search",
    async (parameters: {keywords: String}, thunkAPI) => {
        try {
            const {data} = await searchAPI({what: parameters.keywords});
            return data;
        } catch (error) {
            console.log(error)
            alert('Fail to search. Please try again!');
        }
    }
)
export const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        updateSelectedIndex: (state, action) => {
            state.selected = action.payload;
        },
        updateSearchTerm: (state, action) => {
            console.log(action);
            state.searchTerm = action.payload;
        },
        updateSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
        updateFilterBy: (state, action) => {
            state.filterBy = action.payload;
        }
    },
    extraReducers: {
        [search.pending.type]: (state) => {
            state.loading = true;
        },
        [search.fulfilled.type]: (state, action) => {
            if (action.payload) {
                state.jobs = [...action.payload]
            }
            state.loading = false;
            state.error = null;
        },
        [search.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
    }});

export const { updateSelectedIndex, updateFilterBy, updateSearchTerm, updateSortBy }  = jobSlice.actions;
export const jobReducer = jobSlice.reducer;