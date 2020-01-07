<template>
  <form @submit.prevent="login" class="container">
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input type="email" class="input" v-model="email" placeholder="Email" value="haha@mail.com">
      </div>
    </div>
    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input type="password" class="input" v-model="password">
      </div>
    </div>
    <p v-if="error">{{ error }}</p>
    <div class="control">
      <button class="button is-primary" type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    login () {
      let auth = this.$store.state.auth
      if (this.email !== auth.user || this.password !== auth.password) {
        this.error = 'Login failed. Your Email or password is wrong.'
      } else {
        sessionStorage.setItem('authenticated', true)
        this.$router.push('/admin/product')
      }
    }
  }
}
</script>

<style scoped>

</style>
