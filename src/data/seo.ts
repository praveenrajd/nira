export const SEO_DATA = {
  defaultTitle: "NIRA SCIENTIFIC SOLUTIONS | Regulatory & Scientific Partner in Homoeopathy",
  titleTemplate: "%s | Nira Scientific Solutions",
  description: "Nira Scientific Solutions is a specialised regulatory and scientific partner for homoeopathic pharmaceutical companies, supporting regulatory pathway assessment, scientific documentation, research, CDSCO-related support, and dossier preparation.",
  siteUrl: "https://nirascientific.com",
  ogImage: "https://nirascientific.com/og-image.png",
  twitterHandle: "@NiraScientific",
  keywords: [
    "Nira Scientific Solutions",
    "Regulatory and scientific partner",
    "Homoeopathy",
    "Homoeopathic pharmaceutical companies",
    "Regulatory strategy",
    "Scientific documentation",
    "Evidence-based product development",
    "Research",
    "Clinical research",
    "Product development",
    "Regulatory preparedness",
    "Scientific dossiers",
    "Regulatory submissions",
    "CDSCO-related support",
    "Scientific literature",
    "Evidence generation"
  ]
};

export const SCHEMA_ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nirascientific.com/#organization",
      "name": "Nira Scientific Solutions",
      "url": "https://nirascientific.com",
      "logo": "https://nirascientific.com/favicon.svg",
      "description": "Specialised regulatory and scientific partner for homoeopathic pharmaceutical companies.",
      "slogan": "Partnering with Industry. Strengthening Science. Preparing for Regulation.",
      "knowsAbout": [
        "Homoeopathic Pharmaceutical Regulations",
        "CDSCO Submissions",
        "Scientific Dossier Preparation",
        "Clinical Research Coordination",
        "Evidence-Based Product Development",
        "Scientific Documentation"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Regulatory Consultation",
        "email": "info@nirascientific.com",
        "areaServed": ["IN", "Worldwide"],
        "availableLanguage": ["English"]
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://nirascientific.com/#service",
      "name": "Nira Scientific Solutions Regulatory & Scientific Services",
      "provider": {
        "@id": "https://nirascientific.com/#organization"
      },
      "areaServed": "Global",
      "serviceType": "Regulatory and Scientific Consulting for Homoeopathy",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Core Areas of Partnership",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Regulatory Partnership & CDSCO Support",
              "description": "Regulatory pathway assessment, gap analysis, dossier preparation, and CDSCO submission support for homoeopathic medicines."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Scientific Partnership & Documentation",
              "description": "Scientific literature reviews, evidence mapping, rationale development, product monographs, and scientific dossiers."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Research & Clinical Research Partnership",
              "description": "Research protocol support, clinical research planning, ethics committee documentation, and investigator coordination."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "New Product Development & Regulatory Partnership",
              "description": "Early product concept assessment, regulatory pathway evaluation, and pre-market evidence planning."
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://nirascientific.com/#website",
      "url": "https://nirascientific.com",
      "name": "Nira Scientific Solutions",
      "publisher": {
        "@id": "https://nirascientific.com/#organization"
      }
    }
  ]
};
