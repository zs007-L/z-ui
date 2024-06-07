<template>
    <button ref="buttonRef" class="z-button" :class="{
        [`z-button--${type}`]: type,
        [`z-button--${size}`]: size,
        'is-disabled': disabled,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-loading': loading
    }" :disabled="disabled || loading" :autofocus="autofocus" :type="nativeType">
        <Icon icon="spinner" spin v-if="loading" />
        <Icon :icon="icon" v-if="icon" />
        <span>
            <slot />
        </span>
    </button>
</template>

<script lang="ts" setup>
import Icon from "../Icon/Icon.vue";
import { defineOptions, ref } from "vue";
import type { ButtonProps } from './types';

defineOptions({
    name: 'ZButton'
});

withDefaults(defineProps<ButtonProps>(), {
    nativeType: 'button'
});

const buttonRef = ref<HTMLButtonElement>()

defineExpose({ ref: buttonRef })
</script>

<style>
@import './style.css';
</style>