import Link from "next/link";
import { FiInstagram, FiYoutube, FiGithub, FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h4 className="text-white font-bold text-lg">Code & Play</h4>
            <p className="mt-3 text-sm text-gray-400">
              Moda para quem respira código, games e anime. Vista seu universo. ✨
            </p>
          </div>

          <div>
            <h5 className="text-white font-semibold">Navegação</h5>
            <ul className="mt-3 space-y-2">
              <li><Link href="#hero" className="hover:text-[#FF3385]">Início</Link></li>
              <li><Link href="/categorias" className="hover:text-[#FF3385]">Produtos</Link></li>
              <li><Link href="#contato" className="hover:text-[#FF3385] ">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold">Suporte</h5>
            <ul className="mt-3 space-y-2">
              <li><Link href="/politica-de-troca" className="hover:text-[#FF3385]">Política de Troca</Link></li>
              <li><Link href="/faq" className="hover:text-[#FF3385]">FAQ</Link></li>
              <li><Link href="mailto:contato@sualoja.com" className="hover:text-[#FF3385]">contato@sualoja.com</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold">Siga a gente</h5>
            <div className="mt-3 flex items-center gap-4">
              <Link href="https://instagram.com/seuperfil" target="_blank" aria-label="Instagram" className="hover:text-[#FF3385]">
                <FiInstagram />
              </Link>
              <Link href="https://youtube.com/@seuperfil" target="_blank" aria-label="YouTube" className="hover:text-[#FF3385]">
                <FiYoutube />
              </Link>
              <Link href="https://github.com/seuuser" target="_blank" aria-label="GitHub" className="hover:text-[#FF3385]">
                <FiGithub />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Code & Play — Todos os direitos reservados.</p>
          <Link
            href="https://bio.site/Lid.Dev"
            target="_blank"
            className="inline-flex items-center gap-1 text-sm font-semibold text-purple-400 hover:opacity-90"
          >
            por Lid.Dev <FiArrowUpRight />
          </Link>
        </div>
      </div>
    </footer>
  );
}
