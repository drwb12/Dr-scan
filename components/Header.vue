<template>
  <div class="header mt-4">
      <div class="container">
        <div class="row">
          <div class="col-md-6 align-self-center">
            <p>Welcome To</p>
            <h2 class="h1">DR.SCAN</h2>
            <p class="desc">A website for helping you to read your medical analysis and understand it, and help you diagnosis your body
              and suggest you a doctor.</p>
              <div class="auth">
                <div class="row">
                  <div class="col-md-6">
                    <nuxt-link to="/login" class="btn btn-login">
                      Log-in
                    </nuxt-link>
                  </div>
                  <div class="col-md-6">
                    <nuxt-link to="/stepregister" class="btn btn-register">
                      Sign-up
                    </nuxt-link>
                  </div>
                </div>
                <h5 class="mt-4 text-center">---- OR ----</h5>
                <p class="text-center">continue without &nbsp;<nuxt-link to="/withoutregister"><h4 class="d-inline">Registertion</h4></nuxt-link></p>
              </div>
          </div>
          <div class="col-md-6">
            <img src="@/assets/img/header.png" class="img-fluid" alt="">
          </div>
        </div>
      </div>
      <img
        src="@/assets/img/Vector 7.png"
        alt=""
        class="img-fluid mb-4"
        style="filter: drop-shadow(#ccc 9px 0px 1px) blur(1px); width: 100%; transform: scaleY(-1);">
  </div>
</template>
