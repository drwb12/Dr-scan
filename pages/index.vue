<template>
  <div style="background: #fff">
    <navbar :activePage="activePage" />
    <Header></Header>
    <aboutdr />
    <Carousel />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      activePage: "Home",
    };
  },
};
</script>
<style scoped>
body {
  background: #fff !important;
}
</style>
