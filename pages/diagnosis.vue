<template>
  <div class="diagnosis">

    <navbar :activePage="activePage" />
    <div class="container shadow rounded-4 mt-4 p-3">
      <div class="tabs row text-center d-none d-sm-flex">
        <div class="col-sm-3 p-0">
          <h3 class=" btn btn-tab py-2" :class="counter == 0 ? 'active' : ''">Info</h3>
        </div>
        <div class="col-sm-3 p-0">
          <h3 class=" btn btn-tab py-2" :class="counter == 1 || counter == 20 || counter == 21 ? 'active' : ''">Symptom
          </h3>
        </div>
        <div class="col-sm-3 p-0">
          <h3 class=" btn btn-tab py-2" :class="counter == 2 ? 'active' : ''">Questions</h3>
        </div>
        <div class="col-sm-3 p-0">
          <h3 class=" btn btn-tab py-2" :class="counter == 3 || counter == 4 ? 'active' : ''">Result</h3>
        </div>
      </div>
      <div class="content mt-4 text-center pb-4">
        <who
          v-if="counter == 0"
          @forWho="(payload) => { forWho = payload }"
          @counter="(i) => this.counter += i" />
        <selectOfbody
          v-if="counter == 1"
          @sickSelect="(payload) => sickSelect = payload"
          @counterbody="(i) => this.counter = i"
          @counter="(i) => this.counter += i" />
        <partOfBody
          v-if="counter == 20"
          @counter="(i) => this.counter += i" />
        <memberofBody
          v-if="counter == 21"
          @add="(i) => this.counter = i"
          @minus="(i) => this.counter = i" />
        <question
        v-if="counter == 2"
        @add="(i) => this.counter += i"
        @minus="(i) => this.counter -= i"
        @answer="(payload) => this.answer = payload" />
        <div v-if="counter == 3">
          <div class="container result">
            <img src="@/assets/img/photo_2022-10-19_02-46-36-removebg-preview 2.svg" class="img-fluid personBody" alt="">
            <h2 class="text-black">You result is </h2>
            <p class="text-left text-black">You May Suffer From</p>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed doeiusmod tempor sit amet, consectetur adipiscing elit, sed doeiusmod
              tempor</h5>
            <div class="btns row">
              <div class="col-2 mt-4 col-btn"></div>
              <div class="col-4 mt-4 col-btn">
                <button class="btn btn-next">Save Your Result</button>
              </div>
              <div class="col-4 mt-4 col-btn">
                <nuxt-link to="/" class="btn btn-next">Go back home</nuxt-link>
              </div>
              <div class="col-2 mt-4 col-btn"></div>
              <div class="col-2 mt-4 col-btn"></div>
              <div class="col-4 mt-4 col-btn">
                <button class="btn btn-next" @click.prevent="anotherdiagnosis()">Do another diagnosis test</button>
              </div>
              <div class="col-4 mt-4 col-btn">
                <button class="btn btn-next" @click.prevent="counter++">Advanced options</button>
              </div>
              <div class="col-2 mt-4 col-btn"></div>
            </div>
          </div>
        </div>
        <div v-if="counter == 4">
          <div class="container result">
            <img src="@/assets/img/photo_2022-10-19_02-46-36-removebg-preview 2.svg" class="img-fluid personBody" alt="">

            <h2 class="text-black">Advanced options </h2>
            <p class="text-left text-black">Advanced options like</p>
            <h5 class="text-left">
              <ul>
                <li>Know which doctor to go to </li>
                <li>Read you result with speech</li>
              </ul>
            </h5>
            <div class="btns d-flex">
              <button class="btn btn-prev w-50" style="margin:0 10%;" @click.prevent="counter--">Back to result</button>
              <button class="btn btn-next w-50" style="margin:0 10%;">Purchase for 99.9EGP </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      forWho:'',
      rotate:true,
      sickSelect:null,
      rotate: false,
      activePage: 'diagnosis',
      counter: 1,
      forWho: null,
      sickSelect: null,
      ans: '',
      answer: [],
      counterQuestion: 0,
      ques: '',

    }
  },
  methods: {

    anotherdiagnosis() {
      this.counter = 0;
      this.ans = "";
      this.answer = [];
      this.forWho = null;

    }
  },
}
</script>

<style></style>
