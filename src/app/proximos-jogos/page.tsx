export default function ProximosJogos() {
    return (
      <main className="min-h-screen bg-black text-white p-6">
        <h1 className="text-2xl font-bold mb-4">Próximos Jogos</h1>
        <ul className="space-y-4">
          <li className="border p-4 rounded-lg bg-zinc-800">
            <p className="text-lg font-semibold">FURIA vs Team A</p>
            <p>Data: 10/05/2025 - 18:00</p>
          </li>
          <li className="border p-4 rounded-lg bg-zinc-800">
            <p className="text-lg font-semibold">FURIA vs Team B</p>
            <p>Data: 15/05/2025 - 20:30</p>
          </li>
        </ul>
      </main>
    );
  }