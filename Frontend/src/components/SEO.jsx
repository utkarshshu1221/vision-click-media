import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, keywords, image, url }) {
  const defaultTitle = "VisionClick Midea | Digital Agency & Marketing Experts";
  const defaultDescription =
    "VisionClick Midea offers cutting-edge web development, app solutions, and digital marketing to empower your business online.";
  const defaultImage = "/logo.png";
  const defaultKeywords = "web development, digital marketing, SEO, app development, ecommerce";

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VisionClick Midea",
    "url": "https://visionclickmidea.com",
    "logo": "/logo.png",
    "sameAs": [
      "https://facebook.com/visionclickmidea",
      "https://linkedin.com/company/visionclickmidea"
    ]
  };

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://visionclickmidea.com"} />

      <meta name="twitter:card" content="summary_large_image" />

      <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
    </Helmet>
  );
}
