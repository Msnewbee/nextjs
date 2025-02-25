import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto p-4">
      <header className="py-4 text-center text-xl font-bold">Casino Online</header>
      <main>{children}</main>
      <footer className="py-4 text-center text-sm">&copy; 2025 Casino Online</footer>
    </div>
  );
};

export default Layout;
