<template>
  <div class="confirmPassword">
    <b-navbar toggleable="lg">
      <b-navbar-brand href="#"><img src="@/assets/img/Mask group1 1.png" class="img-fluid" alt=""></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="">About Us</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="">Services</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="">Diagnosis</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="">Medical Analysis</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="">Saved Resulats</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="">Settings</nuxt-link>
          </li>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-right-from-bracket"></i></button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="content text-center text-light">
      <img src="@/assets/img/confirm.svg" class="img-fluid d-block m-auto py-4" alt="">
      <h3 class="text-lightmt-4 mb-4">Password Changed</h3>
      <p class="text-lightmt-4 mb-4">Your password has been changed successfully</p>
      <nuxt-link to="/login" class="btn btn-login">Go Back To login</nuxt-link>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .navbar {
    box-shadow: 0px 0px 39px 4px rgba(231, 231, 231, 0.12);
    border-radius: 24px 24px 0px 0px;
  }
  .navbar .nav-item .nav-link{
    color: #fff;
  }
</style>
