import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

const root = document.querySelector("#root");
const rootInstance = createRoot(root);


  rootInstance.render(
    <GoogleOAuthProvider clientId="832124440981-lmfh70fjm7g5c0oldrm10049mj3o7qep.apps.googleusercontent.com">
      <App/>
      <Analytics/>
      <SpeedInsights/>
    </GoogleOAuthProvider>
  );


  
  