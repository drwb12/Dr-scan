<template>
  <div>
    <h3>For Who</h3>
    <div class="row gender justify-content-center mt-4">
      <div class="col-md-4 col-sm-4 col-6 ">
        <input type="radio" value="person" id="person" name="forWho" class="d-none" v-model="forWho" @change="forWhoEvent()">
        <label for="person" class="shadow p-4 rounded-4 w-100 person">
          <i class="fa-solid fa-person fa-2x" :class="forWho == 'person' ? 'text-light' : ''"
            style="color: #3d3d3d;"></i>
          <h2>My Self</h2>
        </label>
      </div>
      <div class="col-sm-4 d-none d-sm-block">
        <img src="@/assets/img/Yes or no-pana (3) 2.png" class="img-fluid" alt="">

      </div>
      <div class="col-md-4 col-sm-4 col-6 ">
        <input type="radio" value="other" id="other" name="forWho" class="d-none" v-model="forWho" @change="forWhoEvent()">
        <label for="other" class="shadow p-4 rounded-4 w-100 other">
          <i class="fa-solid fa-users fa-2x" :class="forWho == 'other' ? 'text-light' : ''"
            style="color: #3d3d3d;"></i>
          <h2>For others</h2>
        </label>
      </div>
      <button class="btn-next-form btn mt-4" v-if="forWho"
        @click.prevent="sendWho()">Next</button>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      forWho:'',
      counter:0
    }
  },
  methods: {
    forWhoEvent(){
      this.$emit('forWho', this.forWho)
    },
    sendWho(){
      this.$emit('counter', 1)
    }
  },
}
</script>

<style>

</style>
