import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { HiArrowLeft, HiClock, HiTag } from 'react-icons/hi';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const fetchPost = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/blog/posts/${slug}`
      );
      setPost(response.data);
    } catch (error) {
      console.error('Error fetching post:', error);
      // Mock post se não encontrar
      setPost(getMockPost(slug));
    } finally {
      setLoading(false);
    }
  };

  const getMockPost = (slug) => ({
    title: 'Post do Blog',
    content: 'Conteúdo do post aqui...',
    category: 'Categoria',
    tags: ['tag1', 'tag2'],
    created_at: new Date().toISOString(),
    author: 'Biiotech',
    image_url: '/imagens/TECH1.jpeg',
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">Post não encontrado</h2>
          <Link to="/blog" className="text-accent hover:text-primary">
            Voltar para o blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <HiArrowLeft className="w-5 h-5" />
            Voltar para o blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent text-sm font-semibold uppercase tracking-wider rounded-full mb-6">
              {post.category}
            </span>

            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <span className="flex items-center gap-2">
                <HiClock className="w-5 h-5" />
                {formatDate(post.created_at)}
              </span>
              {post.author && (
                <span>Por {post.author}</span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {post.image_url && (
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-96 object-cover rounded-lg mb-12"
              />
            )}

            <div className="text-gray-700 leading-relaxed space-y-6">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-bg-soft text-gray-700 rounded-lg hover:bg-accent hover:text-white transition-colors cursor-pointer"
                    >
                      <HiTag className="w-4 h-4" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg-soft">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif font-bold text-primary mb-4">
              Quer estruturar suas decisões críticas?
            </h3>
            <p className="text-gray-600 mb-8">
              Vamos conversar sobre como a arquitetura de decisão pode ajudar sua organização.
            </p>
            <Link
              to="/contato"
              className="inline-block bg-primary hover:bg-accent text-white px-10 py-5 text-sm font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
            >
              Entrar em contato
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;