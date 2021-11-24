import { createTheme } from "@mui/material/styles"

const fontFamily = "'Source Sans Pro', sans-serif"

const themeDark = createTheme({
  palette: {
    primary: {
      main: "#016ca5"
    }
  },
  typography: {
    fontFamily,
    h1: {
      fontFamily
    },
    h2: {
      fontFamily
    },
    h3: {
      fontFamily
    },
    h4: {
      fontFamily
    },
    h5: {
      fontFamily
    },
    h6: {
      fontFamily
    },
    subtitle1: {
      fontFamily
    },
    subtitle2: {
      fontFamily
    },
    body1: {
      fontFamily
    },
    body2: {
      fontFamily
    },
    button: {
      fontFamily
    },
    caption: {
      fontFamily
    },
    overline: {
      fontFamily
    }
  }
})

export default themeDark
