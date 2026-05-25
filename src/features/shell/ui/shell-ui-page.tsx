import { ScrollView, View } from 'react-native'
import type { PropsWithChildren } from 'react'

export function ShellUiPage({ centered, children }: PropsWithChildren<{ centered?: boolean }>) {
  const contentClassName = centered ? 'flex-grow justify-center gap-6 px-6 py-8' : 'gap-6 px-6 py-8'

  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-black"
      contentContainerClassName={contentClassName}
      contentInsetAdjustmentBehavior="automatic"
    >
      <View className="gap-6">{children}</View>
    </ScrollView>
  )
}
