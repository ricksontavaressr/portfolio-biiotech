import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Casos = () => {
  const casos = [
    {
      kicker: 'Gestão Pública',
      title: 'EMPREL · Recife — Demandas e Prioridades',
      contexto: 'A alta gestão não possuía visibilidade clara sobre o andamento real das demandas, prazos, gargalos e áreas críticas, operando com informações fragmentadas e atrasadas.',
      decisao: 'Definir onde priorizar recursos, quais serviços exigiam intervenção imediata e como alinhar decisões estratégicas, táticas e operacionais em tempo real.',
      ganho: 'A gestão passou a decidir com base em indicadores objetivos (prazo, resolutividade e risco), reduzindo ruído, antecipando problemas e direcionando ações com maior previsibilidade.',
    },
    {
      kicker: 'Financeiro & Risco Operacional',
      title: 'COPERGAS — Automação de Alertas',
      contexto: 'Baixa visibilidade sobre investimentos bancários, riscos operacionais e conciliações financeiras, com decisões reativas e dependentes de análises manuais.',
      decisao: 'Identificar anomalias financeiras e riscos relevantes a tempo de agir, sem sobrecarregar as equipes com análises operacionais.',
      ganho: 'A empresa passou a decidir de forma proativa, com alertas automáticos orientando a gestão, reduzindo riscos, melhorando controle financeiro e acelerando a tomada de decisão.',
    },
    {
      kicker: 'Crescimento & Estratégia Comercial',
      title: 'Varejo Multicanal — Expansão Sustentável',
      contexto: 'Empresas em expansão tomavam decisões de marketing, compras e operação sem integração clara entre dados de vendas, estoque, pessoas e canais.',
      decisao: 'Definir onde investir capital, quais PDVs expandir, como ajustar mix de produtos e estruturar crescimento sustentável.',
      ganho: 'As decisões passaram a ser orientadas por KPIs integrados, viabilizando expansão estruturada, ganho de market share e crescimento consistente de receita ao longo do tempo.',
    },
    {
      kicker: 'Expansão Empresarial',
      title: 'Casa Jóias — De 1 para 8 PDVs',
      contexto: 'Empresa familiar operava com baixa escala, decisões intuitivas e pouco controle integrado de vendas, pessoas e capital.',
      decisao: 'Definir quando expandir, onde abrir novas unidades, como estruturar equipe, mix de produtos e investimentos sem comprometer caixa e margem.',
      ganho: 'A empresa passou a decidir com base em dados operacionais e financeiros, expandindo de forma controlada, com previsibilidade e sustentabilidade.',
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
            Casos de atuação
          </h1>
          <p className="text-2xl text-white/90 max-w-4xl">
            Situações reais onde decisões críticas precisavam ser tomadas com pouco tempo,
            alto impacto e informação fragmentada. O foco não foi tecnologia — foi clareza decisória.
          </p>
        </motion.div>
      </section>

      {/* Casos */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {casos.map((caso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 hover:border-accent rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-8 lg:p-12">
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                    {caso.kicker}
                  </span>
                  
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-8">
                    {caso.title}
                  </h2>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">
                        Contexto
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {caso.contexto}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">
                        Decisão Crítica
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {caso.decisao}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">
                        Ganho de Clareza
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {caso.ganho}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fechamento */}
      <section className="py-16 bg-bg-soft">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 leading-relaxed text-center italic"
          >
            Em todos os casos, o trabalho não foi entregar relatórios ou dashboards,
            mas estruturar decisões críticas para que continuassem válidas
            mesmo quando o cenário mudasse.
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
              Sua organização enfrenta decisões complexas?
            </h3>
            <Link
              to="/contato"
              className="inline-block bg-accent hover:bg-white text-white hover:text-primary px-10 py-5 text-sm font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
            >
              Vamos conversar
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Casos;