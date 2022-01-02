import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@src/store/store";

const AppWrapper = (App: React.FC) => {
  return () => (
    <BrowserRouter>
      <ReduxProvider store={store}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </ReduxProvider>
    </BrowserRouter>
  );
};

export default AppWrapper;
