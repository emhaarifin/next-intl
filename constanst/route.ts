export type Slug = {
  id: number;
  pathname: string;
};
export const ROUTE: {
  [locale: string]: Slug[];
} = {
  id: [
    {
      id: 1,
      pathname: '/tentang',
    },
    {
      id: 2,
      pathname: '/produk',
    },
    {
      id: 3,
      pathname: '/produk/1',
    },
  ],
  en: [
    { id: 1, pathname: '/about' },
    { id: 2, pathname: '/products' },
    { id: 3, pathname: '/products/1' },
  ],
};
