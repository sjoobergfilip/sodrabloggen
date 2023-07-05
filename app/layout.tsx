import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import seoImage from "../public/images/blog/j-södra.jpg";

export const metadata = {
    title: "Södrabloggen",
    description: "En plats för alla Södraiter",
    openGraph: {
        title: "Södrabloggen",
        siteName: "Södrabloggen",
        locale: "sv_SE",
        type: "website",
    },
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
