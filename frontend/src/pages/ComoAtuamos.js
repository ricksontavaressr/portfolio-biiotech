import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ComoAtuamos = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const etapas = [
    {
      numero: '01',
      titulo: 'Mapeamento da decisão crítica',
      descricao: [
        'Identificamos quais decisões têm maior impacto sobre resultado, risco e sustentabilidade do negócio.',
        'Avaliamos como essas decisões estão sendo tomadas hoje, quais critérios estão explícitos e quais riscos permanecem ocultos.',
      ],
    },
    {
      numero: '02',
      titulo: 'Arquitetura decisória orientada a dados',
      descricao: [
        'Estruturamos critérios objetivos, modelos analíticos e simulações que permitem ao decisor enxergar cenários, impactos e trade-offs antes de agir.',
        'A decisão deixa de ser reativa e passa a ser fundamentada e antecipatória.',
      ],
    },
    {
      numero: '03',
      titulo: 'Acompanhamento e ajuste contínuo',
      descricao: [
        'Apoiamos o uso contínuo da arquitetura decisória, garantindo consistência mesmo quando o ambiente muda.',
        'Decidir bem não é um evento isolado. É um processo que exige acompanhamento e ajuste.',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-primary to-primary/90 text-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6 lg:px-8"
        >
          <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-6">
            Como atuamos
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl">
            A atuação da Biiotech começa antes da decisão, não depois do problema.
          </p>
        </motion.div>
      </section>

      {/* Visão Geral */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8 text-lg text-gray-600 leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Em cenários onde o ambiente mudou, o histórico perdeu confiabilidade e a complexidade aumentou,
            decisões estratégicas passaram a exigir mais do que experiência acumulada.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A Biiotech atua como uma camada estratégica entre os dados disponíveis e a decisão executiva,
            organizando critérios, sinais e cenários para reduzir incerteza antes que ela se transforme em impacto financeiro.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary font-semibold"
          >
            O trabalho não é pontual. É um mergulho estruturado nos dados, no contexto e nas decisões que realmente importam.
          </motion.p>
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
            Etapas da atuação
          </motion.h2>

          <div className="space-y-12">
            {etapas.map((etapa, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 lg:p-12 rounded-lg shadow-lg border border-gray-200 hover:border-accent transition-all duration-300"
              >
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {etapa.numero}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-serif font-bold text-primary mb-6">
                      {etapa.titulo}
                    </h3>
                    <div className="space-y-4">
                      {etapa.descricao.map((desc, i) => (
                        <p key={i} className="text-gray-600 leading-relaxed">
                          {desc}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parceria */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-8">
              Uma relação de parceria estratégica
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Cada atuação da Biiotech é construída a partir do contexto específico do cliente,
              de seus dados, de seu mercado e de suas decisões críticas.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              O compromisso é compreender profundamente como a organização decide hoje
              e estruturar bases sólidas para decisões mais seguras no futuro.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Não se trata de entregar respostas prontas, mas de preparar o decisor
              para argumentar, sustentar e executar decisões com clareza.
            </p>
          </motion.div>
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
              Pronto para estruturar suas decisões críticas?
            </h3>
            <Link
              to="/contato"
              className="inline-block bg-accent hover:bg-white text-white hover:text-primary px-10 py-5 text-sm font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
            >
              Agendar conversa estratégica
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComoAtuamos;