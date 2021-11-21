import { createSlice } from "@reduxjs/toolkit"

// Slice

const appState = createSlice({
  name: "appState",
  initialState: {
    user: null
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload
    },
    logoutSuccess: (state) => {
      state.user = null
    }
  }
})

export default appState.reducer

// Actions

const { loginSuccess, logoutSuccess } = appState.actions

export const login =
  ({ email, password }: any) =>
  async (dispatch: any) => {
    try {
      // await api.post('/api/auth/login/', { username, password })
      dispatch(loginSuccess({ email }))
    } catch (e: any) {
      return console.error(e.message)
    }
  }

export const logout = () => async (dispatch: any) => {
  try {
    // await api.post('/api/auth/logout/')
    return dispatch(logoutSuccess())
  } catch (e: any) {
    return console.error(e.message)
  }
}
