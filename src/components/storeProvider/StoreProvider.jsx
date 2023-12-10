"use client";

import { Provider } from "react-redux";
import { appStore } from "../../redux/store";

export const StoreProvider = ({ children }) => {
  return (
    <Provider
      store={appStore}
      children={children}
    />
  );
};
