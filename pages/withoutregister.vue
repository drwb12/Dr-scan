<template>
  <div >
    <navbar/>
    <div class="container shadow rounded-4 p-4 text-center mt-4 withoutRegister">
      <dearCustomer @add="(i) => this.count += i"  @minus="(i) => this.count -= i" v-if="this.count==0"/>

        <div class="age"  v-if="count==1">
          <h3 style="color: #6B6B6B;">
            Please answer those Questions To get more details ..
          </h3>
          <h2>How old are you ?</h2>
          <h2 class="h1">{{ age }}</h2>
          <input type="range" name="" class="" id="" min="5" max="100" v-model="age">
            <div class="row">
              <div class="col-5">
                <button @click="count--" class="btn btn-prev mt-4">
                  Back
                </button>

              </div>
              <div class="col-1"></div>
              <div class="col-5">
                <button @click="count++" class="btn btn-next mt-4">
                  Continue
                </button>
              </div>
            </div>
        </div>
        <div class="age" v-if="count==2">
          <h3 style="color: #6B6B6B;">
            Please answer those Questions To get more details ..
          </h3>
          <h2>What’s your gender ?</h2>
          <div class="row mt-3">
            <div class="col-md-5">
              <input type="radio" value="female" id="female" name="gender" class="d-none" v-model="gender">
              <label for="female" class="shadow p-4 rounded-4 w-100">
                <i class="fa-solid fa-venus fa-2x" style="color: #3d3d3d;"></i>
                <h2>Female</h2>
              </label>
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-5">
              <input type="radio" value="male" id="male" name="gender" class="d-none" v-model="gender">
              <label for="male" class="shadow p-4 rounded-4 w-100">
                <i class="fa-solid fa-mars fa-2x"  style="color: #3d3d3d;"></i>
                <h2>Male</h2>
              </label>
            </div>
          </div>
          <div class="row">
              <div class="col-5">
                <button @click="count--" class="btn btn-prev mt-4">
                  Back
                </button>

              </div>
              <div class="col-2"></div>
              <div class="col-5">
                <button @click="count++" class="btn btn-next mt-4" :class="gender == '' ? 'd-none' : ''">
                  Continue
                </button>
              </div>
            </div>
        </div>
        <div class="smoking"  v-if="count==3">
          <h3 style="color: #6B6B6B;">
            Please answer those Questions To get more details ..
          </h3>
          <h2 class="mb-3" style="margin-bottom: 3%;">Do you smoke cigarettes ?</h2>
          <div class="row mt-3">
            <div class="col-md-5">
              <input type="radio" value="yes" id="yes" name="smoke" class="d-none" v-model="smoke">
              <label for="yes" class="shadow p-4 rounded-4 w-100">
                <h2>Yes</h2>
              </label>
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-5">
              <input type="radio" value="no" id="no" name="smoke" class="d-none" v-model="smoke">
              <label for="no" class="shadow p-4 rounded-4 w-100">
                <h2>No</h2>
              </label>
            </div>
          </div>
          <div class="row">
              <div class="col-5">
                <button @click="count--" class="btn btn-prev mt-4">
                  Back
                </button>

              </div>
              <div class="col-2"></div>
              <div class="col-5">
                <button class="btn btn-next mt-4" :class="smoke == '' ? 'd-none' : ''">
                  Finish
                </button>
              </div>
            </div>
        </div>

        <!-- <gender :gender="gender" @add="(i) => this.count += i"  @minus="(i) => this.count -= i"/> -->
        <!-- <smoke :smoke="smoke" @add="(i) => this.count += i" @sendform="handlesendform"  @minus="(i) => this.count -= i" v-if="this.count==3"/> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count:0,
        age:15,
        gender:'',
        smoke:''

    }
  },
  methods: {
    handlesendform(){
      console.log(this.age)
    }
  },
}
</script>

<style>

</style>
