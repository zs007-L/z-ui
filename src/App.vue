<template>
  <div>
    <Button type="primary" @click="onClick">测试按钮</Button>
    <a href="">11111111</a>
    <Button plain>Plain Button</Button>
    <Button round>Round Button</Button>
    <Button circle>VK</Button>
    <Button disabled>Disabled Button</Button><br /><br />
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br /><br />
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br /><br />
    <Button size="large">Large</Button>
    <Button size="small">Small</Button><br /><br />

    <Collapse v-model="openValue" accordion>
      <CollapseItem name="a">
        <template #title>标题</template>
        <div>内容</div>
      </CollapseItem>
      <CollapseItem name="b">
        <template #title>标题</template>
        <div>内容</div>
        <div>内容</div>
        <div>内容</div>
        <div>内容</div>
        <div>内容</div>
        <div>内容</div>

      </CollapseItem>
    </Collapse>
    {{ openValue }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from './components/Button/Button.vue';
import Collapse from './components/Collapse/Collapse.vue';
import CollapseItem from './components/Collapse/CollapseItem.vue';

const openValue = ref([])

const onClick = () => {
  console.log('click');
}
</script>

<style scoped></style>
