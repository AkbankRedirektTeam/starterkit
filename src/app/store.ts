import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"

import appState from "../states"

const reducer = combineReducers({
  appState
})

const store = configureStore({
  reducer
})

export default store
