import { useMobileWallet } from '@wallet-ui/react-native-kit'
import { Button } from 'heroui-native/button'
import { ClusterUiSelect } from '@/features/cluster/ui/cluster-ui-select'
import { ShellUiPage } from '@/features/shell/ui/shell-ui-page'
import { WalletFeatureConnected } from '@/features/wallet/wallet-feature-connected'

export function WalletFeatureEntry() {
  const wallet = useMobileWallet()
  const { account, connect } = wallet

  return (
    <ShellUiPage>
      <ClusterUiSelect />
      {account ? (
        <WalletFeatureConnected account={account} wallet={wallet} />
      ) : (
        <Button size="lg" onPress={connect}>
          Connect Wallet
        </Button>
      )}
    </ShellUiPage>
  )
}
