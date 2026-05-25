import { useStore } from '@nanostores/react'
import type { SolanaCluster, SolanaClusterId } from '@wallet-ui/react-native-kit'
import type { PropsWithChildren } from 'react'
import { createContext, useContext, useMemo } from 'react'

import { ClusterStore } from '@/features/cluster/data-access/cluster-store'

export interface ClusterContextValue {
  cluster: SolanaCluster
  clusters: SolanaCluster[]
  setCluster(cluster: SolanaClusterId): void
}

export interface ClusterProviderProps {
  store: ClusterStore
}

const ClusterContext = createContext<ClusterContextValue | undefined>(undefined)

export function ClusterProvider({ children, store }: PropsWithChildren<ClusterProviderProps>) {
  const cluster = useStore(store.$cluster)

  const value = useMemo(
    () => ({
      cluster,
      clusters: store.clusters,
      setCluster: store.setCluster,
    }),
    [cluster, store.clusters, store.setCluster],
  )

  return <ClusterContext.Provider value={value}>{children}</ClusterContext.Provider>
}

export function useAppCluster() {
  const context = useContext(ClusterContext)
  if (!context) {
    throw new Error('useAppCluster must be used within AppClusterProvider')
  }
  return context
}
