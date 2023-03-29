import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoCameraOutline,
    IoDesktopOutline,
    IoCreateOutline,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function Morehead() {
    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
            fontFamily={"gmarket-Medium"}
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              NSTV에 대하여
            </Text>
            <Heading fontFamily={"vitro-core"}>남서울대학교 최고의<br></br>영상제작 동아리 NSTV</Heading>
            <Text fontFamily={"score"} color={'gray.500'} fontSize={'lg'}>
            궁금합니다! NSTV는 무엇을 하는 곳 인가요?<br></br>남서울대의 유일무이한 영상제작 동아리 NSTV!
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={IoCameraOutline} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'최고의 촬영장비'}
              />
              <Feature
                icon={<Icon as={IoDesktopOutline} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'최고성능의 편집컴퓨터'}
              />
              <Feature
                icon={
                  <Icon as={IoCreateOutline} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'멈추지 않는 아이디어'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://i.postimg.cc/NFqJxwxR/1-nstv-1.gif'
              }
              objectFit={'contain'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  };