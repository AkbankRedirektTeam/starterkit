import * as React from "react"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"
import { setHeaderTitle } from "../../../states"

const About = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  React.useEffect(() => {
    dispatch(setHeaderTitle(t("About")))
  }, [])
  return (
    <Box sx={{ display: "flex", flex: 1 }}>
      <main>
        <h2>Welcome About!</h2>
      </main>
    </Box>
  )
}

export default About
