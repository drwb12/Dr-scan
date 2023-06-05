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
            <h3>Forget your password ?</h3>
            <p>Don’t Worry!  Its Happens. Please choose one option to reset your account.</p>
            <nuxt-link to="email" class="btn btn-send">Send An E-mail</nuxt-link>
            <nuxt-link to="phone" class="btn btn-send">Send A Message</nuxt-link>
            <p class="btn-login text-center mt-3">Remember Password <nuxt-link to="">Login</nuxt-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
