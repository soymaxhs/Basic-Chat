<template>
  <main role="main" class="container">
    <div class="card">
      <div class="card-body">
        <ul class="list-group">
          <li
            v-for="(mess, i) in messages"
            :key="i"
            v-bind:class="{
              'list-group-item d-flex justify-content-between align-items-center': true,
              'bg-success': mess.id !== messenger.id,
              'bg-info': mess.id === messenger.id,
            }"
          >
            <p
              v-bind:class="{
                'mr-auto w-100 p-3': true,
                'text-right': mess.id === messenger.id,
              }"
            >
              {{ mess.text }}
            </p>
            <span
              v-bind:class="{
                badge: true,
                'badge-success': mess.id !== messenger.id,
                'badge-info': mess.id === messenger.id,
              }"
              >{{ mess.user }}</span
            >
            <span class="badge badge-secondary">{{ mess.timestamp }}</span>
          </li>
        </ul>
      </div>
    </div>
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
              v-model="messenger.text"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-success"
                type="button"
                v-on:click="clickButton"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- Modal -->
    <div
      v-show="showModal"
      class="modal show"
      id="modalUser"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Set user name</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <!-- <span aria-hidden="true">&times;</span> -->
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="() => {}">
              <input
                type="text"
                class="form-control"
                name="messenger-user"
                aria-describedby="helpId"
                placeholder="Your new messenger here:"
                v-model="messenger.user"
              />
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" v-on:click="setUser">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      showModal: true as boolean,
      messenger: {
        text: "Hi" as string,
        user: "Dummy" as string,
        id: Date.now() as number,
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
    setUser: function () {
      this.showModal = false;
      this.messenger.id = Date.now();
    },
    clickButton: function () {
      const nowDate = new Date();
      this.messenger.timestamp =
        nowDate.toLocaleDateString() + nowDate.toLocaleTimeString();
      (window as any).socket.emit("chat", this.messenger);
      this.messenger.text = "";
    },
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
.modal {
  display: block;
}
</style>
