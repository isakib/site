import React from 'react'

import { Box, Text, ResponsiveStack, Flex } from 'serverless-design-system'
import { HeroWrapperNew as HeroWrapper } from 'src/fragments'
import HeroTabs from '../HeroTabs'

const ExamplesHero = () => {
  return (
  <HeroWrapper
    background={['linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)', 'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',`linear-gradient(132deg,rgb(0,0,0) 70%,#70221f)`]}
    height={[422, 422, 491]}
  >
    <Box mb={[2, 2, 6]} pt={[0, 0, 4]}>
      <HeroTabs
       selected='examples-and-guides'
      />
    </Box>

    <ResponsiveStack
      mb={[2, 2, 4, 9]}
      color='white'
    >
      <Box width={[1]}>
        <Text.p
          fontSize={[8, 7, 8]}
          fontFamily='SoleilLt'
          lineHeight={[1.29, 1.29, 1.1]}
          letterSpacing={['0.5px', '0.5px', '-2px']}
          m={0}
          mt={[42,42,0,0]}
        >
          Examples
        </Text.p>        
      </Box>
      <Flex.verticallyCenter
          width={[1, 1, 1, 1]}
          px={[0, 0, 2]}
      >
        <Text.p
          fontSize={[2, 2, 2, 4]}
          fontFamily={['SoleilBk', 'SoleilBk', 'SoleilLt']}
          lineHeight={[1.63, 1.63, 1.33]}
          letterSpacing={0}
          mt={[22, 22, 1.5]}
          mb={0}
        >
          Search our full examples repository for project examples using all languages and FaaS providers.
        </Text.p>
      </Flex.verticallyCenter>
    </ResponsiveStack>
  </HeroWrapper>
  )
  }

export default ExamplesHero