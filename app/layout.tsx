// app/layout.tsx
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="p-4 bg-green-500 text-white">Terra Go!</header>
        {children}
        <footer className="p-4 text-center">© 2026 Terra Go</footer>
      </body>
    </html>
  )
}