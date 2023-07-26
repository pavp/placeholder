import { COLOR } from 'commons/colors'
import { Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'

const Title = styled(Text)`
  color: ${COLOR.white};
  font-weight: bold;
  font-size: 16px;
`

const Container = styled(TouchableOpacity)`
  border-color: ${COLOR.blue};
  border-radius: 8px;
  border-width: 1px;
  padding: 16px;
`

const Body = styled(Text)`
  color: ${COLOR.lightGray};
  margin-top: 16px;
`

const ActionsContainer = styled(View)`
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  margin-top: 12px;
  padding-horizontal: 8px;
  align-self: flex-end;
`

const TrashContainer = styled(View)`
  margin-right: 16px;
`

const Content = styled(TouchableOpacity)`
  height: auto;
  margin-vertical: 8px;
  margin-horizontal: 16px;
  padding: 8px;
`

export { Title, Container, Body, ActionsContainer, Content, TrashContainer }
