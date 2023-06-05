<template>
  <div>
    <navbar />
    <div class="forget-chooce">
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-md-block d-none">
            <img src="@/assets/img/Group 513553.png" class="img-fluid" alt="">
          </div>
          <div class="col-md-6 align-self-center">
            <h3>Forget your password ?</h3>
            <p>Don’t Worry!  Its Happens. Please choose one option to reset your account.</p>
            <nuxt-link to="register" class="btn btn-send">Create new account </nuxt-link>
            <nuxt-link to="" class="btn btn-send"><i class="fa-brands fa-google"></i>  Sign-up with google  </nuxt-link>
            <nuxt-link to="" class="btn btn-send"><i class="fa-brands fa-facebook-f"></i> Sign-up with facebook   </nuxt-link>
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
