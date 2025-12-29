import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    '/imagens/TECH15.png',
    '/imagens/TECH1.jpeg',
    '/imagens/TECH2.jpeg',
    '/imagens/TECH3.jpeg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Images */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: currentImageIndex === index ? 1 : 0,
              }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image})`,
                  transform: 'scale(1.1)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div variants={fadeInUp} className="inline-block mb-6">
                <span className="px-4 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent text-sm font-semibold uppercase tracking-wider rounded-full">
                  Arquitetura de Decisão
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6"
              >
                Decisões críticas não podem depender apenas de{' '}
                <span className="italic text-accent">intuição.</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed"
              >
                A Biiotech atua como <strong className="text-accent">arquiteta de decisões orientadas a dados</strong>,
                apoiando CEOs e diretores a estruturar critérios, reduzir incerteza e decidir com mais clareza em ambientes complexos.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-sm uppercase tracking-widest text-accent mb-8"
              >
                Não vendo ferramentas. Estruturo decisões.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link
                  to="/contato"
                  className="group inline-flex items-center gap-2 bg-accent hover:bg-white text-white hover:text-primary px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
                >
                  Entrar em contato
                  <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/como-atuamos"
                  className="inline-flex items-center gap-2 border-2 border-white hover:bg-white text-white hover:text-primary px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300"
                >
                  Como atuamos
                </Link>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-lg transform rotate-3" />
                <img
                  src="/imagens/Foto-Prof-pb.jpg"
                  alt="Rickson Tavares — Arquiteto de Decisão"
                  className="relative rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              Experiência aplicada em decisões reais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A atuação da Biiotech se construiu em contextos onde errar custa caro:
              gestão pública, risco financeiro, crescimento empresarial e operações em escala.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                kicker: 'Gestão Pública',
                title: 'EMPREL · Recife',
                description: 'Priorização de demandas críticas com base em prazo, risco e resolutividade, reduzindo ruído e antecipando gargalos decisórios.',
              },
              {
                kicker: 'Financeiro & Risco',
                title: 'COPERGAS',
                description: 'Estruturação de alertas e critérios decisórios para reduzir risco operacional e permitir decisões financeiras proativas.',
              },
              {
                kicker: 'Crescimento',
                title: 'Varejo Multicanal',
                description: 'Decisões de expansão orientadas por KPIs integrados, viabilizando crescimento sustentável e ganho de mercado.',
              },
              {
                kicker: 'Expansão Empresarial',
                title: 'Casa Jóias',
                description: 'Crescimento de 1 para 8 PDVs com controle de caixa, margem e estrutura organizacional.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white p-8 border border-gray-200 hover:border-accent hover:shadow-xl transition-all duration-300 group"
              >
                <span className="text-xs uppercase tracking-wider text-accent font-semibold">
                  {item.kicker}
                </span>
                <h3 className="text-xl font-serif font-bold text-primary mt-3 mb-4 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white p-12 lg:p-20 rounded-lg text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Próximo passo
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Se decidir ficou mais difícil e errar ficou mais caro, uma conversa estruturada faz sentido.
            </p>
            <div className="inline-block bg-accent/20 backdrop-blur-sm border border-accent/30 px-8 py-4 rounded-lg mb-8">
              <p className="text-white">
                Não é uma apresentação de BI. <strong className="text-accent">É uma conversa sobre decisões.</strong>
              </p>
            </div>
            <br />
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 bg-accent hover:bg-white text-white hover:text-primary px-10 py-5 text-sm font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
            >
              Entrar em contato
              <HiArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-relaxed italic"
          >
            A Biiotech não substitui o decisor. Estrutura o ambiente para que boas decisões sejam mais prováveis — mesmo quando o cenário muda.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Home;
