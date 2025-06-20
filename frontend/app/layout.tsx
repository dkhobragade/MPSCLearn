import type { Metadata } from "next";
import "./globals.css";
import "antd/dist/reset.css";
import { Inter } from "next/font/google";
import LayoutWrapper from "./components/layout/LayoutWrapper";

const intern = Inter( {
  subsets: [ 'latin' ],
  weight: [ "400", "500" ]
} )

export const metadata: Metadata = {
  title: "MPSCLearn",
  description: "A platform for MPSC exam preparation",
};

export default function RootLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> )
{
  return (
    <html lang="en">
      <body
        className={ intern.className }
      >
        <LayoutWrapper>
          { children }
        </LayoutWrapper>
      </body>
    </html>
  );
}
