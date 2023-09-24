import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import CartContextProvider from "./Context/CartContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<HashRouter>
			<CartContextProvider>
				<App />
			</CartContextProvider>
		</HashRouter>
	</React.StrictMode>
);
