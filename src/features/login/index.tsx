import * as React from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import { TextInput } from "components/form/textfield"
import Copyright from "components/copyright"
import { login } from "states"
import { useTranslation } from "react-i18next"

const defaultValues = {
  email: "",
  password: ""
}

const SignInSide = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { handleSubmit, control } = useForm()
  const navigate = useNavigate()

  const onSubmit = async (data: any) => {
    await dispatch(login(data))
    navigate("/auth/")
  }

  return (
    <Grid
      container
      component="main"
      sx={{
        height: "100vh",
        bgcolor: "primary.main",
        backgroundImage: "url('/felix-mittermeier-ihbqhutI9x4-unsplash.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <Grid
        item
        xs={false}
        sm={false}
        md={7}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: {
            xs: 3,
            sm: 4,
            md: 10
          }
        }}
      >
        <Box
          component="img"
          src="/logo.png"
          alt="Logo"
          sx={{
            width: {
              xs: "90%",
              md: "80%"
            },
            mb: 4
          }}
        />
        <Typography
          variant="h2"
          color="common.white"
          align="center"
          sx={{
            fontSize: {
              xs: 24,
              sm: 40,
              md: 48,
              lg: 60
            }
          }}
        >
          We Are Reaching
          <br />
          To The Stars!
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {t("SignIn")}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1, textAlign: "left" }}
          >
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
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              variant="standard"
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
              variant="standard"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={t("RememberMe").toString()}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disableElevation
              sx={{
                mt: 3,
                mb: 2,
                borderRadius: 50,
                fontSize: 16,
                height: 48
              }}
            >
              {t("Login")}
            </Button>
            <Grid container>
              <Grid item xs={6}>
                <Link href="#" variant="body2">
                  {t("ForgotPassword")}
                </Link>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: "right" }}>
                <Link href="#" variant="body2">
                  {t("NoAccountSignUp")}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Grid>
    </Grid>
  )
}

export default SignInSide
