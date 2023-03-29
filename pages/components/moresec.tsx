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
  Heading,
} from '@chakra-ui/react';

const Logo = (props: any) => {
  return (
    <Image
        alt={'Logo'}
        boxSize='100px'
        objectFit='contain'
        src={
          'https://i.postimg.cc/TwtH0Wsh/275096059-2184373768367902-219761349894578467-n.jpg'
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
              © 2023 NSTV. All rights reserved.
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>NSTV 임원</ListHeader>
            <Link href={'#'}>회장 : 정우재</Link>
            <Link href={'#'}>부회장 : 조정연</Link>
            <Link href={'#'}>총무 : 오병민</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>홈페이지 제작</ListHeader>
            <Link href={'https://www.instagram.com/geonwoo_0910/'}>@23학번 가상현실학과 김건우</Link>
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
          {/* <Heading lineHeight='tall'>
            <Highlight
              query={['spotlight', 'emphasize', 'Accentuate']}
              styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
            >
                With the Highlight component, you can spotlight, emphasize and accentuate
                words.
            </Highlight>
        </Heading> */}
      </Container>
    </Box>
  );
}