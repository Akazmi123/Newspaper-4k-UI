export interface Article {
    id: string;
    title: string;
    summary: string;
    section: string;
    imageUrl?: string;
    author: string;
    publishDate: string;
    isHero?: boolean;
}

export const articles: Article[] = [
    {
        id: "1",
        title: "Global Climate Summit Reaches Historic Agreement on Carbon Reduction",
        summary: "World leaders have reached an unprecedented consensus on aggressive carbon reduction targets, marking a turning point in international climate policy.",
        section: "World",
        imageUrl: "https://images.unsplash.com/photo-1569163139394-de4466c0e7e6?w=800&h=600&fit=crop",
        author: "Sarah Chen",
        publishDate: "2024-01-15",
        isHero: true
    },
    {
        id: "2",
        title: "Tech Giants Face New Regulations in European Union",
        summary: "The EU's Digital Markets Act comes into full effect, imposing strict rules on major technology companies and their market practices.",
        section: "Tech",
        imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
        author: "Marcus Rodriguez",
        publishDate: "2024-01-15"
    },
    {
        id: "3",
        title: "New Study Reveals Breakthrough in Quantum Computing",
        summary: "Researchers at leading universities have achieved a quantum computing milestone that could revolutionize data processing and cryptography.",
        section: "Science",
        imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
        author: "Dr. Emily Watson",
        publishDate: "2024-01-15"
    },
    {
        id: "4",
        title: "Supreme Court Hears Arguments on Digital Privacy Rights",
        summary: "The nation's highest court considers landmark case that could redefine how personal data is protected in the digital age.",
        section: "U.S.",
        imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
        author: "Jennifer Liu",
        publishDate: "2024-01-14"
    },
    {
        id: "5",
        title: "Economic Growth Surpasses Expectations in Q4",
        summary: "Latest economic indicators show robust growth across multiple sectors, defying earlier recession predictions.",
        section: "U.S.",
        imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
        author: "Robert Kim",
        publishDate: "2024-01-14"
    },
    {
        id: "6",
        title: "Olympic Committee Announces New Host City for 2032 Games",
        summary: "After months of deliberation, the International Olympic Committee has selected the host city for the 2032 Summer Olympics.",
        section: "Sports",
        imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
        author: "Alex Thompson",
        publishDate: "2024-01-14"
    },
    {
        id: "7",
        title: "Art Exhibition Breaks Attendance Records at Metropolitan Museum",
        summary: "The museum's latest contemporary art exhibition has drawn unprecedented crowds, signaling a cultural renaissance in the city.",
        section: "Arts",
        imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
        author: "Isabella Martinez",
        publishDate: "2024-01-13"
    },
    {
        id: "8",
        title: "Opinion: The Future of Remote Work in a Post-Pandemic World",
        summary: "As companies navigate the new normal, the debate over remote work policies continues to evolve with lasting implications for the workforce.",
        section: "Opinion",
        imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
        author: "Michael Chen",
        publishDate: "2024-01-13"
    },
    {
        id: "9",
        title: "Fashion Week Showcases Sustainable Design Innovations",
        summary: "This year's fashion week highlights groundbreaking sustainable materials and eco-friendly design practices from leading designers.",
        section: "Style",
        imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        author: "Sophie Williams",
        publishDate: "2024-01-13"
    },
    {
        id: "10",
        title: "Travel Industry Sees Surge in Eco-Tourism Bookings",
        summary: "Travelers are increasingly choosing destinations and experiences that prioritize environmental conservation and local community support.",
        section: "Travel",
        imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
        author: "David Park",
        publishDate: "2024-01-12"
    },
    {
        id: "11",
        title: "Space Exploration Mission Discovers Water on Distant Planet",
        summary: "NASA's latest space probe has detected signs of water on an exoplanet, raising new questions about the possibility of extraterrestrial life.",
        section: "Science",
        imageUrl: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop",
        author: "Dr. Amanda Foster",
        publishDate: "2024-01-12"
    },
    {
        id: "12",
        title: "International Trade Agreement Reached After Months of Negotiations",
        summary: "Representatives from multiple nations have finalized a comprehensive trade agreement that promises to boost global economic cooperation.",
        section: "World",
        imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
        author: "Thomas Anderson",
        publishDate: "2024-01-12"
    }
];
