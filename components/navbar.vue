<template>
  <div>
    <b-navbar toggleable="lg">
      <b-navbar-brand href="#"><img src="@/assets/img/logo.png" class="img-fluid" alt=""></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <li class="nav-item">
            <nuxt-link class="nav-link" :class="activePage=='Home'? 'active': ''" to="/">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :class="activePage==''? 'active': ''" to="">About Us</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :class="activePage==''? 'active': ''" to="">Services</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :class="activePage=='diagnosis'? 'active': ''" to="/diagnosis">Diagnosis</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :class="activePage=='medical'? 'active': ''" to="medical">Medical Analysis</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :class="activePage=='save'? 'active': ''" to="save">Saved Resulats</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :class="activePage=='setting'? 'active': ''" to="settings">Settings</nuxt-link>
          </li>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-right-from-bracket"></i></button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- <div class="personHolder">
      <img src="@/assets/img/person.png" class="img-fluid personImage" alt="">
      <img src="@/assets/img/f5ed.svg" class="f5ad part" @click.prevent="seletPart($event)" data-select="1" alt="">
    </div> -->
  </div>
</template>
<script>
export default {
  props:['activePage'],
  methods: {
    // seletPart(event){
    //   console.log(event.srcElement.dataset.select)
    // }
  },
}
</script>
