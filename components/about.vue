<template>
  <div class="text-center about" style="margin-top: 7%;">
    <div v-if="aboutCounter==0">
      <h3>About DR.SCAN</h3>
      <div class="gridImage">
        <img src="@/assets/img/oie_10231639kTqIy398 1.png" alt="" class="img-fluid">
      </div>
      <p>DR. Scan website provide medical diagnosis and understanding medical tests DR.Scan services can always be used By using our services you can save money and effort</p>
      <button class="btn btn-next w-50 m-auto" @click.prevent="aboutCounter++">Next</button>
    </div>
    <div v-if="aboutCounter==1">
      <button class="btn float-left" @click.prevent="aboutCounter--"><i class="fa-solid fa-arrow-left"></i></button>
      <h3>About Diagnosis</h3>
      <div class="gridImage">
        <img src="@/assets/img/Hypochondriac (10).gif" alt="" width="200" height="200" class="img-fluid">
      </div>
      <p>DThe website takes care of the diagnosis by asking the patient some questions and helping him to find the part that he feel the pain on it, and through that it identifies the specialist doctor to treat him.</p>
      <button class="btn btn-next w-50 m-auto" @click.prevent="aboutCounter++">Next</button>
    </div>
    <div v-if="aboutCounter==2">
      <button class="btn float-left" @click.prevent="aboutCounter--"><i class="fa-solid fa-arrow-left"></i></button>
      <h3>About Medical analysis</h3>
      <div class="gridImage">
        <img src="@/assets/img/Medical prescription (1).gif" alt="" width="200" height="200" class="img-fluid">
      </div>
      <p>The website reads the medical analysis easier and faster instead of going to the doctor. In each analysis translates the results continuously, thus saving time and effort for the patient and the consultant doctor.</p>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      aboutCounter: 0,

    }
  },
}
</script>

<style>

</style>
