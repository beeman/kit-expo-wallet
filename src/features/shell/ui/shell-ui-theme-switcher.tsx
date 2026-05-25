import { Description } from 'heroui-native/description'
import { Label } from 'heroui-native/label'
import { Radio } from 'heroui-native/radio'
import { RadioGroup } from 'heroui-native/radio-group'
import { View } from 'react-native'

import type { Theme } from '@/features/shell/data-access/use-theme'
import { setTheme, useTheme } from '@/features/shell/data-access/use-theme'

export function ShellUiThemeSwitcher() {
  const { activeTheme, themes } = useTheme()

  return (
    <RadioGroup value={activeTheme} onValueChange={(theme) => setTheme(theme as Theme)}>
      {themes.map((theme) => {
        const isSelected = activeTheme === theme.name
        const itemClassName = isSelected
          ? 'w-full flex-row items-center justify-between rounded-2xl border border-blue-500 bg-blue-50 px-4 py-3 dark:bg-blue-950'
          : 'w-full flex-row items-center justify-between rounded-2xl border border-neutral-200 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-black'
        const titleClassName = isSelected
          ? 'text-base font-semibold text-blue-700 dark:text-blue-300'
          : 'text-base font-semibold text-neutral-900 dark:text-white'

        return (
          <RadioGroup.Item className={itemClassName} key={theme.name} value={theme.name}>
            <View className="flex-1 gap-1">
              <Label className={titleClassName}>{theme.label}</Label>
              <Description>
                {theme.name === 'system' ? 'Use the device setting' : `${theme.label} appearance`}
              </Description>
            </View>
            <Radio />
          </RadioGroup.Item>
        )
      })}
    </RadioGroup>
  )
}
