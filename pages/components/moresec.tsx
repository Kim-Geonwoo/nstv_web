import { ReactNode } from 'react';

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';

const Logo = (props: any) => {
  return (
    <Image
        alt={'Logo'}
        boxSize='100px'
        objectFit='contain'
        src={
          'https://i.ibb.co/9gMVPxJ/image.png'
        }
      />
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Moresec() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>
              © 2022 CMPROS. All rights reserved.
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>촬영장비들</ListHeader>
            <Link href={'#'}>CANON 90d</Link>
            <Link href={'#'}>SONY a6600</Link>
            <Link href={'#'}>SONY z190</Link>
            <Link href={'#'}>SONY z90</Link>
            <Link href={'#'}>DJI mavic mini 2</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>음향, 조명, 짐벌</ListHeader>
            <Link href={'#'}>BOYA BY-WM8 무선마이크</Link>
            <Link href={'#'}>BOYA BY-BM3031 샷건마이크</Link>
            <Link href={'#'}>시네로이드 CFL800V 조명</Link>
            <Link href={'#'}>DJI RS2 짐벌</Link>
            <Link href={'#'}>DJI RSC2 짐벌</Link>
          </Stack>
          {/* <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <Link href={'#'}>Overview</Link>
            <Link href={'#'}>Features</Link>
            <Link href={'#'}>Tutorials</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Releases</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Press</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact</Link>
            <Link href={'#'}>Partners</Link>
          </Stack> */}
        </SimpleGrid>
      </Container>
    </Box>
  );
}