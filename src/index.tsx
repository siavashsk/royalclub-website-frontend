import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Loading } from "components";
import { MaterialTailwindControllerProvider } from "./context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = React.lazy(() => import("./App"));

root.render(
  <Provider store={store}>
    <MaterialTailwindControllerProvider>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </MaterialTailwindControllerProvider>
  </Provider>
);
