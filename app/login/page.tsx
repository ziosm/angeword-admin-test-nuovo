import Link from 'next/link';

export default function LoginPage() {
  return (
    <div>
      <h1>Pagina di Login Minimale</h1>
      <p>Questa è la pagina di login del sito di test.</p>
      <Link href="/">Torna alla Homepage</Link>
    </div>
  );
}
