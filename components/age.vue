<template>
  <div class="age">
    <h3 style="color: #6B6B6B;">
      Please answer those Questions To get more details ..
    </h3>
    <h2>How old are you ?</h2>
    <h2 class="h1">{{ age }}</h2>
    <input type="range" name="" class="" id="" min="5" max="100" v-model="age">
      <div class="row">
        <div class="col-5">
          <button @click="$emit('minus', 1)" class="btn btn-prev mt-4">
            Back
          </button>

        </div>
        <div class="col-1"></div>
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
props:['age']
}
</script>

<style>

</style>
