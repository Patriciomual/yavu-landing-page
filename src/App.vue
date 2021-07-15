<template>
  <div>
    <navComponent class="backNav"></navComponent>
    <router-view></router-view>
  </div>
</template>

<script>
import navComponent from './components/nav.vue'
export default {
  components: {
    navComponent
  },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
.backNav{
  background: rgb(138,137,140);
  background: -moz-linear-gradient(156deg, rgba(138,137,140,1) 0%, rgba(255,255,255,0.9528011033514968) 100%);
  background: -webkit-linear-gradient(156deg, rgba(138,137,140,1) 0%, rgba(255,255,255,0.9528011033514968) 100%);
  background: linear-gradient(156deg, rgba(138,137,140,1) 0%, rgba(255,255,255,0.9528011033514968) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#8a898c",endColorstr="#ffffff",GradientType=1); 
}
</style>
