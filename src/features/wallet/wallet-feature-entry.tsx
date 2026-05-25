import { Button } from 'heroui-native/button'
import { Card } from 'heroui-native/card'
import { Text, View } from 'react-native'
import { useMobileWallet } from '@wallet-ui/react-native-kit'

import { useAppCluster } from '@/features/cluster/data-access/cluster-provider'
import { ShellUiPage } from '@/features/shell/ui/shell-ui-page'

export function WalletFeatureEntry() {
  const { account, connect, disconnect } = useMobileWallet()
  const { cluster } = useAppCluster()

  return (
    <ShellUiPage centered>
      <View className="items-center gap-6">
        <View className="items-center gap-3">
          <Text className="text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">Wallet</Text>
          <Text className="max-w-sm text-center text-xl leading-relaxed text-neutral-700 dark:text-neutral-300">
            Build beautiful apps with <Text className="font-semibold text-blue-500">Expo + Uniwind + @solana/kit</Text>
          </Text>
        </View>

        <View className="items-center">
          {account ? (
            <View className="items-center gap-3">
              <Text className="text-neutral-600 dark:text-neutral-400" selectable>
                Connected: {account.address.toString().slice(0, 8)}...
              </Text>
              <Button variant="danger" onPress={disconnect}>
                Disconnect Wallet
              </Button>
            </View>
          ) : (
            <Button size="lg" onPress={connect}>
              Connect Wallet
            </Button>
          )}
        </View>

        <Card className="w-full max-w-sm gap-3 p-4">
          <Card.Body className="gap-3">
            <View className="flex-row items-center justify-between gap-3">
              <Card.Description className="text-sm font-semibold uppercase">Active cluster</Card.Description>
              <Card.Title className="text-base font-bold text-blue-600 dark:text-blue-300">{cluster.label}</Card.Title>
            </View>
            <View className="gap-1">
              <Card.Description className="text-sm font-semibold">Chain</Card.Description>
              <Text className="text-sm text-neutral-600 dark:text-neutral-300" selectable>
                {cluster.id}
              </Text>
            </View>
            <View className="gap-1">
              <Card.Description className="text-sm font-semibold">RPC</Card.Description>
              <Text className="text-sm leading-5 text-neutral-600 dark:text-neutral-300" selectable>
                {cluster.url}
              </Text>
            </View>
          </Card.Body>
        </Card>
      </View>
    </ShellUiPage>
  )
}
