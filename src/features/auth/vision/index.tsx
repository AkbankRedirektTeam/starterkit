import * as React from "react"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"
import { setHeaderTitle } from "states"
import Typography from "@mui/material/Typography"

const Vision = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  React.useEffect(() => {
    dispatch(setHeaderTitle(t("Vision")))
  }, [dispatch, t])
  return (
    <Box sx={{ display: "flex", flex: 1 }}>
      <Box component="main">
        <Typography component="h1" variant="h3">
          {t("Vision")}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666"
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam assumenda at
          consequatur doloremque dolorum ea error id ipsa ipsam minus neque non quis, quod rerum ut
          veniam voluptate voluptatum.
        </Typography>
      </Box>
    </Box>
  )
}

export default Vision
