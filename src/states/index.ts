import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

// Slice

const appState = createSlice({
  name: "appState",
  initialState: {
    loading: false,
    token: null,
    headerTitle: "",
    email: ""
  },
  reducers: {
    changeLoadingStatus: (state, action) => {
      state.loading = action.payload
    },
    changeHeaderTitle: (state, action) => {
      state.headerTitle = action.payload
    },
    loginSuccess: (state, action) => {
      state.email = action.payload.email
      state.token = action.payload.token
    },
    logoutSuccess: (state) => {
      state.headerTitle = ""
      state.email = ""
      state.token = null
    }
  }
})

export default appState.reducer

// Actions

const { loginSuccess, logoutSuccess, changeLoadingStatus, changeHeaderTitle } = appState.actions

export const login =
  ({ email }: any) =>
  async (dispatch: any) => {
    try {
      dispatch(changeLoadingStatus(true))
      const res: any = await axios.post("https://fakestoreapi.com/auth/login", {
        username: "mor_2314",
        password: "83r5^_"
      })
      if (res?.data?.token) {
        dispatch(loginSuccess({ email, token: res.data.token }))
        return res.data
      }
    } catch (e: any) {
      return console.error(e.message)
    }
  }

export const hideLoading = () => (dispatch: any) => {
  return dispatch(changeLoadingStatus(false))
}

export const setHeaderTitle = (title: string) => (dispatch: any) => {
  return dispatch(changeHeaderTitle(title))
}

export const logout = () => async (dispatch: any) => {
  try {
    // await api.post('/api/auth/logout/')
    return dispatch(logoutSuccess())
  } catch (e: any) {
    return console.error(e.message)
  }
}
