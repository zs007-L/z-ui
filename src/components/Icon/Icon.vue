<template>
  <i class="z-icon" v-bind="$attrs" :class="{ [`z-icon--${type}`]: type }" :style="customStyle">
    <FontAwesomeIcon v-bind="filterProps"></FontAwesomeIcon>
  </i>
</template>

<script setup lang="ts">
import { omit } from 'lodash-es'
import type { IconProps } from './types'
import { defineOptions, computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineOptions({
  name: 'ZIcon',
  inheritAttrs: false
})

const props = defineProps<IconProps>()

const filterProps = computed(() => omit(props, ['type', 'color']))

const customStyle = computed(() => (props.color ? { color: props.color } : {}))
</script>

<style>
@import './style.css';
</style>
