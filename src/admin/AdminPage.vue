<template>
  <section id="adminpage">
    <SideBar />
    <router-view></router-view>
  </section>
</template>

<script>
import SideBar from "./SideBar.vue";

export default {
  name: "AdminPage",
  component: {
    SideBar,
  },
};
</script>
