import * as React from "react"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import { useTranslation } from "react-i18next"

const Copyright = (props: any) => {
  const { t } = useTranslation()
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"© "}
      {t("Copyright")}
      {" " + new Date().getFullYear()}
      {" | "}
      {t("AllRightsReserved")}
      {" | "}
      {t("PoweredBy")}
      <Link color="inherit" href="http://ieeekou.net/">
        {" " + t("KocaeliUniversity")}
      </Link>
    </Typography>
  )
}

export default Copyright
