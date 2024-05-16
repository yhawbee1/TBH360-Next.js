import { Questrial } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
})

export const metadata = {
  title: "TBH360",
  description: "Video Streaming site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={questrial.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
