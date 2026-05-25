import { Text, View } from 'react-native'

export function ShellUiPageHeader({ description, title }: { description: string; title: string }) {
  return (
    <View className="gap-2">
      <Text className="text-3xl font-semibold text-neutral-900 dark:text-white">{title}</Text>
      <Text className="text-base leading-6 text-neutral-600 dark:text-neutral-300">{description}</Text>
    </View>
  )
}
