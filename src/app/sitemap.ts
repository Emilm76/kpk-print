import type { MetadataRoute } from 'next';
import { CITIES } from './constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const otherSites = CITIES.filter((city) => city.url !== '/');

  const cities: MetadataRoute.Sitemap = otherSites.map((city) => {
    return {
      url: `https://kpk-print.ru/${city.url}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    };
  });

  return [
    {
      url: 'https://kpk-print.ru',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...cities,
  ];
}
