import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { loginAPI, registerAPI } from "../../utils";

export interface UserState {
    loading: boolean,
    error: string | null;
    token: string | null;
}

const initialState: UserState = {
    loading: false,
    error: null,
    token: null,
}

export const register = createAsyncThunk(
    'user/register',
    async (parameters: { userId: string, password: string, firstName: string, lastName: string}, thunkAPI) => {
        try {
            const { data } = await registerAPI({ 
                email: parameters.userId, 
                password: parameters.password, 
                first_name: parameters.firstName, 
                last_name: parameters.lastName })
        } catch (error) {
            console.log(error);
            alert('Fail to register. Please try again')
        }
    })

export const login = createAsyncThunk(
    'user/login',
    async (parameters: { userId: string, password: string}, thunkAPI) => {
        try {
            console.log(parameters.userId, parameters.password);
            const { data } = await loginAPI({ 
                email: parameters.userId, 
                password: parameters.password })
            return data.token;
           
        } catch (error) {
            console.log(error)
            alert('Fail to sign in. Please try again')
        }
    })
    
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logOut: (state) => {
            state.token = null;
            state.error = null;
            state.loading = false;
        }
    },
    extraReducers: {
        [login.pending.type]: (state) => {
            state.loading = true;
        },
        [login.fulfilled.type]: (state, action) => {
            state.token = action.payload
            state.loading = false;
            state.error = null;
        },
        [login.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        [register.pending.type]: (state) => {
            state.loading = true;
        },
        [register.fulfilled.type]: (state) => {
            state.loading = false;
            state.error = null;
        },
        [register.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
    }
})

export const { logOut } = userSlice.actions