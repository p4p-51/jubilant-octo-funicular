export default interface ModuleStatus {
  name: string;
  id: string;
  status: "done" | "current" | "future";
  children?: ModuleStatus[];
  url: string;
}

