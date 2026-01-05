import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/newsletter/subscribe`,
        { email }
      );
      setMessage(response.data.message);
      setEmail('');
    } catch (error) {
      setMessage('Erro ao cadastrar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-primary text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-serif font-bold mb-4"
            >
              Receba insights sobre decisões estratégicas
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/80 mb-8"
            >
              Conteúdos exclusivos sobre arquitetura de decisão e análise de dados
            </motion.p>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor email"
                required
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 bg-accent text-white font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition-all duration-300 disabled:opacity-50"
              >
                {loading ? 'Enviando...' : 'Inscrever'}
              </button>
            </motion.form>
            {message && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-sm text-accent"
              >
                {message}
              </motion.p>
            )}
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <h4 className="text-xl font-serif font-bold mb-4">Biiotech</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Arquitetura de Decisão Orientada a Dados. Apoiamos líderes a estruturar decisões críticas em ambientes complexos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-white/70 hover:text-accent transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="/como-atuamos" className="text-white/70 hover:text-accent transition-colors">
                  Como Atuamos
                </a>
              </li>
              <li>
                <a href="/sobre" className="text-white/70 hover:text-accent transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="/casos" className="text-white/70 hover:text-accent transition-colors">
                  Casos
                </a>
              </li>
              <li>
                <a href="/blog" className="text-white/70 hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contato" className="text-white/70 hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-serif font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>contato@biiotech.com.br</li>
              <li>(81) 99733-3025</li>
              <li className="pt-4">
                <a
                  href="https://wa.me/5581997333025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent text-white px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition-all duration-300"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p>© 2025 Biiotech — Arquitetura de Decisão Orientada a Dados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;