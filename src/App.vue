<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" class="nav-background">
    <div class="logo">
      <b-navbar-brand href="#">Pertamina</b-navbar-brand>
    </div>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
   
   
    </b-collapse>
  </b-navbar>

  <b-container>
    <b-row align-h='center' class="mt-5">
      <b-col cols='5'>
          <b-card class="p-3">
            <div>
              <h3 class="mb-4">Login</h3>
              <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group id="input-group-1" label="Email address:" label-for="input-1"
                  >
                  <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email">
                  </b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                  <b-form-input id="input-2" type="password" v-model="form.password" required placeholder="Enter password"></b-form-input>
                </b-form-group>                

                <b-form-group id="input-group-4">
                  <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                    <b-form-checkbox value="remember">Remember me</b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>

                <div class="d-flex justify-content-between">
                  <div>
                    <b-button type="login" variant="primary">Login</b-button>
                  </div>  
                  <div>
                    <a href="#" v-b-modal.modal1>Forgot password?</a>
                  </div>
                  
                </div>
              </b-form>
             
            </div>
          </b-card>
      </b-col>
    </b-row>
  </b-container>

  </div>
</template>

<script>
  //import DashboardVue from './components/layout/Dashboard';

  export default {
    name: 'Login',    
    data() {
      return {
        form: {
          email: '',
          password: '',    
          checked: []
        },        
        passwordType: 'password',
        show: true,
        redirect: undefined
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''        
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>
  body {
    background: #EEF1F4;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
  }

  .nav-background {
    background: #353535;
  }
</style>