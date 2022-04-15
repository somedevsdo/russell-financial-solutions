import '../styles/imported/normalize.css';
import '../styles/bem/style.scss';
import '../styles/imported/animate.min.css';
import '../styles/imported/bootstrap-grid.css';
import '../styles/imported/glide.core.min.css';
import '../styles/imported/glide.theme.min.css';
import '../styles/imported/hamburger.min.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
