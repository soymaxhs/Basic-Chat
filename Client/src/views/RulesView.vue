<template>
  <main role="main" class="container">
    <div class="card border-info">
      <div class="card-body">
        <h5 class="card-title">Rules of this challenge</h5>
        <p>TAKE HOME !! Profil: Fullstack Developer</p>
        <p>
          💻💻The Chat Room 💻💻 Sellia is asking you to build a chat room with
          incoming and outgoing chat messages.
        </p>
        <p>Requirements:</p>
        <ul>
          <li>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" checked />
              <label class="form-check-label" for="flexCheckChecked">
                Each tab will serve as a chat room, the user should provide a
                username and then it can start chatting with the other connected
                users (use socket.io or GraphQL subscriptions
              </label>
            </div>
          </li>
          <li>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" checked />
              <label class="form-check-label" for="flexCheckChecked">
                The messages list should display them in the correct order with
                the formatted timestamp the message was sent and their
                respective author.
              </label>
            </div>
          </li>
          <li>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" checked />
              <label class="form-check-label" for="flexCheckChecked">
                Send text only (with simple validation).
              </label>
            </div>
          </li>
          <li>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" checked />
              <label class="form-check-label" for="flexCheckChecked">
                Show a different style for incoming and outgoing messages
                (position, color, etc.).
              </label>
            </div>
          </li>
          <li>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label" for="flexCheckChecked">
                Keep chat history in a database (MongoDB is highly recommended).
              </label>
            </div>
          </li>
          <li>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label" for="flexCheckChecked">
                Pull and show old messages using an API (REST or GraphQL).
              </label>
            </div>
          </li>
        </ul>
        <p>Optional:</p>
        <ul>
          <li>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label" for="flexCheckChecked">
                Send/receive images or files in chat.
              </label>
            </div>
          </li>
          <li>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label" for="flexCheckChecked">
                Add a method for searching through chat history.
              </label>
            </div>
          </li>
        </ul>
        <p>What we need from you:</p>
        <ul>
          <li>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                checked
                disabled
              />
              <label class="form-check-label" for="flexCheckChecked">
                Build it with VueJS/Vuex
              </label>
            </div>
          </li>
          <li>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                checked
                disabled
              />
              <label class="form-check-label" for="flexCheckChecked">
                Use NodeJS as backend
              </label>
            </div>
          </li>
          <li>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                checked
                disabled
              />
              <label class="form-check-label" for="flexCheckChecked">
                Use a CSS preprocessor (SASS recommended)
              </label>
            </div>
          </li>
          <li>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                checked
                disabled
              />
              <label class="form-check-label" for="flexCheckChecked">
                Feel free to use any visual theme you like and feel comfortable
                with (Bootstrap, Material Design, Foundation, etc.)
              </label>
            </div>
          </li>
          <li>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                checked
                disabled
              />
              <label class="form-check-label" for="flexCheckChecked">
                Use any tools/libraries you require (webpack, gulp, etc.)
              </label>
            </div>
          </li>
          <li>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                checked
                disabled
              />
              <label class="form-check-label" for="flexCheckChecked">
                Share a repository with us (github or bitbucket are okay)
              </label>
            </div>
          </li>
          <li>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                checked
                disabled
              />
              <label class="form-check-label" for="flexCheckChecked">
                The repository should provide instructions on how to run it
                (README.md)
              </label>
            </div>
          </li>
        </ul>
        <small id="helpId" class="form-text text-muted text-right"
          >Good luck and enjoy!</small
        >
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RulesView",
  components: {},
});
</script>
