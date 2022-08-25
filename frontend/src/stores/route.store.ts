import { reactive } from "vue";
import { IModuleId, IModuleStage, RoutesManager } from "@/router/routes";

export const routeStore = reactive<{
  moduleId: IModuleId | null,
  stage: number,
  update(moduleStage: IModuleStage): void,
  path(): string
}>({
  moduleId: null,
  stage: 0,
  update(moduleStage) {
    this.moduleId = moduleStage.moduleId;
    this.stage = moduleStage.stage;
  },
  path() {
    if (this.moduleId == null) {
      return "/"
    }
    if (this.moduleId == "grad") {
      return "/graduation"
    }
    return "/lecture/" + RoutesManager.fullLectureRoute(this.moduleId, this.stage);
  }
});