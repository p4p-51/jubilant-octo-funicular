<template>
  <loading v-model:active="isLoading.loading" />
  <div class="content-container">
    <div class="input-container">
      <h2>My self introduction</h2>
      <textarea v-model="body" />
    </div>
    <div class="checklist-container">
      <h2>Self checklist</h2>
      <p>Have you done the following?</p>
      <div v-for="attribute in staticAttributes" v-bind:key="attribute">
        <label class="container">
          {{ attribute }}
          <input
            type="checkbox"
            :id="attribute"
            :value="attribute"
            v-model="attributes"
          />
          <span class="checkmark"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.content-container {
  display: flex;

  align-items: stretch;
  margin: 20px 50px;
  margin-bottom: 50px;

  flex: 1;

  column-gap: 50px;
  justify-content: space-between;

  > div {
    > h2 {
      font-size: 20px;
      font-weight: 400;
    }

    > p {
      font-size: 12px;
      color: $c-grey-dark;

      margin-top: -10px;
      margin-bottom: 25px;
    }
  }

  .input-container {
    flex: 1;

    display: flex;
    flex-direction: column;

    textarea {
      flex: 1;

      background: $c-bg-grey;

      border: none;
      box-sizing: border-box;

      overflow: none;

      padding: 10px 15px;

      &:focus {
        outline: solid 2px $c-primary;
      }
    }
  }

  .checklist-container {
    /* The container */
    .container {
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 14px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    /* Hide the browser's default checkbox */
    .container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 20px;
      width: 20px;
      border: solid 1px $c-grey-light;
    }

    /* On mouse-over, add a grey background color */
    .container:hover input ~ .checkmark {
      background-color: rgba($c-primary, 0.3);
    }

    /* When the checkbox is checked, add a blue background */
    .container input:checked ~ .checkmark {
      background-color: $c-primary;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    /* Show the checkmark when checked */
    .container input:checked ~ .checkmark:after {
      display: block;
    }

    /* Style the checkmark/indicator */
    .container .checkmark:after {
      left: 6px;
      top: 3px;
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
}
</style>

<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from "vue";
import { getSelfInto } from "@/apis/api";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

const body = ref<string>("");
const attributes = ref([]);
const staticAttributes = [
  "name",
  "education",
  "experience",
  "past",
  "present",
  "future",
  "goals",
  "hobbies",
];

const isLoading = reactive({ loading: true });

onMounted(async () => {
  const [error, intro] = await getSelfInto();
  if (error) {
    alert("cannot get self intro");
    body.value = "";
    attributes.value = [];
  } else {
    body.value = intro["body"];
    attributes.value = intro["attributes"];
  }

  isLoading.loading = false;
});

// eslint-disable-next-line no-undef
defineExpose({
  body,
  attributes,
});
</script>
