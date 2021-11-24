import * as React from "react"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"
import { setHeaderTitle } from "states"
import Typography from "@mui/material/Typography"

const Committees = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  React.useEffect(() => {
    dispatch(setHeaderTitle(t("Committees")))
  }, [dispatch, t])
  return (
    <Box sx={{ display: "flex", flex: 1 }}>
      <Box component="main">
        <Typography component="h1" variant="h3">
          {t("Committees")}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666"
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, cumque debitis dolorum
          eos explicabo iusto maxime quidem rem reprehenderit rerum. Assumenda eaque incidunt ipsa
          minima nulla provident quia rem tempora!
        </Typography>
      </Box>
    </Box>
  )
}

export default Committees
