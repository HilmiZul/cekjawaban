<template>
  <section class="konten">
    <div class="container pb-3">
      <div class="row">
        <div class="col-md-6">
          <table class="table table-bordered bg-white" data-aos="fade-up" data-aos-duration="700">
            <tbody>
              <tr>
                <th>Jumlah Soal</th>
                <td width="40%">
                  <input type="number" v-model="pengaturan.jumlahSoal" class="form-control" disabled />
                </td>
              </tr>
              <tr>
                <th>Skor per soal</th>
                <td><input type="number" v-model="pengaturan.skorSoal" class="form-control" min="0" autofocus /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="row" v-if="pengaturan.skorSoal > 0">
        <div class="col-md-6">
          <div class="card mb-3" data-aos="fade-up" data-aos-duration="900">
            <div class="card-header bg-blue">
              <h5>
                <i v-if="dikunci" class="fa fa-lock"></i>
                <i v-if="!dikunci" class="fa fa-unlock"></i>
                Kunci Jawaban
              </h5>
            </div>
            <div class="card-body">
              <div class="form-group">
                <input type="text" class="form-control form-control-lg letter-space" v-model="kunci" pattern="[a-z]+" maxlength="20" placeholder="contoh: adcbcedeecaedaadcaba" :disabled="dikunci" />
              </div>
              <span v-if="kunci.length < 1"><em>Silakan isi kunci jawaban!</em></span>
              <span v-else-if="kunci.length > 19">
                <button v-if="!dikunci" class="btn btn-dark mr-2" v-on:click="this.kunciJawaban">Kunci!</button>
                <button v-else class="btn btn-danger mr-2" v-on:click="this.kunciJawaban">Ubah!</button>
                <em v-if="dikunci">Selesai</em>
                <!-- <em v-if="!dikunci">Selesai</em> -->
              </span>
              <span v-else><em>{{ kunci.length }} dari {{ pengaturan.jumlahSoal }} jawaban</em></span>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card mb-3" data-aos="fade-up" data-aos-duration="950">
            <div class="card-header bg-yellow">
              <h5><i class="fa fa-users"></i> Jawaban Siswa</h5>
            </div>
            <div class="card-body">
              <form @submit.prevent="cekJawaban">
                <div class="form-group">
                  <input type="text" class="form-control form-control-lg letter-space" v-model="jawaban" maxlength="20" placeholder="contoh: abcde" :disabled="kunci.length < 20" />
                </div>
                <span v-if="jawaban.length > 19">
                  <!-- <button v-if="kunci.length > 19" @click="show=true" class="btn btn-dark mr-2" :disabled="jawaban.length < 20">Cek Jawban!</button> -->
                  <button v-if="kunci.length > 19" class="btn btn-outline-danger" v-on:click="this.resetSemua" :disabled="jawaban < 20">Reset!</button>
                  <span v-if="jawaban.length > 19"> Selesai ✅</span>
                </span>
                <span v-else-if="jawaban.length > 0"><em>{{ jawaban.length }} dari {{ kunci.length }} jawaban!</em></span>
                <span v-if="kunci.length > 19">
                  <span v-if="jawaban.length < 1">
                    <em>Silakan isi jawaban dari siswa!</em>
                  </span>
                </span>
              </form>
            </div>
          </div>
        </div>
        <!-- <div class="col-md-4">
          <div class="card mb-3">
            <div class="card-header bg-green">
              <h5><i class="fa fa-print"></i> Hasil</h5>
            </div>
            <div class="card-body">
              <h3 class="text-muted"><i class="fa fa-check-circle"></i> Benar: {{ hasil.benar }}</h3>
              <h3 class="text-muted"><i class="fa fa-times-circle"></i> Salah: {{ hasil.salah }}</h3>
              <h3><i class="fa fa-edit"></i> Niliai: {{ hasil.nilai }}</h3>
            </div>
          </div>
        </div> -->
      </div>
      <div class="row" v-if="pengaturan.skorSoal > 0">
        <div class="col-md-6">
          <div class="card" data-aos="fade-up" data-aos-duration="1000">
            <div class="card-header bg-green">
              <h5><i class="fa fa-print"></i> Hasil</h5>
            </div>
            <div class="card-body">
              <h5 class="text-muted"><i class="fa fa-check-circle"></i> Benar: {{ hasil.benar }}</h5>
              <h5 class="text-muted"><i class="fa fa-times-circle"></i> Salah: {{ hasil.salah }}</h5>
              <h5><i class="fa fa-edit"></i> Nilai: {{ hasil.nilai }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <stack-modal
      :show="show"
      :title="modalTitle"
      transition="translate-fade"
      @close="show=false"
      :modal-class="{ [modalClass]: true }"
      :saveButton="{ visible: false }"
      :cancelButton="{ title: 'Tutup', btnClass: { 'btn btn-outline-danger': true } }">
      <h5 class="text-muted"><i class="fa fa-check-circle"></i> Benar: {{ hasil.benar }}</h5>
      <h5 class="text-muted"><i class="fa fa-times-circle"></i> Salah: {{ hasil.salah }}</h5>
      <h5><i class="fa fa-edit"></i> Nilai: {{ hasil.nilai }}</h5>
    </stack-modal>
  </section>
</template>

<script>
import StackModal from '@innologica/vue-stackable-modal'
export default {
  components: {
    StackModal
  },

  data() {
    return {
      show: false,
      modalClass: 'modal-border-0',
      modalTitle: `Hasil`,
      jawaban: [],
      kunci: [],
      hasil: {
        benar: 0,
        salah: 0,
        nilai: 0
      },
      pengaturan: {
        jumlahSoal: 20,
        skorSoal: 0
      },
      dikunci: false,
    };
  },

  watch: {
    jawaban() {
      this.resetBeforeCheck(); // kosongkan `hasil`
      for (let i = 0; i < this.jawaban.length; i++) {
        if (this.jawaban[i].toUpperCase() === this.kunci[i].toUpperCase()) {
          this.hasil.benar = this.hasil.benar + 1;
        } else {
          this.hasil.salah = this.hasil.salah + 1;
        }
      }
      // hitung nilai = jawaban benar x skor per soal
      this.hasil.nilai = this.hasil.benar * this.pengaturan.skorSoal
    }
  },

  methods: {
    cekJawaban() {
      this.resetBeforeCheck(); // kosongkan `hasil`
      // cari jawaban yang sama dengan kunci jawaban
      for (let i = 0; i < this.kunci.length; i++) {
        if (this.jawaban[i].toUpperCase() === this.kunci[i].toUpperCase()) {
          this.hasil.benar = this.hasil.benar + 1;
        } else {
          this.hasil.salah = this.hasil.salah + 1;
        }
      }
      // hitung nilai = jawaban benar x skor per soal
      this.hasil.nilai = this.hasil.benar * this.pengaturan.skorSoal
    },
    resetBeforeCheck() {
      this.hasil.benar = 0;
      this.hasil.salah = 0;
    },
    resetSemua() {
      this.hasil.benar = 0;
      this.hasil.salah = 0;
      this.hasil.nilai = 0;
      this.jawaban = [];
    },
    kunciJawaban() {
      if (this.dikunci) {
        this.dikunci = false;
      } else {
        this.dikunci = true;
      }
    },
  },
};
</script>

<style lang="css" scoped>
@import "~@innologica/vue-stackable-modal/src/assets/transitions/translate-fade.scss";
.konten {
  width: 100%;
  height: 100%;
  background: transparent url("~@/assets/img/wave.svg") no-repeat bottom center;
  overflow-y: auto;
}
.bg-blue {
  background-color: #90cbff;
}
.bg-yellow {
  background-color: #ffee6c;
}
.bg-green {
  background-color: #96f091;
}
.letter-space {
  letter-spacing: 3px;
}
</style>
