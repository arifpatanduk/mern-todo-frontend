import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import webFontLoader from "webfontloader";
import reportWebVitals from "./reportWebVitals";

const queryClient = new QueryClient();

webFontLoader.load({
  google: {
    families: ["Raleway:400,700:latin", "Montserrat:700:latin"],
  },
});
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  </React.StrictMode>,

  document.getElementById("root")
);

reportWebVitals();
