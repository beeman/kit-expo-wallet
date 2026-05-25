import { Pressable, Text, View } from 'react-native'

import { setTheme, useTheme } from '@/features/shell/data-access/use-theme'

export function ShellUiThemeSwitcher() {
  const { activeTheme, themes } = useTheme()

  return (
    <View className="gap-3">
      {themes.map((theme) => {
        const isSelected = activeTheme === theme.name
        const itemClassName = isSelected
          ? 'w-full flex-row items-center justify-between rounded-2xl border border-blue-500 bg-blue-50 px-4 py-3 dark:bg-blue-950'
          : 'w-full flex-row items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-3 dark:border-gray-800 dark:bg-black'
        const titleClassName = isSelected
          ? 'text-base font-semibold text-blue-700 dark:text-blue-300'
          : 'text-base font-semibold text-gray-900 dark:text-white'

        return (
          <Pressable
            accessibilityRole="radio"
            accessibilityState={{ checked: isSelected }}
            className={itemClassName}
            key={theme.name}
            onPress={() => setTheme(theme.name)}
          >
            <View className="flex-1 gap-1">
              <Text className={titleClassName}>{theme.label}</Text>
              <Text className="text-sm text-gray-600 dark:text-gray-300">
                {theme.name === 'system' ? 'Use the device setting' : `${theme.label} appearance`}
              </Text>
            </View>
            <Text className="text-sm font-semibold text-blue-600 dark:text-blue-300">{isSelected ? 'On' : ''}</Text>
          </Pressable>
        )
      })}
    </View>
  )
}
