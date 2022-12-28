import Link from 'next/link';
import { useRouter } from 'next/router';
import { ROUTE } from '../constanst/route';

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  const otherLocales = (locales || []).filter((locale) => locale !== activeLocale);

  return (
    <div>
      <p>Locale switcher:</p>
      <ul>
        {otherLocales.map((locale) => {
          const { pathname, query } = router;
          const path = ROUTE[locale || 'id'].find(
            (b) =>
              b.id ===
              locales
                ?.map((a) => ROUTE[a].find((i) => i.pathname === `/${((query.slug || ['']) as string[]).join('/')}`))
                .filter(Boolean)[0]?.id
          );

          return (
            <li key={locale}>
              <Link href={{ pathname, query }} as={path?.pathname} locale={locale} legacyBehavior>
                {locale}
              </Link>
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
