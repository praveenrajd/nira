import React from 'react';
import { SCHEMA_ORG_JSON_LD } from '../../data/seo';

export const StructuredData: React.FC = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(SCHEMA_ORG_JSON_LD)
      }}
    />
  );
};
