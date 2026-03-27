import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://fun-city.eu"),

   verification: {
    google: "JtvhSL7S3zRGdTKH0tMYjY9k5z_rLRMPr4hUXovdWrs",  // just the content value, not the full tag
  },

  alternates: {
    canonical: "/",
  },

  title: {
    default: "Fun City – Spiel, Spaß & Unterhaltung",
    template: "%s | Fun City",
  },

  description:
    "Fun City betreibt drei einzigartige Spiel- und Unterhaltungsshops mit Arcade-Automaten, Greifmaschinen und der Winterpyramide. Erlebe Spaß, Spannung und tolle Gewinne bei fun-city.eu.",

  keywords: [
    "funcity",
    "funcityeu",
    "funcity eu",
    "Fun City",
    "fun-city.eu",
    "fun city eu",
    "fun city",
    "Spielhalle",
    "Arcade",
    "Greifautomat",
    "Unterhaltung",
    "Automatenspiele",
    "Winterpyramide",
    "Spiele und Spaß",
  ],

  openGraph: {
    title: "Fun City – Spiel, Spaß & Unterhaltung",
    description:
      "Drei einzigartige Erlebnisbereiche: Automatenshop, Greifautomaten und Winterpyramide. Jetzt Fun City entdecken!",
    url: "https://fun-city.eu",
    siteName: "Fun City",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/logo.ico" />
      </head>
      <body>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}