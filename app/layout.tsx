import Header from "./Header";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="bg-gray-100">
      <Header />
      <div>{children}</div>
      </body>
    </html>
  )
}
