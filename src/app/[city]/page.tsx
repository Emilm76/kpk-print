import { CITIES } from '@/app/constants';
import { TemplatePage } from '@/app/template-page';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const cityObj = CITIES.find((c) => c.url === city);

  if (!cityObj) {
    return {
      title: 'Инженерная печать чертежей А0, А1, А2 | КПК-Принт',
      description:
        'Печать чертежей А0, А1, А2, А3, А4. Инженерная печать, фальцевание, брошюровка проектов. Низкие цены, быстрые сроки.',
    };
  }

  return {
    title: `Инженерная печать чертежей А0, А1, А2 | КПК-Принт ${cityObj.name}`,
    description: `Печать чертежей А0, А1, А2, А3, А4 ${cityObj.region1} ${cityObj.region2}. Инженерная печать, фальцевание, брошюровка проектов. Низкие цены, быстрые сроки.`,
  };
}

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
