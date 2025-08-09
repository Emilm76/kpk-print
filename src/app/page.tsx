import { Metadata } from 'next';
import { CITY_MAIN } from './constants';
import { TemplatePage } from './template-page';

// title до 60 символов, description до 160
export const metadata: Metadata = {
  title: `Инженерная печать чертежей А0, А1, А2 | КПК-Принт ${CITY_MAIN.name}`,
  description: `Печать чертежей А0, А1, А2, А3, А4 ${CITY_MAIN.region1} ${CITY_MAIN.region2}. Инженерная печать, фальцевание, брошюровка проектов. Низкие цены, быстрые сроки.`,
};

export default function Home() {
  return <TemplatePage city={CITY_MAIN} />;
}
