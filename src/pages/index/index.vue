<template>
  <view class="index">
    <text>{{ msg }}</text>
    <text class="test-scss">{{value}}</text>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import './index.scss'

const msg = ref('Hello world')
const value = ref('step up 1111234')
</script>
