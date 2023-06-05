<template>
  <div>
    <navbar />
    <div class="login-form">
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-md-block d-none">
            <img src="@/assets/img/Group 513552.png" class="img-fluid" alt="">
          </div>
          <div class="col-md-6">
            <form action="" class="bg-login">
              <h4>Login</h4>
              <p>Hello, Welcome Back To Your Account.</p>
              <div class="mt-4 mb-4">
                <label for="">Email Address</label>
                <input type="email" placeholder="EX.email@gmail.com" class="form-control">
              </div>
              <div class="mt-4 mb-4">
                <label for="">Password</label>
                <input type="password" placeholder="Enter your password" class="form-control">
              </div>
              <div class="d-flex" style="justify-content: space-evenly;">
                <div class="from-group">
                  <input type="checkbox" name="" id="remember">
                  <label for="remember">Remember Me</label>
                </div>
                <div class="forget">
                  <nuxt-link to="forgetpassword">Forget Password</nuxt-link>
                </div>
              </div>
              <button class="btn btn-login">Log in</button>
              <p class="text-center">Don't Have account? <nuxt-link to="/stepregister">Sign Up</nuxt-link></p>
            </form>
            <p class="text-center mt-2">--- OR ----</p>
            <div class="row mb-2">
              <div class="col-6">
                <button class="btn btn-loginSocial">
                  <i class="fa-brands fa-facebook-f"></i> Login with Facebook
                </button>
              </div>
              <div class="col-6">
                <button class="btn btn-loginSocial">
                  <i class="fa-brands fa-google"></i> Login with Google
                </button>
              </div>
            </div>
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
