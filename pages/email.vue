<template>
  <div>
    <navbar />
    <div class="forget-chooce">
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-md-block d-none">
            <img src="@/assets/img/Group 513551.png" class="img-fluid" alt="">
          </div>
          <div class="col-md-6 align-self-center">
            <form action="">
              <h3>Forget your password ?</h3>
              <p>Don’t Worry!  Its Happens. Please choose one option to reset your account.</p>
              <label for="" class="mb-3">E-mail Address</label>
              <input type="email" name="" class="form-control" id="" v-model="email">
              <button class="btn btn-send" @click.prevent="sendMsg()">Send A Message</button>
            </form>

            <p class="btn-login text-center mt-3">Remember Password <nuxt-link to="">Login</nuxt-link></p>
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
    email:''
  }
},
methods: {
  sendMsg(){
    if (this.email=='') {
      this.$toast.error('Please Enter Your E-mail', {
              position: 'top-right',
              timeout: 2000,
              closeOnClick: true,
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              draggable: true,
              draggablePercent: 0.6,
              showCloseButtonOnHover: false,
              hideProgressBar: false,
              closeButton: 'button',
              icon: 'fas fa-bomb',
              rtl: false
            })
    }else{
      localStorage.setItem('email',this.email)
      this.$router.push(`checkEmail`)
    }
  }
},
}
</script>

<style>

</style>
