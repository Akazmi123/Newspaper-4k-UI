// Enhanced Article API Types
export interface EnhancedArticle {
    id: number;
    authors: string;
    crawled_at: string;
    enhanced_content: string;
    enhanced_title: string;
    images: string[];
    keyword_scores: Record<string, any>;
    keywords: string[];
    lang: string;
    meta_description: string;
    meta_img: string;
    meta_keywords: string[];
    movies: string[];
    openai_model_used: string;
    original_article_id: number;
    original_title: string;
    processed_at: string;
    processing_status: string;
    seo_keywords: string[];
    summary_length: number | null;
    tags: string[];
    top_image: string;
    url: string;
}

export interface PaginationInfo {
    has_next: boolean;
    has_prev: boolean;
    page: number;
    pages: number;
    per_page: number;
    total: number;
}

export interface EnhancedArticlesResponse {
    enhanced_articles: EnhancedArticle[];
    pagination: PaginationInfo;
}

// API Service
export class ArticleAPI {
    private baseUrl: string;

    constructor(baseUrl: string = 'http://localhost:5000') {
        this.baseUrl = baseUrl;
    }

    async fetchEnhancedArticles(
        page: number = 1,
        perPage: number = 6
    ): Promise<EnhancedArticlesResponse> {
        try {
            const response = await fetch(
                `${this.baseUrl}/api/enhanced-articles?page=${page}&per_page=${perPage}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data: EnhancedArticlesResponse = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching enhanced articles:', error);
            throw error;
        }
    }
}

// Default API instance
export const articleAPI = new ArticleAPI();
