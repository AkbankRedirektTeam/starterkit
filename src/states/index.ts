import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time))

// Async Thunks

export const login = createAsyncThunk(
  "loginAction",
  async ({ email }: any, { rejectWithValue }) => {
    const res = await axios.post("https://fakestoreapi.com/auth/login", {
      username: "mor_2314",
      password: "83r5^_"
    })
    if (!res?.data?.token) {
      rejectWithValue("Token not found")
    }

    return { email, token: res.data.token }
  }
)

export const logout = createAsyncThunk("logoutAction", async () => {
  await sleep(1000)
  return null
})

const initialState: {
  loading: boolean
  token: string | null
  headerTitle: string
  email: string
} = {
  loading: false,
  token: null,
  headerTitle: "",
  email: ""
}

// Slice

const appState = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setHeaderTitle: (state, action) => {
      state.headerTitle = action.payload
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.email = action.payload.email
        state.token = action.payload.token
        state.loading = false
      })
      .addCase(login.rejected, (state) => {
        state.loading = false
        //do whatever you want
      })
      .addCase(logout.pending, (state) => {
        state.loading = true
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false
        state.headerTitle = ""
        state.token = null
      })
})

export default appState.reducer

// Actions

export const { setHeaderTitle } = appState.actions
