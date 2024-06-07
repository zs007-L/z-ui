<template>
    <div class="z-collapse-item" :class="{ 'is-disable': disabled }">
        <div class="z-collapse-item__header" :class="{
            'is-disabled': disabled,
            'is-active': isActive
        }" :id="`item-header-${name}`" @click="handleClick">
            <slot name="title">
                {{ title }}
            </slot>
            <Icon icon="angle-right" class="header-angle" />
        </div>
        <Transition name="slide" v-on="transitionEvents">
            <div class="z-collapse-item__wrapper" v-show="isActive">
                <div class="z-collapse-item__content" :id="`item-content-${name}`">
                    <slot />
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import Icon from '../Icon/Icon.vue';
import { defineOptions, inject, computed } from 'vue';
import { type CollapseItemProps, CollapseContextKey } from './types';

defineOptions({
    name: 'z-collapse-item',
});

const props = defineProps<CollapseItemProps>();

const collapseContext = inject(CollapseContextKey);

const isActive = computed(() => collapseContext?.activeNames.value.includes(props.name))

const handleClick = () => {
    if (props.disabled) return;
    collapseContext?.handleClickItem(props.name);
}

const transitionEvents: Record<string, (el: HTMLElement) => void> = {
    beforeEnter(el) {
        console.log(el)
        el.style.height = '0px'
        el.style.overflow = 'hidden'
    },
    enter(el) {
        console.log(el.scrollHeight)
        el.style.height = `${el.scrollHeight}px`
    },
    afterEnter(el) {
        el.style.height = ''
        el.style.overflow = ''
    },
    beforeLeave(el) {
        el.style.height = `${el.scrollHeight}px`
        el.style.overflow = 'hidden'
    },
    leave(el) {
        el.style.height = '0px'
    },
    afterLeave(el) {
        el.style.height = ''
        el.style.overflow = ''
    }
}
</script>

<style>
@import './style.css';
</style>