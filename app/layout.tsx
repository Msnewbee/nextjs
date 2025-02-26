// layout.tsx
import "../globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="id">
            <head>
                <title>iClik Bos - Platform Video Menarik</title>
                <meta name="description" content="Nikmati video menarik di iClik Bos!" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
