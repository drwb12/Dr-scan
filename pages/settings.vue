<template>
  <div>
    <navbar :activePage="activePage" />
    <div class="sidebar rounded-4">
      <img src="@/assets/img/setting.png" class="img-fluid d-none d-sm-block mb-3 mt-3 m-auto" alt="">
      <div class="d-flex w-75 m-auto" style="flex-wrap: wrap;">
        <button class="btn btn-sidebar d-flex mt-2" @click.prevent="counter = 0" :class="counter == 0 ? 'active' : ''">
          <i class="fa-regular fa-user"></i>
          <h3>
            Account info
            <p class="d-none d-md-block m-0">name, age, gender, ...etc</p>
          </h3>
        </button>
        <button class="btn btn-sidebar d-flex mt-2" @click.prevent="counter = 1" :class="counter == 1 ? 'active' : ''">
          <i class="fa-solid fa-user-shield"></i>
          <h3>
            Privacy
            <p class="d-none d-md-block m-0">email, password, mobile number</p>
          </h3>
        </button>
        <button class="btn btn-sidebar d-flex mt-2" @click.prevent="counter = 2" :class="counter == 2 ? 'active' : ''">
          <i class="fa-regular fa-credit-card"></i>
          <h3>
            payment
            <p class="d-none d-md-block m-0">Credit Card</p>
          </h3>
        </button>
        <button class="btn btn-sidebar d-flex mt-2" @click.prevent="counter = 3" :class="counter == 3 ? 'active' : ''">
          <i class="fa-solid fa-circle-info"></i>
          <h3>
            About Us
          </h3>
        </button>
        <button class="btn btn-sidebar d-flex mt-2" @click.prevent="counter = 4" :class="counter == 4 ? 'active' : ''">
          <i class="fa-regular fa-star"></i>
          <h3>
            Rate US
          </h3>
        </button>
        <button class="btn btn-sidebar d-flex mt-2" @click.prevent="counter = 5" :class="counter == 5 ? 'active' : ''">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
          <h3>
            Logout
          </h3>
        </button>
      </div>

    </div>
    <div class="contentSetting">
      <accountInfo v-if="counter == 0" />
      <privacy v-if="counter == 1" />
      <payment v-if="counter == 2" />
      <about v-if="counter == 3" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      phoneNumber: '',
      showImage: null,
      activePage: 'setting'
    }
  },
}
</script>

<style></style>
