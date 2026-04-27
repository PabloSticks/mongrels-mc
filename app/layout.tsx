import './globals.css'
export const metadata = { title: "Mongrels MC" }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body>{children}</body></html>
}