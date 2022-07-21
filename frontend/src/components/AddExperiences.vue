<template>
  <div class="add-experiences">
    <h2>List down some of your past teamwork experiences</h2>
    <div class="content">
      <div class="create-experiences">
        <button class="box" @click="isModalOpen = true">
          + Add a new experience
        </button>
        <div>somethign</div>
      </div>
      <div class="checklist">
        <h3>Your experiences</h3>
        <p v-for="c in checklist" :key="c.label">
          <span class="tick" v-if="c.isFilled">✓ </span>
          <span class="dot" v-else>• </span>{{ c.label }}
        </p>
      </div>
    </div>
  </div>

  <div class="modal" v-if="isModalOpen">
    <div class="popup">
      <input class="title-input" placeholder="Your experience here" />
      <div class="radio-line">
        <p>I experienced a conflict</p>
        <div class="radio-group">
          <label>Yes</label>
          <input type="radio" name="conflict" value="yes" />

          <label>No</label>
          <input type="radio" name="conflict" value="no" checked="true" />
        </div>
      </div>
      <div class="radio-line">
        <p>I was the leader</p>
        <div class="radio-group">
          <label>Yes</label>
          <input type="radio" name="leadership" value="yes" />

          <label>No</label>
          <input type="radio" name="leadership" value="no" checked="true" />
        </div>
      </div>
      <div class="radio-line">
        <p>I experienced teamwork</p>
        <div class="radio-group">
          <label>Yes</label>
          <input type="radio" name="teamwork" value="yes" />

          <label>No</label>
          <input type="radio" name="teamwork" value="no" checked="true" />
        </div>
      </div>
      <div class="radio-line">
        <p>I experienced a failure</p>
        <div class="radio-group">
          <label>Yes</label>
          <input type="radio" name="failure" value="yes" />

          <label>No</label>
          <input type="radio" name="failure" value="no" checked="true" />
        </div>
      </div>
      <div class="buttons">
        <button class="cancel" @click="isModalOpen = false">Cancel</button>
        <button class="save">Save</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.add-experiences {
  width: 100%;

  > h2 {
    font-size: 20px;
    font-weight: 400;

    margin-bottom: 5px;
    margin-top: 40px;
  }

  .content {
    display: flex;
    justify-content: space-between;
    column-gap: 70px;

    .add-experiences {
      flex: 1;
    }

    .create-experiences {
      flex: 2;
      display: flex;

      flex-direction: column;

      margin-top: 30px;

      .box {
        border: solid 1px $c-grey-light;
        border-radius: 0;

        max-width: 1000px;

        padding: 20px 25px;

        &:hover {
          background: rgba($c-primary, 0.1);
          border: solid 1px $c-primary;
          transform: none;
        }
      }
    }
    .checklist {
      width: 30%;
      box-sizing: border-box;

      h3 {
        font-size: 20px;
        font-weight: 400;
      }

      p {
        margin-left: 20px;

        .dot {
          color: orange;
        }

        .tick {
          color: green;
        }
      }

      p > span {
        font-weight: bold;
        margin-right: 10px;
      }
    }
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  .popup {
    width: 800px;
    background: white;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    box-sizing: border-box;
    padding: 40px 50px;

    .title-input {
      font-family: $f-poppins;
      font-size: 16px;
      padding: 5px 10px;
      font-weight: 500;

      border: solid 1px $c-grey-light;
      align-self: flex-start;

      width: 60%;
      margin-bottom: 30px;

      &:focus {
        outline: solid 1px $c-primary;
      }
    }

    .radio-line {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin: 0 35px;

      .radio-group {
        input {
          margin-right: 35px;
        }
      }
    }
  }

  .buttons {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    margin-top: 20px;

    button {
      margin-left: 20px;
    }

    .save {
      color: $c-background;
      background: $c-primary;
    }
  }
}
</style>

<script lang="ts">
import { Experience } from "@/types/Question.interface";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "AddExperiences",
  components: {},
  data() {
    return {
      isModalOpen: false,
      checklist: [
        {
          label: "Conflict",
          isFilled: false,
        },
        {
          label: "Leadership",
          isFilled: false,
        },
        {
          label: "Communication",
          isFilled: false,
        },
        {
          label: "Teamwork",
          isFilled: true,
        },
        {
          label: "Collaboration",
          isFilled: false,
        },
        {
          label: "Failure",
          isFilled: false,
        },
      ],
      experiences: [
        {
          id: "23",
          title: "ENGGEN 115 bridge",
          labels: ["Conflict", "Leadership"],
        },
        {
          id: "24213",
          title: "My summer camp",
          labels: ["Teamwork", "Leadership"],
        },
      ] as Experience[],
    };
  },
  props: {},
});
</script>
