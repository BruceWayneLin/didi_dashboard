<template>
    <div id="burger">
        <div class="icon" :class="{'toggleNavState': toggleNavState}" @click="toggleSideNav()">
            <div class="hamburger hamburger--v1 js-hamburger" :class="{'is-active': toggleNavState}">
                <div class="hamburger__bar"></div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'burger',
  props: {
  },
  data() {
    return {
        toggle: false
    }
  },
  methods: {
      toggleSideNav() {
        this.toggle = !this.toggle
        this.$store.dispatch('toggleNav', this.toggle)
      },
  },
  computed:  {
        toggleNavState() {
            return this.$store.state.control.toggleSide
        }
  },
  mounted() {
  }
}
</script>
