import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
    title: "Södrabloggen",
    description: "En plats för alla Södraiter",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='sv'>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
