import { createSolanaDevnet, MobileWalletProvider } from '@wallet-ui/react-native-kit'
import { HeroUINativeProvider } from 'heroui-native/provider'
import { View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import type { AppIdentity } from '@wallet-ui/react-native-kit'
import type { ReactNode } from 'react'

import { ShellUiThemeStatusBar } from '@/features/shell/ui/shell-ui-theme-status-bar'

const cluster = createSolanaDevnet()
const identity: AppIdentity = { name: 'Kit Expo Uniwind' }

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HeroUINativeProvider config={{ devInfo: { stylingPrinciples: false } }}>
        <MobileWalletProvider cluster={cluster} identity={identity}>
          <View className="flex-1 bg-white dark:bg-black">
            {children}
            <ShellUiThemeStatusBar />
          </View>
        </MobileWalletProvider>
      </HeroUINativeProvider>
    </GestureHandlerRootView>
  )
}
