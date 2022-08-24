<template>
  <div class="progress-side-bar">
    <ul class="modules">
      <li v-for="module in modules" :key="module.id" :class="module.status">
        <a :href="module.url">
          {{ module.name }}
        </a>
        <ul class="sub-modules">
          <li
            v-for="child in module.children"
            :key="child.id"
            :class="child.status"
          >
            <a :href="child.url">
              {{ child.name }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { DataExtractor, RoutesManager } from "@/router/routes";
import ModuleStatus from "@/types/ModuleStatus.interface";
import { defineComponent, PropType } from "vue";
import { routeStore } from "@/router/route.store";

export default defineComponent({
  name: "ProgressSideBar",
  props: {},
  data() {
    return {
      modules: [] as ModuleStatus[],
    };
  },
  mounted() {
    routeStore.update(RoutesManager.pathToModuleStage(this.$route.fullPath))
    this.modules = DataExtractor.progressBar();
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/css/theme.scss";

.progress-side-bar {
  min-width: 250px;
  margin: 70px 0;
  margin-left: 15px;
  padding-right: 30px;
  height: 90%;

  box-sizing: border-box;

  border-right: solid 1px $c-grey-light;

  > ul {
    list-style: none;
  }

  a {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;

    font-size: 12px;

    text-decoration: none;

    margin-bottom: 10px;

    cursor: pointer;
    transition: $animation;

    &:hover {
      transform: scale(1.05);
    }
  }

  //module block
  > ul > li {
    margin-bottom: 20px;
  }

  .current {
    color: $c-primary;
    font-weight: 500;

    a {
      color: $c-primary;
      font-weight: 500;
    }
  }

  .future {
    color: $c-grey-dark;

    a {
      color: $c-grey-dark;
    }
  }

  .done {
    color: rgba($c-primary, 0.3);

    a {
      color: rgba($c-primary, 0.3);
    }
  }
}
</style>
