import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-zinc-900 px-6 py-4 flex items-center gap-6 border-b border-zinc-700">
        <Image src="/furia_icon2.svg" alt="FurIA Logo" width={32} height={32} />
      <Link href="/" className="text-white font-semibold text-lg hover:text-zinc-400 transition">
        FurIA
      </Link>
      <Link href="/proximos-jogos" className="text-zinc-300 hover:text-white transition">
        Próximos Jogos
      </Link>
      <Link href="/jogadores" className="text-zinc-300 hover:text-white transition">
        Jogadores
      </Link>
      <Link href="/loja" className="text-zinc-300 hover:text-white transition">
        Loja
      </Link>
    </nav>
  );
}
