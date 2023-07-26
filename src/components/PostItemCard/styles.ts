import { COLOR } from 'commons/colors'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

const Title = styled(Text)`
  color: ${COLOR.white};
  font-weight: bold;
  font-size: 16px;
`

const Container = styled(TouchableOpacity)`
  border-color: ${COLOR.blue};
  border-radius: 8px;
  border-width: 2px;
  height: auto;
  margin-vertical: 16px;
  margin-horizontal: 16px;
  padding: 16px;
`

const Body = styled(Text)`
  color: ${COLOR.lightGray};
  margin-top: 16px;
`

export { Title, Container, Body }
