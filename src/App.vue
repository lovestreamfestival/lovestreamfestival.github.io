<template>

  <div id="app">
      <router-view />
  </div>

</template>

<script>
// import SearchComponent from "@/components/SearchComponent.vue";
// import DropdownMenu from "@/components/DropdownMenu.vue";
// import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
// import MegaMenu from "@/components/MegaMenu.vue";
// import ModalLogin from "@/components/ModalLogin.vue";
// import ModalRegister from "@/components/ModalRegister.vue";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

export default {
  name: "app",
  components: {
    // SearchComponent,
    // DropdownMenu,
    // MegaMenu,
    // ModalLogin,
    // ModalRegister,
    // LanguageSwitcher,
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style src="@/assets/css/tailwind.css" />
