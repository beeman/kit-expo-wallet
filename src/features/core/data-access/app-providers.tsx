import { createSolanaDevnet, MobileWalletProvider } from '@wallet-ui/react-native-kit'
import { View } from 'react-native'
import type { AppIdentity } from '@wallet-ui/react-native-kit'
import type { ReactNode } from 'react'

import { ShellUiThemeStatusBar } from '@/features/shell/ui/shell-ui-theme-status-bar'

const cluster = createSolanaDevnet()
const identity: AppIdentity = { name: 'Kit Expo Uniwind' }

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <MobileWalletProvider cluster={cluster} identity={identity}>
      <View className="flex-1 bg-white dark:bg-black">
        {children}
        <ShellUiThemeStatusBar />
      </View>
    </MobileWalletProvider>
  )
}
