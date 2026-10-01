import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/clinic',
    '/patient-stories',
    '/faq',
    '/contact',
    '/privacy',
    '/terms',
    '/consent',
  ];

  return routes.map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/contact' ? 0.9 : 0.8,
  }));
}
