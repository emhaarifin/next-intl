import type { AppProps } from 'next/app';

import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { ROUTE, Slug } from '../constanst/route';

function MyApp({ Component, pageProps }: AppProps) {
  // const router = useRouter();
  // const { locale } = router;
  // const slug = useMemo(() => (router.query.slug as string) || '', [locale]);

  // useEffect(() => {
  //   const hasSlug = ROUTE[locale as string].find((item: Slug) => item.pathname.toLocaleLowerCase() === slug);
  //   console.log(hasSlug, slug, locale);

  //   if (hasSlug) {
  //     router.push({ pathname: hasSlug.pathname.toLocaleLowerCase() });
  //   }
  // }, [locale, slug]);
  return <Component {...pageProps} />;
}
export default MyApp;
