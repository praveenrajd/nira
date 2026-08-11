import { useEffect } from 'react';
import { SEO_DATA } from '../data/seo';

interface UseSEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
}

export function useSEO({ title, description, keywords, canonicalUrl }: UseSEOProps = {}) {
  useEffect(() => {
    // Page Title
    const pageTitle = title
      ? `${title} | NIRA SCIENTIFIC SOLUTIONS`
      : SEO_DATA.defaultTitle;
    document.title = pageTitle;

    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || SEO_DATA.description);
    }

    // Meta Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        'content',
        (keywords || SEO_DATA.keywords).join(', ')
      );
    }

    // Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl || SEO_DATA.siteUrl);
    }
  }, [title, description, keywords, canonicalUrl]);
}
