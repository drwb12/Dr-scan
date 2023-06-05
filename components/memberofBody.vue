<template>
  <div>
    <div class="container postion-relative">
      <img src="@/assets/img/photo_2022-10-19_02-46-36-removebg-preview 2.svg" class="img-fluid personBody" alt="">

      <h2 class="text-black">Head Symptom</h2>
      <h4 class="text-center mb-4">Choose the part of the body that you feel pain on it. </h4>
      <div class="row mt-4">
        <div class="col-md-6 mt-4">
          <button class="btn btn-partOfBody">
            <div class="d-flex align-items-center">
              &nbsp;&nbsp;&nbsp;
              Sclap
              <div id="inputPreview" class="inputPreview">
                <input name="head" id="Head" type="checkbox" class="css-checkbox">
                <label for="Head"></label>
              </div>
            </div>
          </button>
        </div>
        <div class="col-md-6 mt-4">
          <button class="btn btn-partOfBody">
            <div class="d-flex align-items-center">
              &nbsp;&nbsp;&nbsp;
              Ears
              <div id="inputPreview" class="inputPreview">
                <input name="head" id="Back" type="checkbox" class="css-checkbox">
                <label for="Back"></label>
              </div>

            </div>
          </button>
        </div>
        <div class="col-md-6 mt-4">
          <button class="btn btn-partOfBody">
            <div class="d-flex align-items-center">
              &nbsp;&nbsp;&nbsp;
              Forehead
              <div id="inputPreview" class="inputPreview">
                <input name="head" id="Neck" type="checkbox" class="css-checkbox">
                <label for="Neck"></label>
              </div>
            </div>
          </button>
        </div>
        <div class="col-md-6 mt-4">
          <button class="btn btn-partOfBody">
            <div class="d-flex align-items-center">
              &nbsp;&nbsp;&nbsp;
              Face
              <div id="inputPreview" class="inputPreview">
                <input name="head" id="Pelvis" type="checkbox" class="css-checkbox">
                <label for="Pelvis"></label>
              </div>


            </div>
          </button>
        </div>
        <div class="col-md-6 mt-4">
          <button class="btn btn-partOfBody">
            <div class="d-flex align-items-center">
              &nbsp;&nbsp;&nbsp;
              Eyes
              <div id="inputPreview" class="inputPreview">
                <input name="head" id="Chest" type="checkbox" class="css-checkbox">
                <label for="Chest"></label>
              </div>


            </div>
          </button>
        </div>
        <div class="col-md-6 mt-4">
          <button class="btn btn-partOfBody">
            <div class="d-flex align-items-center">
              &nbsp;&nbsp;&nbsp;
              Mouth
              <div id="inputPreview" class="inputPreview">
                <input name="head" id="Buttocks" type="checkbox" class="css-checkbox">
                <label for="Buttocks"></label>
              </div>


            </div>
          </button>
        </div>
        <div class="col-md-6 mt-4">
          <button class="btn btn-partOfBody">
            <div class="d-flex align-items-center">
              &nbsp;&nbsp;&nbsp;
              Nose
              <div id="inputPreview" class="inputPreview">
                <input name="head" id="Arms" type="checkbox" class="css-checkbox">
                <label for="Arms"></label>
              </div>


            </div>
          </button>
        </div>
        <div class="col-md-6 mt-4">
          <button class="btn btn-partOfBody">
            <div class="d-flex align-items-center">
              &nbsp;&nbsp;&nbsp;
              Jaw
              <div id="inputPreview" class="inputPreview">
                <input name="head" id="Legs" type="checkbox" class="css-checkbox">
                <label for="Legs"></label>
              </div>


            </div>
          </button>
        </div>
      </div>
      <div class="d-block">
        <button class="btn-back btn mt-4 w-15 d-inline mr-auto" style="float: left;" @click.prevent="prev()">
          &lt; Back</button>
        <button class="btn-next btn mt-4 w-15 d-inline ml-auto" style="float: right;"
          @click.prevent="next()">Next</button>
        <div style="clear: both;"></div>
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
},
methods: {
  next(){
    this.$emit('add', 2)
  },
  prev(){
    this.$emit('minus', 1)
  }
},
}
</script>

<style></style>
