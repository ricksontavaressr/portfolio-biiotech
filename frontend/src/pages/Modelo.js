import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Modelo = () => {
  const etapas = [
    {
      numero: '01',
      title: 'Conversa de diagnóstico',
      desc: 'Iniciamos com uma conversa estruturada para compreender o contexto, as decisões em jogo e os pontos de incerteza percebidos pela liderança.',
      note: 'Não se trata de uma apresentação técnica nem de uma proposta comercial. É alinhamento estratégico.',
    },
    {
      numero: '02',
      title: 'Diagnóstico decisório',
      desc: 'Aprofundamos a leitura das decisões críticas, identificando onde os modelos atuais deixaram de refletir o cenário real.',
      note: 'O objetivo é revelar riscos ocultos, dependências invisíveis e impactos que ainda não se materializaram.',
    },
    {
      numero: '03',
      title: 'Arquitetura de decisão',
      desc: 'Estruturamos critérios objetivos, modelos analíticos e simulações que sustentam decisões executivas com maior clareza e previsibilidade.',
      note: 'A decisão deixa de ser reativa e passa a ser deliberada.',
    },
    {
      numero: '04',
      title: 'Acompanhamento estratégico',
      desc: 'Quando faz sentido, acompanhamos o uso contínuo da arquitetura decisória, garantindo consistência mesmo com mudanças de cenário.',
      note: 'Decidir bem é processo contínuo, não evento isolado.',
    },
  ];

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
            Modelo de atuação
          </h1>
          <p className="text-2xl text-white/90 max-w-4xl">
            O trabalho da Biiotech é desenhado para apoiar decisões críticas em contextos onde
            a complexidade aumentou, a previsibilidade diminuiu e errar passou a ter impacto real.
          </p>
        </motion.div>
      </section>

      {/* Posicionamento */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-8">
              Como pensamos a atuação
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Não atuamos como fornecedores de tecnologia, relatórios ou análises pontuais.
              Atuamos como parceiros estratégicos na estruturação de decisões que carregam
              impacto financeiro, operacional e reputacional.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Cada projeto é construído sob medida, respeitando o contexto do negócio,
              o mercado em que ele opera e a experiência de quem decide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Etapas */}
      <section className="py-24 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-16 text-center"
          >
            Estrutura da atuação
          </motion.h2>

          <div className="space-y-8">
            {etapas.map((etapa, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg border border-gray-200 hover:border-accent overflow-hidden transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 bg-primary text-white p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold mb-2 text-accent">
                        {etapa.numero}
                      </div>
                      <div className="text-sm uppercase tracking-wider opacity-80">
                        Etapa
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/4 p-8">
                    <h3 className="text-2xl lg:text-3xl font-serif font-bold text-primary mb-4">
                      {etapa.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {etapa.desc}
                    </p>
                    <p className="text-accent italic text-sm">
                      {etapa.note}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investimento */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-8">
              Como tratamos investimento
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              O investimento é definido de acordo com a complexidade das decisões envolvidas,
              o impacto potencial e o nível de acompanhamento necessário.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Não trabalhamos por hora, por volume de dados ou por entregas padronizados.
              O foco está no impacto decisório e na responsabilidade associada a ele.
            </p>

            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded">
              <p className="text-primary font-semibold">
                Cada projeto é único e estruturado para gerar clareza decisional, não apenas entregas técnicas.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Pronto para começar?
            </h3>
            <p className="text-xl text-white/90 mb-8">
              A primeira conversa é sempre sem compromisso.
            </p>
            <Link
              to="/contato"
              className="inline-block bg-accent hover:bg-white text-white hover:text-primary px-10 py-5 text-sm font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
            >
              Agendar conversa de diagnóstico
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Modelo;