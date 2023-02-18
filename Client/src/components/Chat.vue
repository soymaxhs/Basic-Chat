<template>
  <div class="card">
    <div class="card-body">
      <ul class="list-group">
        <Comment
          v-for="(message, index) in messages"
          :key="index"
          :isSelfMessage="message?.id == messenger?.id"
          :message="message"
        ></Comment>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Comment from "@/components/Comment.vue";
export default defineComponent({
  name: "ChatWindow",
  components: {
    Comment,
  },
  props: {
    messages: Object,
    messenger: Object,
  },
});
</script>

<style lang="scss"></style>
