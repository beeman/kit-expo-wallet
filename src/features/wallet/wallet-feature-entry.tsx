import { Button } from 'heroui-native/button'
import { Text, View } from 'react-native'
import { useMobileWallet } from '@wallet-ui/react-native-kit'

import { ShellUiPage } from '@/features/shell/ui/shell-ui-page'

export function WalletFeatureEntry() {
  const { account, connect, disconnect } = useMobileWallet()

  return (
    <ShellUiPage centered>
      <View className="items-center gap-6">
        <View className="items-center gap-3">
          <Text className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">Wallet</Text>
          <Text className="max-w-sm text-center text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            Build beautiful apps with <Text className="font-semibold text-blue-500">Expo + Uniwind + @solana/kit</Text>
          </Text>
        </View>

        <View className="items-center">
          {account ? (
            <View className="items-center gap-3">
              <Text className="text-gray-600 dark:text-gray-400" selectable>
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

        <Text className="max-w-sm text-center text-base text-gray-600 dark:text-gray-300">
          The route file stays thin while wallet behavior lives in the wallet feature.
        </Text>
      </View>
    </ShellUiPage>
  )
}
