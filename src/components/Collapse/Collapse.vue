<template>
  <div class="z-collapse">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { CollapseContextKey } from './types'
import { defineOptions, ref, provide, watch } from 'vue'
import type { NameType, CollapseProps, CollapseEmits } from './types'

defineOptions({
  name: 'ZCollapse'
})

const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()

const activeNames = ref<NameType[]>([])

const handleClickItem = (item: NameType) => {
  if (props.accordion) {
    activeNames.value = [activeNames.value[0] === item ? '' : item]
  } else {
    const index = activeNames.value.findIndex((name) => name === item)
    if (index > -1) {
      activeNames.value.splice(index, 1)
    } else {
      activeNames.value.push(item)
    }
  }
  emits('update:modelValue', activeNames.value)
  emits('change', activeNames.value)
}

watch(
  () => props.modelValue,
  () => {
    activeNames.value = props.modelValue
  }
)

provide(CollapseContextKey, {
  activeNames,
  handleClickItem
})
</script>

<style lang="scss" scoped></style>
