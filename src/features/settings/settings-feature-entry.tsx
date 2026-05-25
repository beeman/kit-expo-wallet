import { Text, View } from 'react-native'

import { ShellUiPage } from '@/features/shell/ui/shell-ui-page'
import { ShellUiPageHeader } from '@/features/shell/ui/shell-ui-page-header'
import { ShellUiThemeSwitcher } from '@/features/shell/ui/shell-ui-theme-switcher'

export function SettingsFeatureEntry() {
  return (
    <ShellUiPage>
      <ShellUiPageHeader
        description="Manage wallet preferences and app appearance from the shared shell."
        title="Settings"
      />

      <View className="gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-950">
        <View className="gap-1">
          <Text className="text-xl font-bold text-gray-900 dark:text-white">Appearance</Text>
          <Text className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
            Switch the app theme without leaving the Android tab shell.
          </Text>
        </View>
        <ShellUiThemeSwitcher />
      </View>

      <View className="gap-2 rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-950">
        <Text className="text-xl font-bold text-gray-900 dark:text-white">Wallet settings</Text>
        <Text className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
          Account preferences, security controls, and app identity settings can be added here.
        </Text>
      </View>
    </ShellUiPage>
  )
}
