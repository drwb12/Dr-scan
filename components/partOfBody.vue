<template>
  <div>
    <div class="container postion-relative">
    <img src="@/assets/img/photo_2022-10-19_02-46-36-removebg-preview 2.svg" class="img-fluid personBody" alt="">
      <h4 class="text-center mb-4">Choose the part of the body that you feel pain on it. </h4>
      <div class="row mt-4">
        <div class="col-md-6 mt-4">
          <button class="btn btn-partOfBody" @click.prevent="selectThis()">
            <div class="d-flex align-items-center">
              &nbsp;&nbsp;&nbsp;&nbsp;<img src="@/assets/img/head.svg" alt="" class="img-fluid">
              &nbsp;&nbsp;&nbsp;&nbsp;
              Head
              <i class="fa-solid fa-angle-right ml-auto"></i>
            </div>
          </button>
        </div>
        <div class="col-md-6 mt-4">
          <button class="btn btn-partOfBody">
            <div class="d-flex align-items-center">
              &nbsp;&nbsp;&nbsp;&nbsp;<img src="@/assets/img/back.svg" alt="" class="img-fluid">
              &nbsp;&nbsp;&nbsp;&nbsp;
              Back
              <i class="fa-solid fa-angle-right ml-auto"></i>
            </div>
          </button>
        </div>
        <div class="col-md-6 mt-4">
          <button class="btn btn-partOfBody">
            <div class="d-flex align-items-center">
              &nbsp;&nbsp;&nbsp;&nbsp;<img src="@/assets/img/neck.svg" alt="" class="img-fluid">
              &nbsp;&nbsp;&nbsp;&nbsp;
              Neck
              <i class="fa-solid fa-angle-right ml-auto"></i>
            </div>
          </button>
        </div>
        <div class="col-md-6 mt-4">
          <button class="btn btn-partOfBody">
            <div class="d-flex align-items-center">
              &nbsp;&nbsp;&nbsp;&nbsp;<img src="@/assets/img/pelvis.svg" alt="" class="img-fluid">
              &nbsp;&nbsp;&nbsp;&nbsp;
              Pelvis
              <i class="fa-solid fa-angle-right ml-auto"></i>
            </div>
          </button>
        </div>
        <div class="col-md-6 mt-4">
          <button class="btn btn-partOfBody">
            <div class="d-flex align-items-center">
              &nbsp;&nbsp;&nbsp;&nbsp;<img src="@/assets/img/chest.svg" alt="" class="img-fluid">
              &nbsp;&nbsp;&nbsp;&nbsp;
              Chest
              <i class="fa-solid fa-angle-right ml-auto"></i>
            </div>
          </button>
        </div>
        <div class="col-md-6 mt-4">
          <button class="btn btn-partOfBody">
            <div class="d-flex align-items-center">
              &nbsp;&nbsp;&nbsp;&nbsp;<img src="@/assets/img/buttocks.svg" alt="" class="img-fluid">
              &nbsp;&nbsp;&nbsp;&nbsp;
              Buttocks
              <i class="fa-solid fa-angle-right ml-auto"></i>
            </div>
          </button>
        </div>
        <div class="col-md-6 mt-4">
          <button class="btn btn-partOfBody">
            <div class="d-flex align-items-center">
              &nbsp;&nbsp;&nbsp;&nbsp;<img src="@/assets/img/harms.svg" alt="" class="img-fluid">
              &nbsp;&nbsp;&nbsp;&nbsp;
              Arms
              <i class="fa-solid fa-angle-right ml-auto"></i>
            </div>
          </button>
        </div>
        <div class="col-md-6 mt-4">
          <button class="btn btn-partOfBody">
            <div class="d-flex align-items-center">
              &nbsp;&nbsp;&nbsp;&nbsp;<img src="@/assets/img/legs.svg" alt="" class="img-fluid">
              &nbsp;&nbsp;&nbsp;&nbsp;
              Legs
              <i class="fa-solid fa-angle-right ml-auto"></i>
            </div>
          </button>
        </div>
        <div class="col-md-3 mt-4"></div>
        <div class="col-md-6 mt-4">
          <button class="btn btn-partOfBody">
            <div class="d-flex align-items-center">
              &nbsp;&nbsp;&nbsp;&nbsp;<img src="@/assets/img/legs.svg" alt="" class="img-fluid">
              &nbsp;&nbsp;&nbsp;&nbsp;
              Legs
              <i class="fa-solid fa-angle-right ml-auto"></i>
            </div>
          </button>
        </div>
        <div class="col-md-3 mt-4"></div>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      counter:0
    }
  },methods: {
    selectThis(){
      this.$emit('counter', 1)

    }
  },
}
</script>

<style>

</style>
