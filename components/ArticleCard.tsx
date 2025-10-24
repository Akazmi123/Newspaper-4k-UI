import Image from "next/image";
import { Article } from "@/lib/data";
import { EnhancedArticle } from "@/lib/api";

interface ArticleCardProps {
  article: Article | EnhancedArticle;
  variant?: "default" | "hero" | "featured";
}

export default function ArticleCard({
  article,
  variant = "default",
}: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Helper function to check if article is EnhancedArticle
  const isEnhancedArticle = (
    article: Article | EnhancedArticle
  ): article is EnhancedArticle => {
    return "enhanced_title" in article;
  };

  // Extract data based on article type
  const getArticleData = () => {
    if (isEnhancedArticle(article)) {
      return {
        id: article.id.toString(),
        title: article.enhanced_title,
        summary: article.enhanced_content,
        section: article.seo_keywords[0] || "News",
        imageUrl: article.top_image || article.meta_img,
        author: article.authors,
        publishDate: article.crawled_at,
        isHero: false,
      };
    } else {
      return article;
    }
  };

  const articleData = getArticleData();

  if (variant === "hero") {
    return (
      <article className="group cursor-pointer">
        <div className="relative overflow-hidden rounded-lg mb-4">
          {articleData.imageUrl && (
            <Image
              src={articleData.imageUrl}
              alt={articleData.title}
              width={800}
              height={600}
              className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>
        <div className="space-y-3">
          <div className="text-sm font-medium text-red-600 uppercase tracking-wide">
            {articleData.section}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight group-hover:underline transition-all duration-200">
            {articleData.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {articleData.summary}
          </p>
          <div className="text-sm text-gray-500">
            By {articleData.author} • {formatDate(articleData.publishDate)}
          </div>
        </div>
      </article>
    );
  }

  if (variant === "featured") {
    return (
      <article className="group cursor-pointer">
        <div className="relative overflow-hidden rounded-lg mb-3">
          {articleData.imageUrl && (
            <Image
              src={articleData.imageUrl}
              alt={articleData.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>
        <div className="space-y-2">
          <div className="text-xs font-medium text-red-600 uppercase tracking-wide">
            {articleData.section}
          </div>
          <h2 className="text-xl font-serif font-bold text-gray-900 leading-tight group-hover:underline transition-all duration-200">
            {articleData.title}
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
            {articleData.summary}
          </p>
          <div className="text-xs text-gray-500">
            By {articleData.author} • {formatDate(articleData.publishDate)}
          </div>
        </div>
      </article>
    );
  }

  // Default variant
  return (
    <article className="group cursor-pointer">
      <div className="flex gap-4">
        {articleData.imageUrl && (
          <div className="flex-shrink-0">
            <div className="relative overflow-hidden rounded w-24 h-24">
              <Image
                src={articleData.imageUrl}
                alt={articleData.title}
                width={96}
                height={96}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        )}
        <div className="flex-1 min-w-0 space-y-2">
          <div className="text-xs font-medium text-red-600 uppercase tracking-wide">
            {articleData.section}
          </div>
          <h3 className="text-lg font-serif font-bold text-gray-900 leading-tight group-hover:underline transition-all duration-200">
            {articleData.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
            {articleData.summary}
          </p>
          <div className="text-xs text-gray-500">
            By {articleData.author} • {formatDate(articleData.publishDate)}
          </div>
        </div>
      </div>
    </article>
  );
}
