import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { HiClock, HiTag } from 'react-icons/hi';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/blog/posts`
      );
      setPosts(response.data.posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
      // Se não houver posts, usar dados mockados
      setPosts(getMockPosts());
    } finally {
      setLoading(false);
    }
  };

  const getMockPosts = () => [
    {
      _id: '1',
      title: 'Como estruturar decisões em ambientes de alta incerteza',
      slug: 'decisoes-alta-incerteza',
      excerpt: 'Em cenários voláteis, decidir bem exige mais do que experiência: exige arquitetura. Entenda como.',
      category: 'Arquitetura de Decisão',
      tags: ['decisão', 'estrategia', 'dados'],
      created_at: '2025-01-15T10:00:00',
      image_url: '/imagens/TECH1.jpeg',
    },
    {
      _id: '2',
      title: 'Dados não decidem: pessoas decidem com dados',
      slug: 'dados-nao-decidem',
      excerpt: 'O problema não está na falta de dados, mas na ausência de critérios claros para usá-los.',
      category: 'Análise de Dados',
      tags: ['dados', 'decisão', 'gestão'],
      created_at: '2025-01-10T10:00:00',
      image_url: '/imagens/TECH2.jpeg',
    },
    {
      _id: '3',
      title: 'Por que dashboards não resolvem problemas estratégicos',
      slug: 'dashboards-estrategia',
      excerpt: 'Dashboards mostram o que aconteceu. Arquitetura de decisão mostra o que fazer a seguir.',
      category: 'Estratégia',
      tags: ['bi', 'estrategia', 'gestão'],
      created_at: '2025-01-05T10:00:00',
      image_url: '/imagens/TECH3.jpeg',
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
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
            Insights & Conteúdo
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl">
            Reflexões sobre arquitetura de decisão, análise de dados e gestão estratégica em ambientes complexos.
          </p>
        </motion.div>
      </section>

      {/* Posts Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
              <p className="mt-4 text-gray-600">Carregando posts...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg border border-gray-200 hover:border-accent overflow-hidden transition-all duration-300 hover:shadow-2xl group"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image_url || '/imagens/TECH1.jpeg'}
                      alt={post.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-semibold uppercase tracking-wider rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <HiClock className="w-4 h-4" />
                        {formatDate(post.created_at)}
                      </span>
                    </div>

                    <h2 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                          >
                            <HiTag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-block text-accent hover:text-primary font-semibold text-sm uppercase tracking-wider transition-colors"
                    >
                      Ler mais →
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {!loading && posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">Nenhum post publicado ainda.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-bg-soft">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif font-bold text-primary mb-4">
              Receba novos conteúdos por email
            </h3>
            <p className="text-gray-600 mb-8">
              Insights exclusivos sobre arquitetura de decisão e análise de dados.
            </p>
            <p className="text-sm text-gray-500">
              Cadastre-se na newsletter no rodapé da página.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;