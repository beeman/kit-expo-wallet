import { useMutation } from '@tanstack/react-query'
import { executeWalletSignMessage } from '@/features/wallet/util/execute-wallet-sign-message'
import { WalletUiActionCard } from '@/features/wallet/ui/wallet-ui-action-card'
import { useMobileWallet } from '@wallet-ui/react-native-kit'

export function WalletFeatureSignMessage({
  signMessages,
}: {
  signMessages: ReturnType<typeof useMobileWallet>['signMessages']
}) {
  const { isPending, mutateAsync } = useMutation({
    mutationFn: (text: string) => executeWalletSignMessage({ text, signMessages }),
  })

  return (
    <WalletUiActionCard
      actionLabel="Sign Message"
      defaultText="Hello Solana!"
      description="Sign a message payload with the connected account."
      isLoading={isPending}
      onSubmit={async (text) => {
        const signedPayload = await mutateAsync(text)

        return {
          description: `Signed payload: ${signedPayload}`,
          status: 'success',
          title: 'Message signed',
        }
      }}
      title="Sign Message"
    />
  )
}
