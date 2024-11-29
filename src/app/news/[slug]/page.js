import React from "react";
import newsData from "@/data/newsData";
import Navbar from "@/app/components/Navbard";
import Footer from "@/app/components/Footer";
import NewsletterComponent from "@/app/components/NewsletterComponent";
import ReferencesSection from "@/app/components/ReferencesSection";
import Gallery from "@/app/components/SolutionComponents/Gallery";

export default async function NewsArticle({ params }) {
  // Await params if it is asynchronous
  const { slug } = await params;
  console.log(slug);
  // Find the article based on the slug
  const article = newsData.find((article) => article.slug === `news/${slug}`);

  console.log(article);
  // Handle 404 if no article is found
  if (!article) {
    return (
      <div>
        <h1>404 - Article Not Found</h1>
        <p>The article you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Navbar />
        <header className="article-header">
          <div className="article-title">
            <h1>{article.title}</h1>

            <div className="article-meta">
              <span>Published: February 15, 2024</span> |<span>5 min read</span>
            </div>
          </div>
        </header>
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.description }}
        />
      </div>

      {article.images && article.images.length > 0 && (
        <Gallery items={article.images} />
      )}

      <ReferencesSection />
      <NewsletterComponent />
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return newsData.map((article) => ({
    slug: article.slug,
  }));
}
