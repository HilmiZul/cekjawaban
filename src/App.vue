<template>
  <div id="app">
    <section class="title">
      <div class="container">
        <div class="row">
          <div class="col-md-4 offset-md-4">
            <div class="inner-title pt-4 pb-3 mb-3">🧐 {{ title }} 🧐</div>
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
@font-face {
  font-family: 'Folktale';
  src: url('~@/assets/font/Folktale.ttf');
}
@font-face {
  font-family: 'Gothic';
  src: url('~@/assets/font/Gothic.ttf');
}
@font-face {
  font-family: 'Prototype';
  src: url('~@/assets/font/Prototype.ttf');
}

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
  font-family: 'Gothic';
}
.title {
  border-top: 7px solid #a2d9ff;
}

.inner-title {
  font-family: 'Prototype';
  font-size: 3vh;
  text-align: center;
  position: relative
}
.inner-title:before {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  background: #2c3e50;
  bottom: 0;
  left: 42%;
  position: absolute;
}

.gothic {
  font-family: 'Ghotic';
}
.folktale {
  font-family: 'Folktale';
}
.prototype {
  font-family: 'Prototype';
}
</style>
