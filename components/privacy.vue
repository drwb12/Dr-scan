<template>
  <form action="">
    <div class="row">
      <div class="col-md-12 mt-4">
        <label for="" class="mb-3">Email Address</label>
        <div class="input-group mb-3">
          <input type="email" class="form-control" placeholder="name@gmail.com" aria-label="Recipient's username"
            aria-describedby="basic-addon2">
          <span class="input-group-text" id="basic-addon2" style="background:#fff;"><p style="color:#0E5C6D; padding: 0" class="m-0">@</p></span>
        </div>
      </div>
      <div class="col-md-12 mt-2">
        <label for="" class="mb-3">Mobile Number</label>
        <div class="mb-3">
          <VuePhoneNumberInput v-model="phoneNumber" />
        </div>
      </div>
      <div class="col-md-12 mt-2">
        <label for="" class="mb-3">Password</label>
        <div class="input-group mb-3">
          <input type="password" class="form-control">
        </div>
      </div>
      <div class="col-md-12">
        <nuxt-link to="" class="btn btn-send"><i class="fa-brands fa-google"></i>  Sign-up with google  </nuxt-link>
      </div>
      <div class="col-md-12">
        <nuxt-link to="" class="btn btn-send"><i class="fa-brands fa-facebook-f"></i> Sign-up with facebook   </nuxt-link>
      </div>

      <button type="submit" class="btn mt-4 btn-next w-25 ml-auto mb-4">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber:""
    }
  },
}
</script>

<style>

</style>
