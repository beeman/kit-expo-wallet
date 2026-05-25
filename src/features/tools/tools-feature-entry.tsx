import { Card } from 'heroui-native/card'

import { ShellUiPage } from '@/features/shell/ui/shell-ui-page'
import { ShellUiPageHeader } from '@/features/shell/ui/shell-ui-page-header'

export function ToolsFeatureEntry() {
  return (
    <ShellUiPage>
      <ShellUiPageHeader
        description="Developer and wallet utilities stay grouped behind a dedicated Android tab."
        title="Tools"
      />

      <Card className="gap-2 p-5">
        <Card.Title className="text-xl font-bold">Transaction tools</Card.Title>
        <Card.Description className="leading-relaxed">
          Add builders, simulators, or signing utilities here while keeping wallet access one tab away.
        </Card.Description>
      </Card>

      <Card className="gap-2 p-5">
        <Card.Title className="text-xl font-bold">Network tools</Card.Title>
        <Card.Description className="leading-relaxed">
          Cluster status, address lookup, and developer helpers can live in this workspace.
        </Card.Description>
      </Card>
    </ShellUiPage>
  )
}
