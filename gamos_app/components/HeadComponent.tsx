import Head from 'next/head'

const HeadComponent: React.FC = () => {
    return (
        <Head>
            <title>Gamos Application</title>
            <meta name="description" content="Bienvenue sur l'application Gamos !" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
  };

export default HeadComponent;