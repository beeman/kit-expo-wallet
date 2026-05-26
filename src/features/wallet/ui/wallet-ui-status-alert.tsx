import { Alert } from 'heroui-native'
import { WalletActionStatus } from './wallet-ui-action-card'

export function WalletUiStatusAlert({ description, status, title }: WalletActionStatus) {
  return (
    <Alert status={status}>
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>{title}</Alert.Title>
        <Alert.Description>{description}</Alert.Description>
      </Alert.Content>
    </Alert>
  )
}
