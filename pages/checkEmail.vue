<template>
  <div>
    <div v-if="email">
      <navbar />
      <div class="forget-chooce">
        <div class="container">
          <div class="row">
            <div class="col-md-6 d-md-block d-none">
              <img src="@/assets/img/Reset password-pana 2.png" class="img-fluid" alt="">
            </div>
            <div class="col-md-6 align-self-center">
              <form action="">
                <h3>Check your email</h3>
                <p>We’ve sent a code to {{ email }}</p>
                <input type="text" name="" class="form-control" placeholder="Enter Code" v-model="code" id="">
                <button class="btn btn-send" @click.prevent="sendCode()">Send Code</button>
              </form>

              <p class="btn-login text-center mt-3">I didn’t receive a code <button class="btn text-dark">Resend</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <img src="@/assets/img/No data.gif" alt="" class="img-fluid d-block m-auto">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      code: '',
    }
  },
  beforeMount() {
    this.email = localStorage.email
  },
  methods: {
    sendCode() {
      if (this.code == '') {
        this.$toast.error('Please Enter Your Code', {
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

      } else if (this.code == 123456) {
        this.$toast.success('Thank you ♥', {
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
          icon: 'fas fa-check',
          rtl: false
        })
        localStorage.setItem('code', this.code)
        this.$router.push(`resetpassword`)

      } else {
        this.$toast.error('Please Enter Correct Code', {
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

      }
    }
  },
}
</script>

<style></style>
