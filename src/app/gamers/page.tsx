"use client";
import Image from "next/image";
import { jogadores } from "@/data/jogadores";

export default function JogadoresPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {jogadores.map((jogador) => (
          <div
            key={jogador.nome}
            className="relative rounded-xl p-4 shadow-md text-center flex flex-col justify-between min-h-[250px] overflow-hidden bg-zinc-800"
            style={{
              backgroundImage: "url('/cs_bground.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-10">
              <Image
                src={jogador.imagem}
                alt={jogador.nome}
                width={150}
                height={150}
                className="mx-auto rounded-lg object-cover"
                style={{ aspectRatio: "1/1" }}
              />
              <h2 className="mt-4 text-xl font-semibold">{jogador.nome}</h2>
              <p className="text-sm font-normal text-zinc-300">{jogador.nomeCompleto}</p>
              <p className="text-zinc-400 mt-2">{jogador.funcao}</p>
            </div>

            {/* Overlay para escurecer o fundo */}
            <div className="absolute inset-0 bg-black opacity-40 z-0 rounded-xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

