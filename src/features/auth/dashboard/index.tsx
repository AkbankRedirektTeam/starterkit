import * as React from "react"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"
import { setHeaderTitle } from "states"

const Dashboard = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  React.useEffect(() => {
    dispatch(setHeaderTitle(t("Dashboard")))
  }, [dispatch, t])
  return (
    <Box sx={{ display: "flex", flex: 1 }}>
      <main>
        <h2>Welcome Dashboard!</h2>
      </main>
    </Box>
  )
}

export default Dashboard
