import { Fragment } from 'react';
import Link from 'next/link';

//domain.com/news
function NewsPage() {
  return (
    <Fragment>
      <h1>The News page</h1>
      <ul>
          <li><Link href="/news/nextjs-is-a-great-freamework">NextJS is  A Great Framework</Link></li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
