<template>
  <div class="age">
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
          <button @click="$emit('minus', 1)" class="btn btn-prev mt-4">
            Back
          </button>

        </div>
        <div class="col-2"></div>
        <div class="col-5">
          <button class="btn btn-next mt-4" @click="sendform">
            Finish
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
props:['smoke']
}
</script>

<style>

</style>
