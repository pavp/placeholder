import styled from 'styled-components'
import { Text, View } from 'react-native'
import { SafeAreaView as SafeArea } from 'react-native-safe-area-context'
import { COLOR } from 'commons/colors'

const RightButtonContainer = styled(View)`
  margin-right: 16px;
`

const Container = styled(SafeArea)`
  background-color: ${COLOR.darkGray};
  flex: 1;
  padding-horizontal: 16px;
  padding-top: 16px;
`

const Title = styled(Text)`
  color: ${COLOR.white};
  font-weight: bold;
  font-size: 16px;
  margin-top: 16px;
`

const Body = styled(Text)`
  color: ${COLOR.lightGray};
  margin-top: 16px;
`

const UserContainer = styled(View)`
  height: auto;
`

const Name = styled(Text)`
  color: ${COLOR.white};
  font-weight: bold;
`
const Username = styled(Text)`
  color: ${COLOR.white};
`

const Separator = styled(Text)`
  height: 0.5px;
  width: 100%;
  background-color: ${COLOR.blue};
  margin-top: 32px;
  align-self: center;
`

const CommentContainer = styled(View)`
  margin-top: 32px;
`

const CommentTitle = styled(Text)`
  color: ${COLOR.lightGray};
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 16px;
`

export {
  RightButtonContainer,
  Container,
  Title,
  Body,
  UserContainer,
  Name,
  Username,
  Separator,
  CommentContainer,
  CommentTitle,
}
