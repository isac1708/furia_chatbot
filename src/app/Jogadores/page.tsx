"use client";
import Image from "next/image";
import { jogadores } from "@/data/jogadores";

export default function JogadoresPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {jogadores.map((jogador) => (
          <div key={jogador.nome} className="bg-zinc-800 rounded-xl p-4 shadow-md text-center flex flex-col justify-between min-h-[150px]">
            <Image
              src={jogador.imagem}
              alt={jogador.nome}
              width={150}
              height={150}
              className="mx-auto rounded-lg object-cover"
              style={{ aspectRatio: "1/1" }}
            />
            <h2 className="mt-4 text-xl font-semibold">{jogador.nome}</h2>
            <p className="text-sm font-normal text-zinc-400">{jogador.nomeCompleto}</p>
            <p className="text-zinc-400 mt-2">{jogador.funcao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
