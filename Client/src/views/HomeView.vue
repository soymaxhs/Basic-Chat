<template>
  <main role="main" class="container">
    <Chat :messenger="messenger" :messages="messages"></Chat>
    <NewMessageForm :sendMessage="sendMessage"></NewMessageForm>
    <Modal :showModal="showModal" :setUser="setUser"></Modal>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "@/components/Modal.vue";
import Chat from "@/components/Chat.vue";
import NewMessageForm from "@/components/NewMessageForm.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Modal,
    Chat,
    NewMessageForm,
  },
  data() {
    return {
      showModal: true as boolean,
      messenger: {
        text: "" as string,
        user: "" as string,
        id: 0 as number,
        timestamp: "" as string,
      },
      messages: [] as object[],
    };
  },
  mounted() {
    (window as any).socket.on("chat", (m: object) => {
      this.messages.push(m);
    });
  },
  methods: {
    setUser: function (newUserName: string) {
      this.messenger.user = newUserName;
      this.showModal = false;
      this.messenger.id = Date.now();
    },
    sendMessage: function (newMessage: string) {
      this.messenger.text = newMessage;
      const nowDate = new Date();
      this.messenger.timestamp =
        nowDate.toLocaleDateString() + nowDate.toLocaleTimeString();
      (window as any).socket.emit("chat", this.messenger);
      this.messenger.text = "";
    },
  },
});
</script>
