import * as React from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import { TextInput } from "../../components/form/textfield"
import Copyright from "../../components/copyright"
import { hideLoading, login } from "../../states"
import { useTranslation } from "react-i18next"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const defaultValues = {
  email: "",
  password: ""
}

const theme = createTheme()
const SignInSide = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { handleSubmit, control } = useForm()
  const navigate = useNavigate()

  const onSubmit = async (data: any) => {
    const res: any = await dispatch(login(data))
    if (res?.token) {
      navigate("/auth")
    }
    dispatch(hideLoading())
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
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
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
              <TextInput
                name="email"
                control={control}
                initialValue={defaultValues.email}
                rules={{ required: t("EmailRequired") }}
                margin="normal"
                required
                fullWidth
                id="email"
                label={t("EmailAddress")}
                autoComplete="email"
                autoFocus
              />
              <TextInput
                name="password"
                control={control}
                initialValue={defaultValues.password}
                rules={{ required: t("PasswordRequired") }}
                margin="normal"
                required
                fullWidth
                id="password"
                label={t("Password")}
                type="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label={t("RememberMe").toString()}
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                {t("Login")}
              </Button>
              <Grid container>
                <Grid item xs={6}>
                  <Link href="#" variant="body2">
                    {t("ForgotPassword")}
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <Link href="#" variant="body2">
                    {t("NoAccountSignUp")}
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
