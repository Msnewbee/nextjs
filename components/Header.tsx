export default function Header({ title = "Selamat Datang di iClik bos!" }: { title?: string }) {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
}
