import { atom, computed } from 'nanostores'
import type { SolanaCluster, SolanaClusterId } from '@wallet-ui/react-native-kit'

import type { SyncCache } from '@/features/cluster/data-access/sync-cache'

export interface ClusterStoreContext {
  cache: SyncCache<SolanaClusterId>
  clusters: SolanaCluster[]
  defaultCluster: SolanaCluster
}

export function createClusterStore(context: ClusterStoreContext) {
  const { cache, clusters, defaultCluster } = context
  const findCluster = (clusterId: SolanaClusterId | string | undefined) =>
    clusters.find((cluster) => cluster.id === clusterId)
  const $clusterId = atom(findCluster(cache.get())?.id ?? defaultCluster.id)
  const $cluster = computed($clusterId, (clusterId) => findCluster(clusterId) ?? defaultCluster)

  function setCluster(clusterId: SolanaClusterId) {
    if (!findCluster(clusterId)) {
      throw new Error(`Cluster ${clusterId} not found`)
    }
    cache.set(clusterId)
    $clusterId.set(clusterId)
  }

  return {
    $cluster,
    $clusterId,
    clusters,
    setCluster,
  }
}

export type ClusterStore = ReturnType<typeof createClusterStore>
