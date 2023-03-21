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
import { FeatureProps } from 'framer-motion';
 import Link from 'next/link';
  import Morehead from './components/morehead';
  import Moresec from './components/moresec';
  import Morethree from './components/morethree';
  import Moreheader from './components/Moreheader';

  import Moremid from './components/moremid';
  
  
  
  export default function more() {
    return (
      <><Moreheader /><Morehead /><Moremid/><Morethree /><Moresec /></>
    );
  }