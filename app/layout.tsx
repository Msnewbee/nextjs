import "./globals.css"; // Perbarui path agar sesuai dengan lokasi file

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="container mx-auto p-4">
        <header className="py-4 text-center text-xl font-bold">Casino Online</header>
        <main>{children}</main>
        <footer className="py-4 text-center text-sm">&copy; 2025 Casino Online</footer>
      </body>
    </html>
  );
}
