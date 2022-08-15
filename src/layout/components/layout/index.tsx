import React, { FunctionComponent, memo, PropsWithChildren } from "react";
import { Divider } from "@mui/material";
import { LayoutHeader } from "../header";

const AppLayoutBase: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <>
    <LayoutHeader />
    <Divider />
    {children}
  </>
);

export const AppLayout = memo(AppLayoutBase);
