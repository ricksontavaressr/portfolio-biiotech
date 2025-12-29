import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { HiMail, HiPhone, HiLocationMarker, HiCheckCircle } from 'react-icons/hi';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/contact`,
        formData
      );
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    } catch (err) {
      setError('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-primary to-primary/90 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6 lg:px-8"
        >
          <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-6">
            Quando faz sentido conversar
          </h1>
          <p className="text-2xl text-white/90 max-w-4xl">
            Esta conversa é indicada para líderes que percebem que a complexidade aumentou,
            que o risco ficou mais difícil de enxergar ou que decisões importantes
            passaram a carregar consequências maiores.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                    Sobre a conversa
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      A conversa de diagnóstico não é uma apresentação de BI,
                      não envolve venda imediata e não tem caráter comercial.
                    </p>
                    <p>
                      É um espaço estruturado para compreender o contexto,
                      mapear decisões críticas, identificar pontos de incerteza
                      e avaliar, com clareza, se faz sentido avançar para um trabalho mais aprofundado.
                    </p>
                    <p>
                      Caso não haja aderência, a conversa termina ali, sem qualquer compromisso.
                    </p>
                  </div>
                </div>

                <div className="bg-bg-soft p-8 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-serif font-bold text-primary mb-4">
                    Para quem faz sentido
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <HiCheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <span>CEOs, diretores ou líderes responsáveis por decisões críticas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <HiCheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <span>Organizações em crescimento, reestruturação ou pressão por resultado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <HiCheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <span>Ambientes onde errar ficou caro e decidir exige mais clareza</span>
                    </li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-bold text-primary mb-4">
                    Outras formas de contato
                  </h3>
                  
                  <a
                    href="mailto:contato@biiotech.com.br"
                    className="flex items-center gap-3 text-gray-600 hover:text-accent transition-colors"
                  >
                    <HiMail className="w-5 h-5" />
                    contato@biiotech.com.br
                  </a>
                  
                  <a
                    href="tel:+5581997333025"
                    className="flex items-center gap-3 text-gray-600 hover:text-accent transition-colors"
                  >
                    <HiPhone className="w-5 h-5" />
                    (81) 99733-3025
                  </a>

                  <a
                    href="https://wa.me/5581997333025?text=Olá,%20quero%20agendar%20uma%20conversa%20de%20diagnóstico%20estratégico."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 mt-4"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {!submitted ? (
                <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
                  <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                    Agendar conversa
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email profissional *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors"
                        placeholder="(00) 00000-0000"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Empresa/Organização
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors"
                        placeholder="Nome da empresa"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                        placeholder="Conte um pouco sobre o contexto e as decisões que precisam ser estruturadas..."
                      />
                    </div>

                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-primary hover:bg-accent text-white py-4 rounded-lg font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
                    >
                      {loading ? 'Enviando...' : 'Enviar mensagem'}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      Responderemos em até 24 horas.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="bg-green-50 border border-green-200 p-12 rounded-lg text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <HiCheckCircle className="w-12 h-12 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-green-800 mb-4">
                    Mensagem enviada com sucesso!
                  </h3>
                  <p className="text-green-700 mb-6">
                    Recebemos sua mensagem e entraremos em contato em breve para agendar a conversa de diagnóstico.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-accent hover:text-primary font-semibold"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;