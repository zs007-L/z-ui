import type { Ref, InjectionKey } from 'vue'

export type NameType = string | number

export interface CollapseProps {
  modelValue: NameType[]
  accordion?: boolean
}

export interface CollapseItemProps {
  name: NameType
  title?: string
  disabled?: boolean
}

export interface CollapseContext {
  activeNames: Ref<NameType[]>
  handleClickItem: (name: NameType) => void
}

export interface CollapseEmits {
  (event: 'update:modelValue', value: NameType[]): void
  (event: 'change', value: NameType[]): void
}

export const CollapseContextKey: InjectionKey<CollapseContext> = Symbol('CollapseContextKey')
