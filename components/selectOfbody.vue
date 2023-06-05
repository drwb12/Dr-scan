<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h4>Choose the part of the body that you feel pain on it.</h4>
        </div>
        <div class="col-md-4 body" style="width: fit-content; position: relative;">
          <img src="@/assets/img/person.png" class="img-fluid" v-if="rotate==false" alt="">
          <img src="@/assets/img/head.png" alt="" class="img-fluid head"  v-if="rotate==false" data-value="head and neck" @click.prevent="choosesick($event)">
          <img src="@/assets/img/chest.png" alt="" class="img-fluid chest"  v-if="rotate==false" data-value="chest" @click.prevent="choosesick($event)">
          <img src="@/assets/img/hand.svg" alt="" class="img-fluid hand"  v-if="rotate==false" data-value="Upper arms" @click.prevent="choosesick($event)">
          <img src="@/assets/img/rest.svg" alt="" class="img-fluid rest"  v-if="rotate==false" data-value="Fore arm" @click.prevent="choosesick($event)">
          <img src="@/assets/img/fingre.svg" alt="" class="img-fluid fingre"  v-if="rotate==false" data-value="Hands" @click.prevent="choosesick($event)">
          <img src="@/assets/img/foot.svg" alt="" class="img-fluid foot"  v-if="rotate==false" data-value="foot" @click.prevent="choosesick($event)">
          <img src="@/assets/img/kasaba.svg" alt="" class="img-fluid kasaba"  v-if="rotate==false" data-value="Shin" @click.prevent="choosesick($event)">
          <img src="@/assets/img/neez.svg" alt="" class="img-fluid neez"  v-if="rotate==false" data-value="Knee" @click.prevent="choosesick($event)">
          <img src="@/assets/img/f5ed.svg" alt="" class="img-fluid f5ed"  v-if="rotate==false" data-value="thighs" @click.prevent="choosesick($event)">
          <img src="@/assets/img/abovef5ed.svg" alt="" class="img-fluid abovef5ed"  v-if="rotate==false" data-value="Lower abdomen" @click.prevent="choosesick($event)">
          <img src="@/assets/img/lowerpacks.png" alt="" class="img-fluid lowerpacks"  v-if="rotate==false" data-value="Middle abdomen" @click.prevent="choosesick($event)">
          <img src="@/assets/img/upperpaks.png" alt="" class="img-fluid upperpaks"  v-if="rotate==false" data-value="Upper abdomen" @click.prevent="choosesick($event)">
          <img src="@/assets/img/rotatePerson.png" class="img-fluid" v-if="rotate==true" alt="">
          <img src="@/assets/img/1.svg" class="img-fluid back" v-if="rotate==true" alt="" style="position: absolute;bottom: 12%;left: 41.5%;"  data-value="calf" @click.prevent="choosesick($event)">
          <img src="@/assets/img/2.svg" class="img-fluid back" v-if="rotate==true" alt="" style="position: absolute;bottom: 4%;left: 41.5%;"   data-value="Heel" @click.prevent="choosesick($event)">
          <img src="@/assets/img/3.svg" class="img-fluid back" v-if="rotate==true" alt="" style="position: absolute;bottom: 46%;left: 41.5%;"  data-value="hip and buttock" @click.prevent="choosesick($event)">
          <img src="@/assets/img/4.svg" class="img-fluid back" v-if="rotate==true" alt="" style="position: absolute;bottom: 35%;left: 41.5%;"  data-value="thigh" @click.prevent="choosesick($event)">
          <img src="@/assets/img/5.svg" class="img-fluid back" v-if="rotate==true" alt="" style="position: absolute;bottom: 81%;left: 43.5%;"  data-value="Back Head and Nape" @click.prevent="choosesick($event)">
          <img src="@/assets/img/6.svg" class="img-fluid back" v-if="rotate==true" alt="" style="position: absolute;bottom: 67%;left: 32.5%;"  data-value="Back upper Arm" @click.prevent="choosesick($event)">
          <img src="@/assets/img/7.svg" class="img-fluid back" v-if="rotate==true" alt="" style="position: absolute;bottom: 58%;left: 0;"      data-value="Elbow" @click.prevent="choosesick($event)">
          <img src="@/assets/img/8.svg" class="img-fluid back" v-if="rotate==true" alt="" style="position: absolute;bottom: 52%;left: 16%;"    data-value="fingre back" @click.prevent="choosesick($event)">
          <img src="@/assets/img/9.svg" class="img-fluid back" v-if="rotate==true" alt="" style="position: absolute;bottom: 57%;left: 39%;"    data-value="Back" @click.prevent="choosesick($event)">
          <img src="@/assets/img/10.svg" class="img-fluid back" v-if="rotate==true" alt="" style="position: absolute;bottom:29%;left: 42%;"    data-value="Back Knee" @click.prevent="choosesick($event)">
        </div>
        <div class="col-md-4" style="width: fit-content;">
          <div class="d-block mt-3">
            <button type="button" class="btn d-block mb-4" @click.prevent="rotate = !rotate"><i class="fa-solid fa-rotate-left"
                style="color: #3a3a3a;"></i> Rotate</button>
            <button type="button" class="btn d-block" @click.prevent="$emit('counterbody', 20)"><i class="fa-solid fa-list-ul"
                style="color: #3a3a3a;"></i> Body Items</button>
          </div>
        </div>
      </div>
      <button class="btn-next btn mt-4 w-15 d-block ml-auto" @click.prevent="next()">Next</button>
    </div>
  </div>

</template>

<script>
export default {
data() {
  return {
    rotate:false,
    counter: 1,
    sickSelect:null
  }
},
methods: {
  choosesick(event){
      console.log(event)
      for (let i = 0; i < event.srcElement.offsetParent.children.length; i++) {
        event.srcElement.offsetParent.children[i].classList.remove("opacity-1")
      }
      event.srcElement.classList.add("opacity-1")
      this.sickSelect=event.srcElement.dataset.value
      console.log(event.srcElement.dataset.value)
      this.$emit('sickSelect', this.sickSelect)
    },
    next(){
      this.$emit('counter', 1)
    }

},
}
</script>

<style>

</style>
