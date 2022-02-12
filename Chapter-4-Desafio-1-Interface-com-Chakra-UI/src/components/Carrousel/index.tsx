import Link from 'next/link';

import { Heading, Flex } from '@chakra-ui/react';

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export type Continet = {
  id: number;
  name: string;
  description: string;
  link: string;
  image: string;
};

export interface ICarrouselProps {
  data: Continet[];
}

SwiperCore.use([Navigation, Pagination]);

export function Carroussel({ data }: ICarrouselProps): JSX.Element {
  return (
    <>
      <Flex alignItems="center" justifyContent="center" direction="column">
        <Heading
          textAlign="center"
          fontWeight="500"
          mb={['5', '14']}
          fontSize={['lg', '3xl', '4xl']}
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Heading>
      </Flex>

      <Flex
        w="100%"
        maxW="1240px"
        mx="auto"
        mb={['5', '10']}
        paddingX={['2']}
        h={['250px', '450px']}
      >
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
          }}
          scrollbar={{ draggable: true }}
          style={{
            width: '100%',
            flex: '1',
          }}
        >
          {data.map(continent => (
            <SwiperSlide key={continent.id}>
              <Link href={continent.link}>
                <Flex
                  w="100%"
                  h="100%"
                  alignItems="center"
                  justify="center"
                  direction="column"
                  bgImage={`url(${continent.image})`}
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  textAlign="center"
                >
                  <Heading
                    color="white"
                    fontSize={['3xl', '4xl', '4xl']}
                    cursor="pointer"
                  >
                    {continent.name}
                  </Heading>
                  <Heading
                    fontWeight="semibold"
                    color="white"
                    fontSize={['0.8rem', '1xl', '2xl']}
                    mt={['2', '4']}
                    cursor="pointer"
                  >
                    {continent.description}
                  </Heading>
                </Flex>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </>
  );
}
