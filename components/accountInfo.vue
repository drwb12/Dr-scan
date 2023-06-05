<template>
  <form action="">
    <div class="row">
      <div class="col-md-6 mt-4">
        <label for="" class="mb-3">First Name</label>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="name@gmail.com" aria-label="Recipient's username"
            aria-describedby="basic-addon2">
          <span class="input-group-text" id="basic-addon2"><i class="fa-solid fa-user-pen"
              style="color:#0E5C6D"></i></span>
        </div>
      </div>
      <div class="col-md-6 mt-4">
        <label for="" class="mb-3">Last Name</label>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="name@gmail.com" aria-label="Recipient's username"
            aria-describedby="basic-addon2">
          <span class="input-group-text" id="basic-addon2"><i class="fa-solid fa-user-pen"
              style="color:#0E5C6D"></i></span>
        </div>
      </div>
      <div class="col-md-12 mt-2">
        <label for="" class="mb-3">Age</label>
        <div class="input-group mb-3 datepicker">
          <DatePicker v-model="selectedDate" id="date" placeholder="dd/MM/YYYY"  input-class="form-control" />
          <label for="date" class="input-group-text" id="basic-addon2">
            <i class="fa-solid fa-calendar-days" style="color:#0E5C6D"></i>
          </label>
        </div>
      </div>
      <div class="col-md-12 mt-2 gender">
        <label for="" class="mb-3">Your Gender</label>
        <div class="d-flex mb-3 justify-content-space-evenly">
          <div class="w-45">
            <input type="radio" name="gender" id="Male" value="Male">
            <label for="Male" class="w-100">Male</label>
          </div>
          <div class="w-45">
            <input type="radio" name="gender" id="Female" value="Female">
            <label for="Female" class="w-100">Female</label>
          </div>
        </div>
      </div>
      <div class="col-md-12 mt-2 cigaretes">
        <label for="" class="mb-3">Do you smoke cigaretes ?</label>
        <div class="d-flex mb-3 justify-content-space-evenly">
          <div class="w-45">
            <input type="radio" name="cigaretes" id="yes" value="yes">
            <label for="yes" class="w-100">yes</label>
          </div>
          <div class="w-45">
            <input type="radio" name="cigaretes" id="No" value="No">
            <label for="No" class="w-100">No</label>
          </div>
        </div>
      </div>
      <div class="col-md-12 mt-2 ">
        <label for="" class="mb-3">Do you suffer from any disease ?</label>
        <label for="" class="mb-3 text-danger float-right"> BLank *</label>
        <input type="text" class="form-control" placeholder="ex. I suffer from diabetes  ...... ">
      </div>
      <button type="submit" class="btn mt-4 btn-next w-25 ml-auto mb-4">Submit</button>
    </div>
  </form>

</template>

<script>
export default {
data() {
  return {
    selectedDate:''
  }
},
}
</script>

<style>

</style>
