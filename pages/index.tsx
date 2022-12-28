import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ROUTE, Slug } from '../constanst/route';
import LocaleSwitcher from '../components/locale-switcher';
import Menu from '../components/menu';

export default function IndexPage() {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  return (
    <div>
      <h1>Index page</h1>
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>

      <LocaleSwitcher />
      <Menu />
      <br />
    </div>
  );
}
