import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, keywords, image, url }) {
  const defaultTitle = "VisionClick Media | Digital Agency & Marketing Experts";
  const defaultDescription =
    "VisionClick Media offers cutting-edge web development, app solutions, and digital marketing to empower your business online.";
  const defaultImage = "/logo.png";
  const defaultKeywords = "web development, digital marketing, SEO, app development, ecommerce";

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VisionClick Media",
    "url": "https://visionclickmedia.digital",
    "logo": "/logo.png",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61580651744940",
      "https://www.linkedin.com/company/visionclick-media/?viewAsMember=true"
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
      <meta property="og:url" content={url || "https://visionclickmedia.digital"} />

      <meta name="twitter:card" content="summary_large_image" />

      <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
    </Helmet>
  );
}
