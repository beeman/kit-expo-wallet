import { Text, View } from 'react-native'

import { ShellUiPage } from '@/features/shell/ui/shell-ui-page'
import { ShellUiPageHeader } from '@/features/shell/ui/shell-ui-page-header'

export function ToolsFeatureEntry() {
  return (
    <ShellUiPage>
      <ShellUiPageHeader
        description="Developer and wallet utilities stay grouped behind a dedicated Android tab."
        title="Tools"
      />

      <View className="gap-2 rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-950">
        <Text className="text-xl font-bold text-gray-900 dark:text-white">Transaction tools</Text>
        <Text className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
          Add builders, simulators, or signing utilities here while keeping wallet access one tab away.
        </Text>
      </View>

      <View className="gap-2 rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-950">
        <Text className="text-xl font-bold text-gray-900 dark:text-white">Network tools</Text>
        <Text className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
          Cluster status, address lookup, and developer helpers can live in this workspace.
        </Text>
      </View>
    </ShellUiPage>
  )
}
