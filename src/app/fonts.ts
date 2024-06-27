import { Inter, Playfair_Display } from "next/font/google";


const inter = Inter({
    subsets: ["latin"],
    weight: ["200", "300", "500", "700"],
    variable: "--font-inter"
});
const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "900"],
    variable: "--font-playfair"
});

export {inter, playfair}