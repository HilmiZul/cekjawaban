<template>
  <div id="app">
    <div class="ilustrasi">
      <img src="~@/assets/img/check-box.svg" alt="ilustrasi" class="img-ilustrasi" data-aos="fade" data-aos-duration="2000">
    </div>
    <section class="title">
      <div class="container">
        <div class="row">
          <div class="col-md-4 offset-md-4">
            <div class="inner-title pt-4 pb-3 mb-3" data-aos="fade-down">
              {{ title.toUpperCase() }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <router-view></router-view>
    
    <footer class="text-center text-muted">
      <div class="footer-text">&copy; 2021 <a href="https://zulhilmi.id" target="_blank" >zulhilmi.id</a>.</div>
    </footer>
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
  /* margin: 0;
  padding: 0; */
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
  bottom: 10%;
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

.ilustrasi {
  position: relative;
  display: block;
}
.ilustrasi .img-ilustrasi {
  position: absolute;
  width: 20vw;
  right: 30px;
  top: 30px;
}
footer {
  background-color: #a2d9ff;
  padding-bottom: 30px;
}
footer a {
  color: inherit
}
footer a:hover {
  color: inherit;
}
</style>
