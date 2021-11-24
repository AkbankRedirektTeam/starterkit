import * as React from "react"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"
import { setHeaderTitle } from "states"
import Typography from "@mui/material/Typography"

const Dashboard = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  React.useEffect(() => {
    dispatch(setHeaderTitle(t("Dashboard")))
  }, [dispatch, t])
  return (
    <Box sx={{ display: "flex", flex: 1 }}>
      <Box component="main">
        <Typography component="h1" variant="h3">
          {t("Dashboard")}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666"
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, obcaecati, voluptates?
          Animi culpa delectus enim ex fuga maiores nobis pariatur perferendis quasi, quia
          reiciendis repudiandae ullam vitae. A, vero, voluptatibus.
        </Typography>
      </Box>
    </Box>
  )
}

export default Dashboard
