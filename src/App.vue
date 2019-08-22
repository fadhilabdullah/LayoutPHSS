<template>
  <div class="centered-container">
    <md-card>
      <md-content class="md-elevation-3">
        
        <div class="title">
          <img class="logo" src="https://cdn2.tstatic.net/jatim/foto/bank/images/pertamina_20180807_071843.jpg">        
        </div>

        <div class="form">
          <md-field>
            <label>E-mail</label>
            <md-input v-model="login.email" autofocus></md-input>
          </md-field>

          <md-field md-has-password>
            <label>Password</label>
            <md-input v-model="login.password" type="password"></md-input>
          </md-field>
        </div>

        <div class="actions md-layout md-alignment-center-space-between">
          <a href="/forgotpassword">Forgot password?</a>
          <md-button class="md-raised md-primary" @click="auth">Log in</md-button>
        </div>

        <div class="loading-overlay" v-if="loading">
          <md-progress-spinner md-mode="indeterminate" :md-stroke="2"></md-progress-spinner>
        </div>
      </md-content>
    </md-card>
  </div>
</template>

<script>
  export default {
  name: "App",
  data() {
    return {
      loading: false,
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    auth() {
      // your code to login user
      // this is only for example of loading
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    }
  }
};
</script>

<style lang="scss" scoped>
  .md-toolbar + .md-toolbar {
    margin-top: 16px;
  }

   .md-card {
    width: 350px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }

  .centered-container {
  background: lightslategrey;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  .title {
    text-align: center;
    margin-bottom: 30px;
    img {
      margin-bottom: 16px;
      max-width: 200px;
    }
  }
  .actions {
    .md-button {
      margin: 0;
    }
  }
  .form {
    margin-bottom: 60px;
  }

  .md-content {
    z-index: 1;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    position: relative;
  }

  .loading-overlay {
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }  
}
</style>