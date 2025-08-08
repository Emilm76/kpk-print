import { CITIES } from '@/app/constants';
import { TemplatePage } from '@/app/template-page';
import { notFound } from 'next/navigation';

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const cityObj = CITIES.find((c) => c.url === city);

  if (!cityObj) return notFound();

  return <TemplatePage city={cityObj} />;
}

export async function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.url }));
}
