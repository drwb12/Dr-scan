<template>
  <div>
    <div v-if="code">
      <navbar />
      <div class="forget-chooce">
        <div class="container">
          <div class="row">
            <div class="col-md-6 d-md-block d-none">
              <img src="@/assets/img/Group 513551.png" class="img-fluid" alt="">
            </div>
            <div class="col-md-6 align-self-center">
              <form action="">
                <h3>Reset your password</h3>
                <p>Use at least 8 characters,including both numbers and letters</p>
                <div>
                  <label for="" class="mb-4 mt-4">New Password</label>
                  <div class="input-group">
                    <input :type="showPassword?'text':'password'" class="form-control" v-model="password" />
                    <!-- <input v-else type="password" class="form-control" v-model="password"> -->
                    <button class="input-group-text btn" type="button" @click="toggleShow" id="basic-addon2">
                      <!-- <i class="fa-regular" :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i> -->
                      <i class="fa-regular" :class="showPassword?'fa-eye-slash':'fa-eye'"></i>

                    </button>
                  </div>
                </div>
                <div>
                  <label for="" class="mb-4 mt-4">Confirm New Password</label>
                  <div class="input-group">
                    <input :type="reshowPassword?'text':'password'" class="form-control" v-model="repassword" />
                    <button class="input-group-text btn" type="button" @click="toggleShowrepassword" id="basic-addon2">
                      <i class="fa-regular" :class="reshowPassword?'fa-eye-slash':'fa-eye'"></i>
                      <!-- <i class="fa-regular" :class="{ 'fa-eye-slash': reshowPassword, 'fa-eye': !reshowPassword }"></i> -->
                      </button>
                  </div>
                </div>
                <button class="btn btn-send">Done</button>
              </form>
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
      password: '',
      repassword: '',
      showPassword: false,
      reshowPassword: false,
      code: null
    }
  },
  beforeMount() {
    this.code = localStorage.code

  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    toggleShowrepassword() {
      this.reshowPassword = !this.reshowPassword;
    },
  },
}
</script>

<style></style>
