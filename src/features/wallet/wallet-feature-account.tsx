import { Account } from '@wallet-ui/react-native-kit'
import { Text, View } from 'react-native'
import { Card } from 'heroui-native/card'
import { Button } from 'heroui-native/button'

export function WalletFeatureAccount({ account, disconnect }: { account: Account; disconnect: () => Promise<void> }) {
  const label = account.label ?? 'Mobile wallet'

  return (
    <Card className="w-full gap-3 p-4">
      <Card.Body className="gap-4">
        <View className="gap-1">
          <Card.Description className="text-sm font-semibold uppercase">Connected wallet</Card.Description>
          <Card.Title className="text-xl font-bold">{label}</Card.Title>
          <Text className="text-sm leading-5 text-neutral-600 dark:text-neutral-300" selectable>
            {account.address.toString()}
          </Text>
        </View>
        <Button variant="danger" onPress={disconnect}>
          Disconnect Wallet
        </Button>
      </Card.Body>
    </Card>
  )
}
