import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: string;
}

const SEO = ({ 
  title, 
  description, 
  canonical = 'https://rugvedarelocation.com', 
  image = 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg',
  type = 'website'
}: SEOProps) => {
  const siteTitle = 'Rugveda Relocation - Professional Moving Services';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={`${title} | ${siteTitle}`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | ${siteTitle}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    </Helmet>
  );
};

export default SEO;