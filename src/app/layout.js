import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "NextWavAI - Your Hub for AI Tools, Software Reviews, Ethics, and Future Insights",
  description: "Discover AI tools, software reviews, ethics, and future trends at NextWavAI. Stay updated with expert insights and guides.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}