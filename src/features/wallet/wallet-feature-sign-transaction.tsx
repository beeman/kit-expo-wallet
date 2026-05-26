import { Account, useMobileWallet } from '@wallet-ui/react-native-kit'
import type { SolanaClient } from '@/features/cluster/data-access/create-solana-client'
import { useMutation } from '@tanstack/react-query'
import { executeWalletSignTransaction } from '@/features/wallet/util/execute-wallet-sign-transaction'
import { WalletUiActionCard } from '@/features/wallet/ui/wallet-ui-action-card'

export function WalletFeatureSignTransaction({
  account,
  client,
  signTransactions,
}: {
  account: Account
  client: SolanaClient
  signTransactions: ReturnType<typeof useMobileWallet>['signTransactions']
}) {
  const { isPending, mutateAsync } = useMutation({
    mutationFn: (text: string) => executeWalletSignTransaction({ account, client, text, signTransactions }),
  })

  return (
    <WalletUiActionCard
      actionLabel="Sign Transaction"
      defaultText="Hello Solana!"
      description="Create a memo transaction and request a wallet signature."
      isLoading={isPending}
      onSubmit={async (text) => {
        const signature = await mutateAsync(text)

        return {
          description: `Signature: ${signature}`,
          status: 'success',
          title: 'Transaction signed',
        }
      }}
      title="Sign Transaction"
    />
  )
}
