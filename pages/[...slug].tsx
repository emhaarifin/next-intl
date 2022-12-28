import { NextPage } from 'next';
import { useRouter } from 'next/router';
import LocaleSwitcher from '../components/locale-switcher';
import Menu from '../components/menu';

type Slug = {
  [slug: string]: string;
};
type Props = {
  data: {
    [lang: string]: Slug;
  };
};
const DynamicPage: NextPage<Props, Props> = (props) => {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const slug = (router.query.slug as string[]) || [];
  return (
    <div>
      <h1>Index page</h1>
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>

      <LocaleSwitcher />
      <Menu />

      <h1>Slug: {slug.join('/')}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.data[locale as string][slug.join('/')] }} />
      <br />
    </div>
  );
};

export async function getServerSideProps() {
  const data = {
    id: {
      tentang: `<p>Tentang</p>`,
    },
    en: {
      about: `<p>About</p>`,
    },
  };

  // Pass data to the page via props
  return { props: { data } };
}

export default DynamicPage;
