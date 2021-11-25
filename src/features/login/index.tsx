import * as React from "react"
/*import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";*/
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography
} from "@mui/material"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Copyright from "../../components/copyright"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import { useTranslation } from "react-i18next"

const theme = createTheme()

const SignInSide = () => {
  const { t } = useTranslation()

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt?.preventDefault()
    const data = new FormData(evt?.currentTarget)
    console.log(">>>email: ", data.get("email"))
    console.log(">>>password: ", data.get("password"))
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={4}
          md={7}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? theme.palette.grey[50] : theme.palette.grey[900],
            backgroundImage: "url(/backgroundImage.jpeg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {t("SignIn")}
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1, textAlign: "left" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label={t("EmailAddress")}
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                type="password"
                label={t("Password")}
                name="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label={t("RememberMe").toString()}
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                {t("SignIn")}
              </Button>
              <Grid container>
                <Grid item xs={6}>
                  <Link href="#" variant="body2">
                    {t("ForgotPass")}
                  </Link>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: "right" }}>
                  <Link href="#" variant="body2">
                    {t("SignUp")}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default SignInSide
