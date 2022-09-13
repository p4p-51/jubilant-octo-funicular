<template>
  <div class="real-home-view">
    <div class="content">
      <h1>Hi, name</h1>
      <h2>Ready to take your behavioural skills to the next level?</h2>

      <div class="continue-prompt">
        <p>Current module: <span>Welcome</span></p>
        <button>Let's get started or something</button>
      </div>
    </div>
    <div class="illustration-container">
      <img src="@/assets/illustrations/girl-studying.svg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.real-home-view {
  display: flex;

  height: 100%;
  width: 100%;

  .content {
    width: 55%;
    min-width: 600px;
  }

  .illustration-container {
    background-color: rgba($c-primary, 0.2);

    display: flex;
    justify-content: center;

    img {
      width: 80%;
    }
  }
}

@media (max-width: 1080px) {
  .illustration-container {
    visibility: hidden;
  }
}
</style>
