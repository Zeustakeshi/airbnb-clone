import Navbar from "@/components/nav/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

export const metadata = {
    title: "Nhà nghỉ dưỡng & Căn hộ cao cấp cho thuê - Airbnb",
    description: "Nhà nghỉ dưỡng & Căn hộ cao cấp cho thuê - Airbnb",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Navbar></Navbar>
                <div className="container">{children}</div>
            </body>
        </html>
    );
}
