import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme/theme.js";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Features/Counter/CounterSlice.js'
import { API } from "./Features/API/API";


const store = configureStore({
  reducer: {
    counter: counterSlice,
    [API.reducerPath]: API.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(API.middleware),
}
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Provider store={store}>
          <App />
        </Provider>
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);

