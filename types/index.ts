export interface Record {
  id: string;
  fields: {
    'Trending Keyword': string;
  };
}

export interface TrendCardProps {
  keyword: string;
  link: string;
}
