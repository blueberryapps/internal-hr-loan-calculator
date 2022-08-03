import React, { FunctionComponent, memo } from "react";

import { CalculatorConfiguration } from "calculator/types";

import { LoanOffer } from "../loan-offer";
import { LoanParam } from "../loan-param";
import { Box, Grid } from "@mui/material";

interface Props {
  calculatorConfiguration?: CalculatorConfiguration;
}

const CalculatorFormBase: FunctionComponent<Props> = (props) => {
  // TODO: Call second api real-first-loan-offer and send the response data to props loanOffer

  return (
    <Box bgcolor="white" color="text.primary" py={2} px={4} borderRadius={2}>
      <Grid container direction="column">
        <LoanParam label="Total amount" value={0} />
        {/* TODO: Add slider */}
        <LoanParam label="Term" value={0} />
        {/* TODO: Add slider */}
        {true && <LoanOffer loanOffer={undefined} />}
      </Grid>
    </Box>
  );
};

export const CalculatorForm = memo(CalculatorFormBase);
