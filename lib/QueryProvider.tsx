/** @format */

"use client";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import global_en from "../translations/en/global.json";
import global_fr from "../translations/fr/global.json";

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: "fr",
  resources: {
    en: {
      global: global_en,
    },
    fr: {
      global: global_fr,
    },
  },
});

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
    </QueryClientProvider>
  );
};

export default QueryProvider;
