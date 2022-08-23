<template>
  <button class="go-button" @click="submit">
    {{text}}
  </button>
</template>

<script lang="ts" setup>
import { RoutesManager } from "@/router/routes";
import { useRouter, useRoute } from 'vue-router'

const props = defineProps({
  text: {
    type: String,
    default: "All done!! ->"
  },
})

const router = useRouter()
const route = useRoute()

const submit = async () => {
  const nextRoute = await  RoutesManager.nextLocation(route.fullPath)
  await router.push(nextRoute)
}

</script>