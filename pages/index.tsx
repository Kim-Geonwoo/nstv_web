import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from "next/link"
export default function SplitScreen() {
  return (
    <Stack  minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex  p={8} flex={1} align={'center'} justify={'center'}>
        <Stack  spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontFamily={"vitro-core"} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
          <meta name="naver-site-verification" content="666e329eae1feaa150cc3430359630b0cec4c56a" />
            <Text
            
              as={'span'}
              position={'relative'}
              _after={{
                
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              NSTV
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              남서울대학교 동아리
            </Text>{' '}
          </Heading>
          <Text fontFamily={"gmarket-medium"} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            남서울대학교의 특별한<br></br> 미디어동아리
            NSTV 비공식 홈페이지 입니다.<br></br>
            ("2023년 04월" 기준으로 작성된 웹페이지 입니다.)
          </Text>
          <Stack fontFamily={"gmarket-medium"} direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Link href="#"> 
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              NSTV Library (준비중)
            </Button>
            </Link>
            <Link href="./more">
            <Button rounded={'full'}>더 알아보기</Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://i.postimg.cc/Rh9V7yjv/131899239-889838908425555-1644863448226678393-n.jpg'
          }
        />
      </Flex>
    </Stack>
  );
}