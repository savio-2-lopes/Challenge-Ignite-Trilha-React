import { GetStaticProps } from 'next';

import api from 'services/api';

import { Header } from 'components/Header';
import { Banner } from 'components/Banner';
import { Resources } from 'components/Resources';
import { Carroussel } from 'components/Carrousel';

export type Continet = {
  id: number;
  name: string;
  description: string;
  link: string;
  image: string;
};

export interface IHomeProps {
  continents: Continet[];
}

export default function Home({ continents }: IHomeProps): JSX.Element {
  return (
    <>
      <Header />
      <Banner />
      <Resources />

      <Carroussel data={continents} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('continents');

  return {
    props: {
      continents: data,
    },
  };
};
