"use client";

import { useState, useEffect } from "react";
import ArticleCard from "@/components/ArticleCard";
import { articleAPI, EnhancedArticle } from "@/lib/api";

export default function Home() {
  const [articles, setArticles] = useState<EnhancedArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await articleAPI.fetchEnhancedArticles(1, 6);
        setArticles(response.enhanced_articles);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch articles"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center items-center h-64">
            <div className="text-lg text-gray-600">Loading articles...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center items-center h-64">
            <div className="text-lg text-red-600">Error: {error}</div>
          </div>
        </div>
      </div>
    );
  }

  const heroArticle = articles[0];
  const featuredArticles = articles.slice(1, 3);
  const regularArticles = articles.slice(3);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        {articles.length > 0 && (
          <section className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Hero Article */}
              <div className="lg:col-span-2">
                <ArticleCard article={heroArticle} variant="hero" />
              </div>

              {/* Featured Articles Sidebar */}
              <div className="space-y-8">
                {featuredArticles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    variant="featured"
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Main Content Grid */}
        {regularArticles.length > 0 && (
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  variant="default"
                />
              ))}
            </div>
          </section>
        )}

        {/* Newsletter Signup */}
        <section className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            Stay Informed
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get the latest news delivered to your inbox every morning. Join
            thousands of readers who trust The Daily Ledger for accurate,
            comprehensive coverage of today's most important stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
