import styled from 'styled-components'
import { SafeAreaView as SafeArea } from 'react-native-safe-area-context'
import { COLOR } from 'commons/colors'

const Container = styled(SafeArea)`
  background-color: ${COLOR.darkGray};
  flex: 1;
`

export { Container }
