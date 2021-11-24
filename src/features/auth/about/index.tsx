import * as React from "react"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"
import { setHeaderTitle } from "states"
import Typography from "@mui/material/Typography"

const About = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  React.useEffect(() => {
    dispatch(setHeaderTitle(t("About")))
  }, [dispatch, t])
  return (
    <Box sx={{ display: "flex", flex: 1 }}>
      <Box component="main">
        <Typography component="h1" variant="h3">
          {t("About")}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666"
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corporis ducimus eaque
          eos error exercitationem facere molestiae necessitatibus, numquam perferendis perspiciatis
          provident repellat sed suscipit temporibus ullam unde veritatis vitae!
        </Typography>
      </Box>
    </Box>
  )
}

export default About
