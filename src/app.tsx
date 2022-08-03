import React, { FunctionComponent } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Calculator } from "calculator/screens";

import { AppLayout } from "layout";

const queryClient = new QueryClient();

const App: FunctionComponent = () => (
  <QueryClientProvider client={queryClient}>
    <AppLayout>
      <BrowserRouter>
        <Routes>
          <Route key="calculator" path="/calculator" element={<Calculator />} />
          <Route key="default" path="*" element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </AppLayout>
  </QueryClientProvider>
);

export default App;
