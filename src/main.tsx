import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MedusaProvider, CartProvider } from "medusa-react";
import { QueryClient } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
const backend_url = import.meta.env.VITE_MEDUSA_BACKEND_URL;

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <MedusaProvider
        queryClientProviderProps={{ client: queryClient }}
        baseUrl={backend_url}
        publishableApiKey={import.meta.env.VITE_MEDUSA_PUBLISHABLE_KEY}
      >
        <CartProvider>
          <BrowserRouter>
            <App />
            <Toaster />
          </BrowserRouter>
        </CartProvider>
      </MedusaProvider>
  </React.StrictMode>
);
