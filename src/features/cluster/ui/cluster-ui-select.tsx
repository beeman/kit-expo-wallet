import type { SolanaClusterId } from '@wallet-ui/react-native-kit'
import { Select } from 'heroui-native/select'
import { View } from 'react-native'

import { useAppCluster } from '@/features/cluster/data-access/cluster-provider'

export function ClusterUiSelect({
  contentWidth = 'trigger',
  triggerClassName = 'w-full',
}: {
  contentWidth?: 'trigger' | number
  triggerClassName?: string
}) {
  const { cluster: activeCluster, clusters, setCluster } = useAppCluster()

  return (
    <Select
      onValueChange={(option) => {
        if (option) {
          setCluster(option.value as SolanaClusterId)
        }
      }}
      value={{ label: activeCluster.label, value: activeCluster.id }}
    >
      <Select.Trigger className={triggerClassName}>
        <Select.Value placeholder="Select cluster" />
      </Select.Trigger>
      <Select.Portal>
        <Select.Overlay />
        <Select.Content align="start" placement="bottom" presentation="popover" width={contentWidth}>
          <Select.ListLabel>Cluster</Select.ListLabel>
          {clusters.map((cluster) => (
            <Select.Item key={cluster.id} label={cluster.label} value={cluster.id}>
              <View className="flex-1 gap-1">
                <Select.ItemLabel />
                <Select.ItemDescription>{cluster.url}</Select.ItemDescription>
              </View>
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Portal>
    </Select>
  )
}
