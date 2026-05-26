import { ReactNode, useState } from 'react'
import { View } from 'react-native'
import { WalletUiStatusAlert } from './wallet-ui-status-alert'
import { formatError } from '../util/format-error'
import { Card } from 'heroui-native/card'
import { Input } from 'heroui-native/input'
import { Button } from 'heroui-native/button'

export type WalletActionStatus = {
  description: string
  status: 'danger' | 'success'
  title: string
}

export function WalletUiActionCard({
  actionLabel,
  defaultText,
  description,
  isLoading,
  onSubmit,
  renderExtra,
  title,
}: {
  actionLabel: string
  defaultText: string
  description: string
  isLoading: boolean
  onSubmit(text: string): Promise<WalletActionStatus>
  renderExtra?: (text: string) => ReactNode
  title: string
}) {
  const [status, setStatus] = useState<WalletActionStatus | null>(null)
  const [text, setText] = useState(defaultText)
  const submitDisabled = !text.trim() || isLoading

  return (
    <Card className="w-full gap-3 p-4">
      <Card.Body className="gap-4">
        <View className="gap-1">
          <Card.Title className="text-xl font-bold">{title}</Card.Title>
          <Card.Description className="leading-relaxed">{description}</Card.Description>
        </View>
        {renderExtra?.(text)}
        <Input autoCapitalize="none" editable={!isLoading} onChangeText={setText} placeholder="Text" value={text} />
        {status ? <WalletUiStatusAlert {...status} /> : null}
        <Button
          isDisabled={submitDisabled}
          variant="outline"
          onPress={async () => {
            const value = text.trim()
            if (!value || isLoading) {
              return
            }

            try {
              setStatus(null)
              setStatus(await onSubmit(value))
            } catch (error) {
              setStatus({
                description: formatError(error),
                status: 'danger',
                title: `${title} failed`,
              })
            }
          }}
        >
          {isLoading ? 'Working...' : actionLabel}
        </Button>
      </Card.Body>
    </Card>
  )
}
