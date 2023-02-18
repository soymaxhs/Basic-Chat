<template>
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
              v-model="userName"
            />
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            v-on:click="() => setUser?.(userName)"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "UserModal",
  props: {
    setUser: { type: Function },
    showModal: Boolean,
  },
  data: function () {
    return {
      userName: "Dummy",
    };
  },
});
</script>

<style lang="scss">
.modal {
  display: block;
}
</style>
