import type { SolanaCluster } from '@wallet-ui/react-native-kit'
import { createMMKV } from 'react-native-mmkv'
import { ClusterStore, createClusterStore } from '@/features/cluster/data-access/cluster-store'
import { createMmkvCache } from '@/features/cluster/data-access/mmkv-cache'

export const APP_CLUSTER_STORAGE_KEY = 'wallet-ui:cluster'
export const APP_STORAGE_ID = 'kit-expo-wallet'

const storage = createMMKV({ id: APP_STORAGE_ID })

export interface ClusterProviderConfig {
  store: ClusterStore
}

export function createClusterProps({ clusters }: { clusters: SolanaCluster[] }): ClusterProviderConfig {
  const store = createClusterStore({
    cache: createMmkvCache({ storage, storageKey: APP_CLUSTER_STORAGE_KEY }),
    clusters,
    defaultCluster: clusters[0],
  })
  return { store }
}
