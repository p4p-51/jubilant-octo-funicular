<template>
  <nav class="nav-bar">
    <router-link to="/">
      <img src="../assets/logo.svg" alt="logo" class="logo" />
    </router-link>

    <div class="links-container">
      <router-link to="/" class="link">
        <img src="../assets/icons/hat.svg" class="icon" />
      </router-link>
      <router-link to="/about" class="link">
        <img src="../assets/icons/note.svg" class="icon" />
      </router-link>
      <router-link to="/lecture" class="link">
        <img src="../assets/icons/cog.svg" class="icon" />
      </router-link>
    </div>
    <div class="user-info-container">
      <img src="../assets/user.svg" class="avatar" />
      <img src="../assets/icons/logout.svg" class="icon" />
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import "@/assets/css/theme.scss";
.nav-bar {
  width: 120px;
  min-width: 120px;
  height: 97%;

  background: $c-bg-grey;
  align-self: flex-end;

  border-radius: 0 30px 0 0;

  display: flex;
  flex-direction: column;

  align-items: center;

  box-sizing: border-box;
  padding: 70px 0;
}

.logo {
  width: 50px;
  height: 50px;

  cursor: pointer;
}

.links-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 25px;

  width: 100%;

  flex: 1;

  margin: 60px 0;
}

.link {
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;

  .icon {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: rgba($c-primary, 0.15);
  }
}

.user-info-container {
  display: flex;
  flex-direction: column;
  width: 100%;

  align-items: center;
  row-gap: 50px;

  .avatar {
    height: 45px;
    width: 45px;

    border-radius: 100%;
    border: solid 1px $c-grey-dark;
    box-shadow: border-box;
    margin: 1px;

    cursor: pointer;
    transition: 0.1s linear;

    &:hover {
      margin: 0px;
      border: solid 2px $c-primary;
    }
  }

  .icon {
    width: 24px;
    height: 24px;

    cursor: pointer;
    transition: $animation;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
  components: {},
});
</script>
