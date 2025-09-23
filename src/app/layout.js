import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'; 
// Use `v13-appRouter` or `v14-appRouter` if using older Next.js versions

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Navbar />
          <main>{children}</main>
          <Footer/>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
