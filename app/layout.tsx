import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title:"Charutha Palihawadana — Computer Science", description:"Portfolio of Charutha Palihawadana — software engineering, cloud, data and mathematical thinking." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
