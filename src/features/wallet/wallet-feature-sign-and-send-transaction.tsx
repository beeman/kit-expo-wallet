import { WalletUiActionCard } from '@/features/wallet/ui/wallet-ui-action-card'
import {
  useWalletSignAndSendTransaction,
  UseWalletSignAndSendTransactionProps,
} from './data-access/use-wallet-sign-and-send-transaction'

export function WalletFeatureSignAndSendTransaction(props: UseWalletSignAndSendTransactionProps) {
  const { isPending, mutateAsync } = useWalletSignAndSendTransaction(props)

  return (
    <WalletUiActionCard
      actionLabel="Sign and Send Transaction"
      defaultText="Hello Solana!"
      description="Create a memo transaction and submit it through the wallet."
      isLoading={isPending}
      onSubmit={async (text) => {
        const signature = await mutateAsync(text)

        return {
          description: `Signature: ${signature}`,
          status: 'success',
          title: 'Transaction sent',
        }
      }}
      title="Sign and Send Transaction"
    />
  )
}
