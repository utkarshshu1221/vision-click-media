// src/pages/Blog.jsx
import SEO from "../components/SEO.jsx";

const posts = [
  { icon: "📱", cat: "Web Development", title: "Top 5 Web Design Trends for 2024", date: "January 15, 2024", excerpt: "Discover the latest web design trends shaping the digital landscape." },
  { icon: "🚀", cat: "Digital Marketing", title: "SEO Tips for Small Businesses", date: "January 10, 2024", excerpt: "Effective strategies to improve visibility and attract customers." },
  { icon: "⚡", cat: "Performance", title: "Optimizing Website Performance", date: "January 5, 2024", excerpt: "Techniques to boost loading speed and UX." },
  { icon: "🔒", cat: "Security", title: "Web Security Best Practices", date: "December 28, 2023", excerpt: "Protect your website and users." },
  { icon: "📊", cat: "Analytics", title: "Understanding Web Analytics", date: "December 20, 2023", excerpt: "Interpret key metrics for data-driven decisions." },
  { icon: "🎨", cat: "Design", title: "UI/UX Design Principles", date: "December 15, 2023", excerpt: "Build engaging digital products." },
];

export default function Blog() {
  return (
    <>
      <SEO
        title="Blog | VisionClick Midea"
        description="Latest insights on web development, marketing, performance, and design."
        url="https://visionclickmidea.com/blog"
      />
      <div className="page-content">
        <div className="container">
          <h1 className="section-title">Our Blog</h1>
          <p style={{ textAlign: "center", fontSize: "1.1rem", color: "#cccccc", marginBottom: "3rem" }}>
            Stay updated with the latest trends in web development, digital marketing, and technology.
          </p>
          <div className="blog-grid">
            {posts.map((p) => (
              <div className="blog-card" key={p.title}>
                <div className="blog-image">{p.icon}</div>
                <div className="blog-content">
                  <div className="blog-category">{p.cat}</div>
                  <h3 className="blog-title">{p.title}</h3>
                  <p className="blog-excerpt">{p.excerpt}</p>
                  <div className="blog-date">{p.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
