import { Account, useMobileWallet } from '@wallet-ui/react-native-kit'
import { useAppCluster } from '@/features/cluster/data-access/cluster-provider'
import { View } from 'react-native'
import { WalletFeatureAccount } from '@/features/wallet/wallet-feature-account'
import { WalletFeatureBalance } from '@/features/wallet/wallet-feature-balance'
import { WalletFeatureSignAndSendTransaction } from '@/features/wallet/wallet-feature-sign-and-send-transaction'
import { WalletFeatureSignIn } from '@/features/wallet/wallet-feature-sign-in'
import { WalletFeatureSignMessage } from '@/features/wallet/wallet-feature-sign-message'
import { WalletFeatureSignTransaction } from '@/features/wallet/wallet-feature-sign-transaction'

export function WalletFeatureConnected({
  account,
  wallet,
}: {
  account: Account
  wallet: ReturnType<typeof useMobileWallet>
}) {
  const { client, cluster } = useAppCluster()

  return (
    <View className="gap-6">
      <WalletFeatureAccount account={account} disconnect={wallet.disconnect} />
      <WalletFeatureBalance account={account} />
      <WalletFeatureSignAndSendTransaction
        account={account}
        client={client}
        getTransactionSigner={wallet.getTransactionSigner}
      />
      <WalletFeatureSignIn account={account} cluster={cluster.id} signIn={wallet.signIn} />
      <WalletFeatureSignMessage signMessages={wallet.signMessages} />
      <WalletFeatureSignTransaction account={account} client={client} signTransactions={wallet.signTransactions} />
    </View>
  )
}
