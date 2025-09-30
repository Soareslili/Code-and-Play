"use client";

import { useState } from "react";
import { FiSend, FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import Link from "next/link";

const WHATSAPP_NUMBER = "5511999999999"; 
const WHATSAPP_TEXT = "Olá! Vim pelo site e gostaria de saber mais sobre os produtos.";

export default function ContactSection() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_TEXT
  )}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = `Contato - ${form.nome}`;
    const body = `Nome: ${form.nome}\nEmail: ${form.email}\n\n${form.mensagem}`;
    window.location.href = `mailto:contato@sualoja.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contato" className="relative overflow-hidden bg-gray-800">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(100%_60%_at_50%_0%,#FF3385_0%,transparent_60%)]" />
      <div className="container mx-auto px-6 py-20 relative">
        <div className="grid gap-10 lg:grid-cols-2">
       
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Fale com a gente
            </h2>
            <p className="mt-4 text-gray-300">
              Dúvidas sobre tamanhos, prazos e personalizações? Chama que a gente responde rapidinho. ✨
            </p>

            <div className="mt-8 space-y-4 text-gray-200">
              <div className="flex items-center gap-3">
                <FiPhoneCall className="text-pink-400" />
                <a className="hover:underline" href={whatsappUrl} target="_blank">
                  WhatsApp: +55 (11) 99999-9999
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="text-pink-400" />
                <a className="hover:underline" href="mailto:contato@sualoja.com">
                  contato@sualoja.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiMapPin className="text-pink-400" />
                <span>São Paulo, SP · Brasil</span>
              </div>

              <Link
                href={whatsappUrl}
                target="_blank"
                className="inline-flex items-center gap-2 mt-6 rounded-full bg-[#FF3385] px-6 py-3 font-semibold text-white shadow-md transition hover:brightness-110"
              >
                Chamar no WhatsApp
              </Link>
            </div>
          </div>

          {/* Lado direito: formulário */}
          <div className="rounded-2xl border border-white/10 bg-gray-950/60 p-6 backdrop-blur">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm text-gray-300">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  value={form.nome}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-gray-900 px-4 py-3 text-white outline-none focus:border-[#00FFCC]"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-300">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-gray-900 px-4 py-3 text-white outline-none focus:border-[#00FFCC]"
                  placeholder="voce@email.com"
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm text-gray-300">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  required
                  value={form.mensagem}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-gray-900 px-4 py-3 text-white outline-none focus:border-[#00FFCC]"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full border border-[#00FFCC] px-6 py-3 cursor-pointer font-semibold text-white transition hover:bg-white/5"
              >
                Enviar mensagem
                <FiSend className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>

            <p className="mt-4 text-xs text-gray-400">
              Ao enviar, abriremos seu e-mail com os dados preenchidos. Para envio automático do site, posso configurar uma rota de API depois. 😉
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
