<template>
  <div>
    <h2>Dear Customer</h2>
    <h3 style="color: #6B6B6B;">
      If you login without registering, you will lose some of the application's
      advantages,
      <br>
      So we recommend that you log in</h3>
      <div class="row">
        <div class="col-5">
          <nuxt-link to="/" class="btn btn-prev mt-4">
            Cancel
          </nuxt-link>

        </div>
        <div class="col-1"></div>
        <div class="col-5">
          <button @click="$emit('add', 1)" class="btn btn-next mt-4">
            Continue
          </button>
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
