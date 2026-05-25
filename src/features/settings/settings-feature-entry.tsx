import { Card } from 'heroui-native/card'

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

      <Card className="gap-4 p-5">
        <Card.Body className="gap-1">
          <Card.Title className="text-xl font-bold">Appearance</Card.Title>
          <Card.Description className="leading-relaxed">
            Switch the app theme without leaving the Android tab shell.
          </Card.Description>
        </Card.Body>
        <ShellUiThemeSwitcher />
      </Card>

      <Card className="gap-2 p-5">
        <Card.Title className="text-xl font-bold">Wallet settings</Card.Title>
        <Card.Description className="leading-relaxed">
          Account preferences, security controls, and app identity settings can be added here.
        </Card.Description>
      </Card>
    </ShellUiPage>
  )
}
