<template>
  <div class="module-end-view">
    <div class="header">
      <h1>Yay! You did it! 🎉</h1>
      <h3>
        Finished module: <span>{{ currentModule.name }}</span>
      </h3>
    </div>
    <div class="content">
      <div class="progress">
        <ModuleItem
          v-for="module in moduleStatus"
          :key="module.id"
          :module-type="module.status"
          :name="module.name"
        />
      </div>
      <div class="survey">
        <h3>How helpful did you find this module?</h3>
        <p>
          Something something give feedback so it can help us improve the
          learning material for you
        </p>
        <div class="stars">
          <div
            class="star-wrapper"
            v-for="i in 5"
            :key="i"
            @click="numStars = i"
          >
            <img v-if="i <= numStars" src="@/assets/icons/stars/star.svg" />
            <img v-else src="@/assets/icons/stars/star-outline.svg" />
          </div>
        </div>
        <h4>Any other feedback? (Optional)</h4>
        <textarea v-model="feedback" />
      </div>
    </div>
    <div class="footer">
      <p>
        Up Next: <span>{{ nextModuleName }}</span>
      </p>
      <go-button @click="submitFeedback" text="Submit and Next" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.module-end-view {
  padding: 20px 40px;

  overflow-y: scroll;
  width: 100%;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 36px;
    font-weight: 400;

    margin-bottom: 15px;
  }

  h1 + h3 {
    font-size: 16px;
    font-weight: 400;

    color: $c-grey-dark;

    margin: 0;

    > span {
      color: $c-secondary;
    }
  }
}

.content {
  flex: 1;

  display: flex;
  align-items: center;

  .progress {
    width: 50%;

    border-right: solid 1px $c-grey-light;

    display: flex;
    flex-direction: column;

    align-items: center;

    row-gap: 20px;
  }

  .survey {
    width: 50%;

    box-sizing: border-box;
    padding: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-size: 20px;
      font-weight: 400;

      color: $c-black;
    }

    > p {
      font-size: 14px;
      font-weight: 400;

      color: $c-grey-dark;

      width: 380px;

      margin: 0;
    }

    .stars {
      display: flex;

      height: 180px;

      align-items: center;
      column-gap: 5px;

      .star-wrapper {
        > img {
          height: 36px;
          width: 36px;

          cursor: pointer;
        }
      }
    }

    > h4 {
      font-size: 16px;
      font-weight: 400;

      color: $c-black;

      margin: 10px;
    }

    > textarea {
      width: 380px;
      height: 50px;
      max-width: 90%;

      border: solid 1px $c-grey-light;
      border-radius: 6px;

      padding: 10px;

      font-size: 14px;
      font-weight: 400;

      color: $c-black;

      font-family: $f-poppins;

      &:focus {
        outline: solid 2px $c-primary;
      }
    }
  }
}

.footer {
  align-self: flex-end;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-bottom: 60px;

  p {
    font-size: 16px;
    font-weight: 400;

    color: $c-grey-dark;

    > span {
      color: $c-secondary;
    }
  }

  button {
    background-color: $c-primary;

    color: $c-background;
  }
}
</style>

<script lang="ts">
import ModuleItem from "@/components/ModuleItem.vue";
import { defineComponent } from "vue";
import { DataExtractor, ILectureModuleId } from "@/router/routes";
import ModuleStatus from "@/types/ModuleStatus.interface";
import { routeStore } from "@/stores/route.store";
import GoButton from "@/components/GoButton.vue";
import { submitFeedback } from "@/apis/api";

export type ModuleItemProgress = "done" | "current" | "next" | "future";

type IModuleItem = Omit<ModuleStatus, "status"> & {
  status: ModuleItemProgress;
};

export default defineComponent({
  name: "ModuleEndView",
  components: { ModuleItem, GoButton },
  methods: {
    async submitFeedback() {
      if (this.numStars == 0 && this.feedback == "") {
        return;
      }
      const [error, data] = await submitFeedback(
        this.currentModule.id as ILectureModuleId,
        this.numStars,
        this.feedback,
      );
      if (error) {
        alert("Feedback Not submitted, please try again");
        return;
      }
    },
  },
  mounted() {
    const moduleStatus: IModuleItem[] = DataExtractor.progressBar(routeStore);
    const index = moduleStatus.findIndex((module) => {
      return module.status == "current";
    });

    if (!(index == -1 || index + 1 >= moduleStatus.length)) {
      moduleStatus[index + 1]["status"] = "next";
    }
    this.moduleStatus = moduleStatus;

    this.currentModule = this.moduleStatus[index];

    this.nextModuleName =
      this.moduleStatus.find((module) => {
        return module.status == "next";
      })?.name ?? "Graduation";
  },
  data() {
    return {
      numStars: 0 as number,
      feedback: "" as string,
      moduleStatus: [] as IModuleItem[],
      currentModule: {} as IModuleItem,
      nextModuleName: "" as string,
    };
  },
});
</script>
