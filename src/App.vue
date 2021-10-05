<template>
  <div id="app">
    <section class="title">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="text-center pt-5 pb-5">🧐 {{ title }} 🧐</h2>
          </div>
        </div>
      </div>
    </section>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: `Cek Jawaban PG.`,
    };
  },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
  color: #2c3e50;
}
.title {
  border-top: 7px solid #a2d9ff;
}
</style>
