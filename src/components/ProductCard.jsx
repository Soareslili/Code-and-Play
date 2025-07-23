import Image from 'next/image';
import { BackgroundGradient } from "./BackgroundGradient";

export function ProductCard({ imagem, nome, descricao, preco }) {
  return (
    <BackgroundGradient className="rounded-[22px] p-6 bg-black/90 text-white flex flex-col items-center">
      <Image
        src={imagem}
        alt={nome}
        width={250}
        height={250}
        className="object-contain rounded-lg"
      />
      <h2 className="text-xl font-bold mt-4">{nome}</h2>
      <p className="text-sm mt-2 text-gray-300">{descricao}</p>
      <button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition">
   Comprar por R${(preco ?? 0).toFixed(2)}


      </button>
    </BackgroundGradient>
  );
}
