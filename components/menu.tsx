import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { ROUTE, Slug } from '../constanst/route';

function Menu() {
  const router = useRouter();

  const { locale } = router;

  return (
    <Fragment>
      <Link href='/'>Home</Link>
      <br />

      {ROUTE[locale as string].map((item: Slug) => (
        <Fragment key={`path-${item.pathname}`}>
          <Link href={(item.pathname || '').toLocaleLowerCase()}>{item.pathname}</Link>
          <br />
        </Fragment>
      ))}
    </Fragment>
  );
}

export default Menu;
