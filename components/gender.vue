<template>
  <div class="age">
    <h3 style="color: #6B6B6B;">
      Please answer those Questions To get more details ..
    </h3>
    <h2>What’s your gender ?</h2>
    <div class="row mt-3">
      <div class="col-md-5">
        {{ gender }}
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
          <button @click="$emit('minus', 1)" class="btn btn-prev mt-4">
            Back
          </button>

        </div>
        <div class="col-2"></div>
        <div class="col-5">
          <button @click="$emit('add', 1)" class="btn btn-next mt-4">
            Continue
          </button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
data() {
  return {
  }
},
props:['gender']
}
</script>

<style>

</style>
