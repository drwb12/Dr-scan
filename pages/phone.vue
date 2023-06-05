<template>
  <div>
    <navbar />
    <div class="forget-chooce">
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-md-block d-none">
            <img src="@/assets/img/Group 513464.png" class="img-fluid" alt="">
          </div>
          <div class="col-md-6 align-self-center">
            <form action="">
              <h3>Forget your password ?</h3>
              <p>Don’t Worry!  Its Happens. Please choose one option to reset your account.</p>
              <label for="">Phone Number</label>
              <VuePhoneNumberInput v-model="phoneNumber" />
            <button class="btn btn-send" @click.prevent="sendMsg()">Send Code</button>
            </form>

            <p class="btn-login text-center mt-3">Remember Password <nuxt-link to="/login">Login</nuxt-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    phoneNumber:''
  }
},
methods: {
  sendMsg(){
    if (this.phone=='') {
      this.$toast.error('Please Enter Your phone', {
              position: 'top-right',
              timeout: 2000,
              closeOnClick: true,
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              draggable: true,
              draggablePercent: 0.6,
              showCloseButtonOnHover: false,
              hideProgressBar: true,
              closeButton: 'button',
              icon: 'fas fa-bomb',
              rtl: false
            })
    }else{
      var phoneNumber=this.code + this.phone
      localStorage.setItem('phone',phoneNumber)
      this.$router.push(`checkphone`)

    }
  }

},
}
</script>

<style>

</style>
