<template>
  <div class="card border-success fixed-bottom">
    <div class="card-body">
      <form @submit.prevent="() => {}">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            name="messenger-text"
            aria-describedby="helpId"
            placeholder="Your new messenger here:"
            v-model="newMessage"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-success"
              type="button"
              v-on:click="toSendMessage"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NewMessageForm",
  props: {
    sendMessage: { type: Function },
  },
  data: function () {
    return {
      newMessage: "Hi",
    };
  },
  methods: {
    toSendMessage() {
      this.sendMessage?.(this.newMessage);
      this.newMessage = "";
    },
  },
});
</script>
<style lang="scss"></style>
