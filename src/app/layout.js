import "./globals.css";


export const metadata = {
  title: "Lumina AI | AI Workspace",
  description:
    "Lumina AI helps teams build smarter workflows with intelligent AI assistants.",
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}