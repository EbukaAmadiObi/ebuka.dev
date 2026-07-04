"use client";

import { PostHogProvider } from "posthog-js/react";

export function Providers({ children }) {
  return (
    <PostHogProvider
      apiKey={process.env.NEXT_PUBLIC_POSTHOG_KEY}
      options={{
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        defaults: "2025-05-24",
        capture_exceptions: true,
        debug: process.env.NODE_ENV === "development",
      }}
    >
      {children}
    </PostHogProvider>
  );
}
