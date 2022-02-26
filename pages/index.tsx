import { GetStaticProps } from 'next'
import Head from 'next/head'
import LeftPane from '../components/LeftPane'
import Main from '../components/Main'
import RightPane from '../components/RightPane'
import TopBar from '../components/TopBar'

function Home({ data }: any) {
  
  return (
    <div className='dark'>
      <Head>
        <title>Nurture Labs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />

      <div className='bg-black grid xl:grid-cols-[2fr_5fr_3fr] grid-cols-[2fr_4fr_3fr]'>
          <LeftPane />

          <Main data={data} />
          
          <RightPane />
      </div>

    </div>
  )
}

export const  getStaticProps: GetStaticProps = async() => {
  
  const res = await fetch(`https://raw.githubusercontent.com/akshita151199/APIs/main/data`);
  const { data } = await res.json();
  
  // Passing data via props
  return {
    props: {
      data,
    },
  };
  
};

export default Home
