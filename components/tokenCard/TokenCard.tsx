import React from 'react';
import { Token } from 'rtk/slices/collections';
import { useRouter } from 'next/router';
import { IpfsGatewayConfig } from 'lib/util/ipfs';
import { AspectRatio, Box, Flex } from '@chakra-ui/react';
import { TokenMedia } from 'components/tokenMedia';
import tz from 'public/assets/tezos-sym.svg'

interface TokenCardProps extends Token {
  config: IpfsGatewayConfig;
}

export default function TokenCard(props: TokenCardProps) {
  const router = useRouter();
  return (
    <Flex
      position="relative"
      flexDir="column"
      ratio={1}
      w="100%"
      bg="white"
      border="1px solid"
      borderColor="#eee"
      borderRadius="0px"
      overflow="hidden"
      boxShadow="none"
      transition="all linear 50ms"
      _hover={{
        cursor: 'pointer',
        boxShadow: '0px 0px 10px #3339',
      }}
      onClick={() =>
        router.replace(`/collection/${props.address}/token/${props.id}`)
      }
    >
      <AspectRatio ratio={3 / 2}>
        <Box>
          <TokenMedia key={`${props.address}-${props.id}`} {...props} />
        </Box>
      </AspectRatio>
      <Flex
        width="100%"
        px={4}
        py={4}
        bg="white"
        borderTop="1px solid"
        borderColor="brand.lightBlue"
        flexDir="row"
        justifyContent="space-between"
      >
        <Flex display="block" fontSize="md" width="70%" alignItems="center" height="100%" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">{props.title}</Flex>
        <Flex fontSize="md" fontWeight="600" width="30%" justifyContent="flex-end" alignItems="center">
          {props.sale?.price.toFixed(2)}&nbsp;<img src={tz} alt="" width={10} height="auto" style={{ display: props.sale?.price ? 'inline-block' : 'none' }} />
        </Flex>
      </Flex>
    </Flex>
  );
}