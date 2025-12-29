import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Sobre = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-primary to-primary/90 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-6">
                Sobre a Biiotech
              </h1>
              <p className="text-2xl text-white/90">
                A Biiotech nasce da prática real de tomada de decisão em ambientes onde errar custa caro
                e improvisar deixou de ser uma opção.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent/30 rounded-lg transform -rotate-3" />
                <img
                  src="/imagens/Foto-Prof-pb.jpg"
                  alt="Rickson Tavares — Fundador da Biiotech"
                  className="relative rounded-lg shadow-2xl w-full max-w-md grayscale"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8 text-lg text-gray-600 leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            A Biiotech não foi construída a partir de uma ferramenta, de um método acadêmico ou de uma promessa de mercado.
            Ela nasce da vivência direta em negócios, operações e decisões sob pressão.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Antes de atuar com dados, sistemas e arquitetura analítica, houve envolvimento direto com varejo,
            indústria, distribuição e operações comerciais, participando de decisões que impactavam caixa,
            margem, pessoas e a continuidade do negócio.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Ao longo de mais de uma década entre empreendedorismo, consultoria e atuação corporativa,
            tornou-se claro que o problema raramente está na falta de dados —
            mas na ausência de critérios claros para decidir em cenários cada vez mais complexos.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Nos últimos anos, essa experiência foi complementada por atuação profunda em análise de dados,
            sistemas de informação e engenharia analítica, permitindo estruturar decisões com base em sinais objetivos,
            simulações e leitura de risco — antes que o impacto financeiro aconteça.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-bg-soft p-8 rounded-lg border-l-4 border-accent"
          >
            <p className="text-primary font-semibold text-xl">
              Hoje, a Biiotech atua como <strong>Arquiteta de Decisão Orientada a Dados</strong>,
              apoiando CEOs, diretores e gestores a estruturar decisões críticas
              em cenários complexos, voláteis e de alta incerteza.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold text-primary pt-8"
          >
            Não vendemos ferramentas. Estruturamos decisões.
          </motion.p>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-16 text-center"
          >
            Nossa abordagem
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Profundidade',
                desc: 'Mergulhamos no contexto real do negócio, não oferecemos soluções genéricas.',
              },
              {
                title: 'Clareza',
                desc: 'Estruturamos critérios objetivos para decisões complexas em ambientes voláteis.',
              },
              {
                title: 'Parceria',
                desc: 'Trabalhamos lado a lado com líderes para fortalecer capacidade decisória.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:border-accent transition-all duration-300"
              >
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fechamento */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 leading-relaxed text-center italic"
          >
            A atuação da Biiotech não substitui a experiência do decisor.
            Ela organiza o ambiente para que decisões importantes sejam tomadas com mais clareza,
            menos ruído e maior previsibilidade.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif font-bold mb-6">
              Vamos conversar sobre suas decisões críticas?
            </h3>
            <Link
              to="/contato"
              className="inline-block bg-accent hover:bg-white text-white hover:text-primary px-10 py-5 text-sm font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
            >
              Entrar em contato
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;