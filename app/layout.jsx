import ThemeRegistry from "@/components/ThemeRegistry";
import "./globals.css";

export const metadata = {
  title: "Divyanshu Parmar | Frontend Developer",
  description: "Frontend-focused React and Next.js developer building scalable web applications, CRM dashboards, and CMS platforms."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
