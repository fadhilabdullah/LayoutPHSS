<template>
  <div class="page-container md-layout-column">
    <md-app>
      <md-app-toolbar class="md-primary" md-elevation="0">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Pertamina</span>

        <div class="md-toolbar-section-end">
          <md-button @click="showSidepanel = true"> User <md-icon>person</md-icon></md-button>
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
          <span class="md-title">Favorites</span>
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
          <b-button variant="primary" size="sm" id="show-btn" @click="showModal">Create new</b-button>
          <hr />
            <table class="table table-hover" id="TableEmployee">
              <thead>
                  <tr>
                      <th> No. </th>                                
                      <th> Nama </th>
                      <th> Alamat </th>
                      <th> Telepon </th>
                      <th> Action </th>
                  </tr>
              </thead>
              <tbody class="tbody"></tbody>
          </table>
        </div>
        <b-modal ref="myModal" hide-footer title="Create Employee">
          <form ref="form">
            <b-form-group :state="namaState" label="Nama" label-for="nama-input" invalid-feedback="Nama is required">
              <b-form-input id="nama-input" v-model="nama" :state="namaState" required></b-form-input>
            </b-form-group>
            <b-form-group :state="alamatState" label="Alamat" label-for="alamat-input" invalid-feedback="Alamat is required">
              <b-form-input id="alamat-input" v-model="alamat" :state="alamatState" required></b-form-input>
            </b-form-group>
            <b-form-group :state="teleponState" label="Telepon" label-for="telepon-input" invalid-feedback="Telepon is required">
              <b-form-input id="telepon-input" v-model="telepon" :state="teleponState" required></b-form-input>
            </b-form-group>
          </form>
          <b-button size="sm" variant="success" @click="hideModal">Create</b-button> |
          <b-button size="sm" variant="danger" @click="hideModal">Cancel</b-button>
        </b-modal>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  export default {
    name: 'PersistentMini, Temporary, MaterialIcons',
    data: () => ({
      menuVisible: false,
      showSidepanel: false
    }),
    
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      },
       showModal() {
        this.$refs['myModal'].show()
      },
      hideModal() {
        this.$refs['myModal'].hide()
      },
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.namaState = valid ? 'valid' : 'invalid'
        this.alamatState = valid ? 'valid' : 'invalid'
        this.teleponState = valid ? 'valid' : 'invalid'
        return valid
      },
      resetModal() {
        this.nama = ''
        this.alamat = ''
        this.telepon = ''
        this.namaState = null
        this.alamatState = null
        this.teleponState = null
      },
      // handleOk(bvModalEvt) {
      //   // Prevent modal from closing
      //   bvModalEvt.preventDefault()
      //   // Trigger submit handler
      //   this.handleSubmit()
      // },
      // handleSubmit() {
      //   // Exit when the form isn't valid
      //   if (!this.checkFormValidity()) {
      //     return
      //   }
      //   // Push the name to submitted names
      //   this.submittedNames.push(this.name)
      //   // Hide the modal manually
      //   this.$nextTick(() => {
      //     this.$refs.modal.hide()
      //   })
      // }    
    }
  }
</script>

<style lang="scss" scoped>
  .md-app {
    min-height: 350px;
    border: 1px solid rgba(#000, .12);
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
