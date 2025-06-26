import type { Metadata } from "next";
import "./globals.css";
import "antd/dist/reset.css";
import { Inter, Roboto } from "next/font/google";
import LayoutWrapper from "./components/layout/LayoutWrapper";
import { Toaster } from "react-hot-toast";

const intern = Inter( {
  subsets: [ 'latin' ],
  weight: [ "400", "500" ]
} )

const roboto = Roboto( {
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
        className={ `${ intern.className } ${ roboto.className }` }
      >
        <LayoutWrapper>
          { children }
        </LayoutWrapper>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
