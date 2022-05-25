import Document, { Html, Head, Main, NextScript } from 'next/document'
import { loadEnvConfig } from '@next/env'



class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>     
<meta name='robots' content='max-image-preview:large' />
<link rel='dns-prefetch' href='https://fonts.googleapis.com/' />
<link rel='dns-prefetch' href='https://s.w.org/' />
<link rel='stylesheet' id='smartmag-core-style'  href='https://x90b23.vercel.app/styles/main.css' type='text/style' media='all' />
<link crossorigin="anonymous" rel='stylesheet' id='smartmag-fonts-style'  href='https://fonts.googleapis.com/style?family=Public+Sans%3A400%2C400i%2C500%2C600%2C700' type='text/style' media='all' />
<link rel='stylesheet' id='magnific-popup-style'  href='https://x90b23.vercel.app/styles/lightbox0e7d.css' type='text/style' media='all' />
<link rel='stylesheet' id='smartmag-icons-style'  href='https://x90b23.vercel.app/styles/icons/icons0e7d.css?' type='text/style' media='all' />
<script type='text/javascript' src='https://x90b23.vercel.app/js/jquery/jquery.min.js?ver=3.5.1' id='jquery-core-js'></script>
<script type='text/javascript' src='https://x90b23.vercel.app/js/jquery/jquery-migrate.min.js?ver=3.3.2' id='jquery-migrate-js'></script>
</Head>
{/*<body class="home page-template page-template-page-templates page-template-no-wrapper page-template-page-templatesno-wrapper-php page page-id-786 has-lb has-lb-sm has-sb-sep layout-normal elementor-default elementor-kit-6 elementor-page elementor-page-786">*/}
          <Main />
          <NextScript />
          <script
  dangerouslySetInnerHTML={{
    __html: `
/* <![CDATA[ */
var BunyadLazy = {"type":"smart"};
/* ]]> */
`,
  }}
/>
<script type='text/javascript' src='js/lazyload.js' id='smartmag-lazyload-js'></script>
<script type='text/javascript' src='spcore/components/auto-load-post/js/auto-load-post5a2c.js?ver=1.1.7' id='spc-auto-load-post-js'></script>
<script type='text/javascript' src='js/jquery.mfp-lightbox.js' id='magnific-popup-js'></script>
<script type='text/javascript' src='js/theme.js' id='smartmag-theme-js'></script>
<script type='text/javascript' src='js/jquery.sticky-sidebar.js' id='theia-sticky-sidebar-js'></script>
<script type='text/javascript' src='js/micro-modal.js' id='micro-modal-js'></script>
        
      </Html>
    );
  }
}

export default MyDocument
