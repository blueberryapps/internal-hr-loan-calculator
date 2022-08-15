import React, { FunctionComponent, memo } from "react";
import { Grid, Typography } from "@mui/material";

interface Props {
  label: string;
  value: number;
}

const LoanParamBase: FunctionComponent<Props> = (props) => {
  const { label, value } = props;

  return (
    <Grid container justifyContent="space-between" alignItems="center" py={2}>
      <Grid item>
        <Typography variant="h6">{label}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">{value}</Typography>
      </Grid>
    </Grid>
  );
};

export const LoanParam = memo(LoanParamBase);
