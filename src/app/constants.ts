export type City = {
  name: string;
  url: string;
  region1: string;
  region2: string;
};

export const CITY_MAIN: City = {
  name: 'Ставрополь',
  url: '/',
  region1: 'в Ставрополе',
  region2: 'и Ставропольском крае',
};

export const CITIES: City[] = [
  {
    name: 'Астрахань',
    url: 'astrakhan',
    region1: 'в Астрахане',
    region2: 'и Астраханской области',
  },
  {
    name: 'Волгоград',
    url: 'volgograd',
    region1: 'в Волгограде',
    region2: 'и Волгоградской области',
  },
  {
    name: 'Воронеж',
    url: 'voronezh',
    region1: 'в Воронеже',
    region2: 'и Воронежской области',
  },
  {
    name: 'Казань',
    url: 'kazan',
    region1: 'в Казани',
    region2: 'и Республике Татарстан',
  },
  {
    name: 'Краснодар',
    url: 'krasnodar',
    region1: 'в Краснодаре',
    region2: 'и Краснодарском крае',
  },
  {
    name: 'Москва',
    url: 'moscow',
    region1: 'в Москве',
    region2: 'и Московской области',
  },
  {
    name: 'Пятигорск',
    url: 'pyatigorsk',
    region1: 'в Пятигорске',
    region2: 'и Ставропольском крае',
  },
  {
    name: 'Ростов-на-Дону',
    url: 'rostov',
    region1: 'в Ростове-на-Дону',
    region2: 'и Ростовской области',
  },
  {
    name: 'Санкт-Петербург',
    url: 'spb',
    region1: 'в Санкт-Петербурге',
    region2: 'и Ленинградской области',
  },
  CITY_MAIN,
  {
    name: 'Тюмень',
    url: 'tyumen',
    region1: 'в Тюмени',
    region2: 'и Тюменской области',
  },
  {
    name: 'Элиста',
    url: 'elista',
    region1: 'в Элисте',
    region2: 'и Республике Калмыкия',
  },
];
