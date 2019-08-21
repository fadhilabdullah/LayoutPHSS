<template>
  <div class="page-container md-layout-column">
    <md-app>
      <md-app-toolbar class="md-primary" md-elevation="0">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Pertamina</span>

        <div class="md-toolbar-section-end">
          <md-button @click="showSidepanel = true"><md-icon>person</md-icon> User </md-button>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-drawer class="md-right" :md-active.sync="showSidepanel">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">Contoh</span>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <span class="md-list-item-text">Abbey Christansen</span>

            <md-button class="md-icon-button md-list-action">
              <md-icon class="md-primary">chat_bubble</md-icon>
            </md-button>
          </md-list-item>

          <md-list-item>
            <span class="md-list-item-text">Alex Nelson</span>

            <md-button class="md-icon-button md-list-action">
              <md-icon class="md-primary">chat_bubble</md-icon>
            </md-button>
          </md-list-item>

          <md-list-item>
            <span class="md-list-item-text">Mary Johnson</span>

            <md-button class="md-icon-button md-list-action">
              <md-icon>chat_bubble</md-icon>
            </md-button>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <div class="container-fluid">          
          <md-button class="md-primary md-raised" @click="showDialog = true">Create new</md-button>
          <hr />
            <div>
              <md-table md-card>
                <md-table-toolbar>
                  <h1 class="md-title">Employee</h1>
                </md-table-toolbar>

                <md-table-row>
                  <md-table-head md-numeric>No</md-table-head>
                  <md-table-head>Name</md-table-head>
                  <md-table-head>Gender</md-table-head>
                  <md-table-head>Address</md-table-head>
                  <md-table-head>Email</md-table-head>
                  <md-table-head>telephone</md-table-head>
                </md-table-row>

                <md-table-row>
                  <md-table-cell md-numeric>1</md-table-cell>
                  <md-table-cell>Fadhil Abdullah H</md-table-cell>
                  <md-table-cell>Male</md-table-cell>
                  <md-table-cell>Kuta Bumi, Tangerang - Banten</md-table-cell>
                  <md-table-cell>fadhilabdullah93@gmail.com</md-table-cell>
                  <md-table-cell>08997220843</md-table-cell>
                </md-table-row>
              </md-table>
            </div>
        </div>
        <md-dialog :md-active.sync="showDialog">
          <md-dialog-title>Create Employee</md-dialog-title>

          <form novalidate class="md-layout" @submit.prevent="validateUser">
            <md-card class="md-layout-item md-size-100 md-small-size-100">
              
              <md-card-content>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('firstName')">
                      <label for="first-name">First Name</label>
                      <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" :disabled="sending" />
                      <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>
                      <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('lastName')">
                      <label for="last-name">Last Name</label>
                      <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" :disabled="sending" />
                      <span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
                      <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
                    </md-field>
                  </div>
                </div>

                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('gender')">
                      <label for="gender">Choose your gender</label>
                      <md-select name="gender" id="gender" v-model="form.gender" md-dense :disabled="sending">                        
                        <md-option value="M">Male</md-option>
                        <md-option value="F">Female</md-option>
                      </md-select>
                      <span class="md-error">The gender is required</span>
                    </md-field>
                  </div>
                </div>

                <md-field :class="getValidationClass('address')">
                  <label for="address">Address</label>
                  <md-textarea type="address" name="address" id="address" autocomplete="address" v-model="form.address" md-autogrow :disabled="sending" />
                  <span class="md-error" v-if="!$v.form.address.required">The address is required</span>
                  <span class="md-error" v-else-if="!$v.form.address.maxlength">Invalid address</span>
                </md-field>

                <md-field :class="getValidationClass('email')">
                  <label for="email">Email</label>
                  <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
                  <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                  <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
                </md-field>

                <md-field :class="getValidationClass('telephone')">
                  <label for="telephone">telephone</label>
                  <md-input type="number" name="telephone" id="telephone" autocomplete="telephone" v-model="form.telephone" :disabled="sending" />
                  <span class="md-error" v-if="!$v.form.telephone.required">The telephone is required</span>
                  <span class="md-error" v-else-if="!$v.form.telephone.minLength">Invalid telephone</span>
                </md-field>
              </md-card-content>

              <md-progress-bar md-mode="indeterminate" v-if="sending" />

              <md-card-actions>
                <md-button type="submit" class="md-primary" :disabled="sending">Create</md-button>
                <!-- <md-button type="cancel" class="md-cancel md-accent">Cancel</md-button> -->
              </md-card-actions>
            </md-card>

            <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
          </form>
        </md-dialog>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  export default {
    name: 'Dashboard',
    mixins: [validationMixin],
    data: () => ({
      menuVisible: false,
      showDialog: false,
      form: {
        firstName: null,
        lastName: null,
        gender: null,
        address: null,
        email: null,
        telephone: null,
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        firstName: {
          required,
          minLength: minLength(3)
        },
        lastName: {
          required,
          minLength: minLength(3)
        },
        gender: {
          required
        },
        address: {
          required,
          maxlength: maxLength(100)
        },
        email: {
          required,
          email
        },
        telephone: {
          required,
          minLength: minLength(11)
        }
      }
    },
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      },
       getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.firstName = null
        this.form.lastName = null
        this.form.gender = null
        this.form.address = null
        this.form.email = null
        this.form.telephone = null
      },
      saveUser () {
        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.form.firstName} ${this.form.lastName}`
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-app {
    min-height: 350px;
    border: 1px solid rgba(#000, .12);
  }

  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .page-container {
    min-height: 300px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }  

  .md-content {
    padding: 16px;
  }
</style>
