import styled from 'styled-components'
import { SafeAreaView as SafeArea } from 'react-native-safe-area-context'
import { COLOR } from 'commons/colors'
import { View } from 'react-native'

const Container = styled(SafeArea)`
  background-color: ${COLOR.darkGray};
  flex: 1;
  width: 100%;
`

const RightButtonContainer = styled(View)`
  margin-right: 16px;
  flex-direction: row;
`

const DeleteAllContainer = styled(View)`
  margin-right: 12px;
`

export { Container, RightButtonContainer, DeleteAllContainer }
