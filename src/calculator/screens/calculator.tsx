import React, { FunctionComponent, memo } from "react";
import { CalculatorForm } from "calculator/components";
import { Grid } from "@mui/material";

const CalculatorBase: FunctionComponent = () => {
  // TODO: Call api constraints and send the response data to props calculatorConfiguration

  return (
    <Grid container justifyContent="center" mt={4}>
      <Grid item xs={10} md={6} lg={4}>
        <CalculatorForm calculatorConfiguration={undefined} />
      </Grid>
    </Grid>
  );
};

export const Calculator = memo(CalculatorBase);
