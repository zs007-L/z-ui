<template>
    <button class="z-button" :class="{
        [`z-button--${type}`]: type,
        [`z-button--${size}`]: size,
        'is-disabled': disabled,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
    }" :disabled="disabled" :autofocus="autofocus" :type="nativeType">
        <slot />
    </button>
</template>

<script lang="ts" setup>
import { defineOptions } from "vue";
import type { ButtonProps } from './types';

defineOptions({
    name: 'ZButton'
});
withDefaults(defineProps<ButtonProps>(), {
    nativeType: 'button'
});
</script>