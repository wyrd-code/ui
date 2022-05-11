export interface NodeContext {
  isExpanded(): boolean
  toggleExpand(): void
}

type BlockTreeKey = string | number

type LeafValueGetter<T> = (leaf: any) => T

export interface BlockTreeProps {
  label: string | LeafValueGetter<string>
  expand: string
  children: string
  key?: BlockTreeKey | LeafValueGetter<BlockTreeKey>
}
