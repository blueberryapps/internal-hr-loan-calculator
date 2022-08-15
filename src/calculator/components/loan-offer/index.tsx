import React, { FunctionComponent, memo } from "react";

import { FirstLoanOffer } from "calculator/types";

import { LoanParam } from "../loan-param";
import { Divider } from "@mui/material";

interface Props {
  loanOffer?: FirstLoanOffer;
}

const LoanOfferBase: FunctionComponent<Props> = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { loanOffer } = props;

  return (
    <>
      <LoanParam label="Total principal" value={0} />
      <Divider />
      <LoanParam label="Term" value={0} />
      <Divider />
      <LoanParam label="Total cost of credit" value={0} />
      <Divider />
      <LoanParam label="Total repayable amount" value={0} />
      <Divider />
      <LoanParam label="Monthly payment" value={0} />
    </>
  );
};

export const LoanOffer = memo(LoanOfferBase);
