import { Account, SignInOutput, type SignInPayload, type SolanaClusterId } from '@wallet-ui/react-native-kit'
import { WalletUiActionCard } from '@/features/wallet/ui/wallet-ui-action-card'
import { getBase64Decoder } from '@solana/kit'
import { useWalletSignIn } from '@/features/wallet/data-access/use-wallet-sign-in'

export function WalletFeatureSignIn({
  account,
  cluster,
  signIn,
}: {
  account: Account
  cluster: SolanaClusterId
  signIn: (signInPayload: SignInPayload) => Promise<SignInOutput>
}) {
  const { isPending, mutateAsync } = useWalletSignIn({ account, cluster, signIn })

  return (
    <WalletUiActionCard
      actionLabel="Sign In"
      defaultText="We hope you enjoy your stay!"
      description="Create and sign a Solana Sign-In payload."
      isLoading={isPending}
      onSubmit={async (statement) => {
        const result = await mutateAsync(statement)

        return {
          description: `Signed in as ${result.account.address.toString()}. Signature: ${getBase64Decoder().decode(result.signature)}`,
          status: 'success',
          title: 'Signed in',
        }
      }}
      title="Sign In"
    />
  )
}
