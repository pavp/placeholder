import { COLOR } from 'commons/colors'
import { Text, View } from 'react-native'
import styled from 'styled-components'

const Name = styled(Text)`
  color: ${COLOR.white};
  font-weight: bold;
  font-size: 16px;
`

const Email = styled(Text)`
  color: ${COLOR.blue};
  font-weight: bold;
  font-size: 16px;
  margin-top: 16px;
`

const Container = styled(View)`
  border-color: ${COLOR.blue};
  border-radius: 8px;
  border-width: 0.2px;
  height: auto;
  margin-bottom: 32px;
  padding: 16px;
`

const Body = styled(Text)`
  color: ${COLOR.lightGray};
  margin-top: 8px;
`

export { Name, Container, Body, Email }
