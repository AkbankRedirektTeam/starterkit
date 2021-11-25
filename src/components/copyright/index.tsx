import * as React from "react";
import { Link, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface Props {
  sx?: any;
}

const Copyright = (props: Props) => {
  const { t } = useTranslation();
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      sx={{
        pb: 4,
        ...props?.sx,
      }}
    >
      {new Date().getFullYear()}
      {" © "}
      {t("AllRightsReserved")}
      <br />
      {t("PoweredBy")}{" "}
      <Link color="inherit" href="http://ieeekou.net/">
        {t("KocaeliUniversity")}
      </Link>
    </Typography>
  );
};

export default Copyright;
