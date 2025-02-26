// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/videos">Videos</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    );
}
