<template>
  <view class="index">
    <text>{{ msg }}</text>
    <text class="test-scss">{{value}}</text>
    <view class="box"></view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import './index.scss'

const msg = ref('Hello world')
const value = ref('step up 1111234')
console.log(msg)
</script>
