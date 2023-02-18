<template>
  <li
    v-bind:class="{
      'list-group-item d-flex justify-content-between align-items-center': true,
      'bg-success': !isSelfMessage,
      'bg-info': isSelfMessage,
    }"
  >
    <p
      v-bind:class="{
        'mr-auto w-100 p-3': true,
        'text-right': isSelfMessage,
      }"
    >
      {{ message?.text }}
    </p>
    <span
      v-bind:class="{
        badge: true,
        'badge-success': !isSelfMessage,
        'badge-info': isSelfMessage,
      }"
      >{{ message?.user }}</span
    >
    <span class="badge badge-secondary">{{ message?.timestamp }}</span>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SingleComment",
  props: {
    message: Object,
    isSelfMessage: Boolean,
  },
});
</script>

<style lang="scss">
.bg-success {
  background-color: #28a74650 !important;
}
.bg-info {
  background-color: #17a3b850 !important;
}
</style>
