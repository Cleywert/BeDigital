<template>
  <b-navbar>
    <div class="container">
      <b-navbar-brand to="/">
        <b-img :src="require('@/assets/marca-bemol.svg')" height="50"></b-img>
      </b-navbar-brand>
      <div class="items-menu ml-auto">
        <b-dropdown v-if="logado" variant="link">
          <template #button-content>
          <b-avatar></b-avatar>
          <span class="nome-user">{{nome}}</span>
          </template>

          <b-dropdown-item>
            <router-link to="/user/edit">Editar Dados</router-link>
          </b-dropdown-item>
          <b-dropdown-item @click="logoff">Sair</b-dropdown-item>
        </b-dropdown>
        <router-link v-else to="/login" class="cont-avatar">
          <b-avatar></b-avatar>
          <span>Fazer login</span>
        </router-link>
      </div>
    </div>
  </b-navbar>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
    name: 'Menu',
    data(){
      return{
        user: []
      }
    },
    computed:{
      ...mapState(['logado']),
      nome(){
        return this.user.nome.replace(/ .*/,"");
      }
    },
    methods:{
      ...mapMutations(['SET_LOGADO']),
      set_logado(payload){
        this.SET_LOGADO(payload);
      },
      getUserLog(){
        this.user = JSON.parse(window.localStorage.userLog);
      },
      logoff(){
        window.localStorage.token = "";
        window.localStorage.userLog = "";
        this.set_logado(false);
        this.$router.push({name: 'Loja'});
      }
    },
    created(){
      this.getUserLog();
      if(window.localStorage.token!="" || window.localStorage.token!=undefined)
        this.set_logado(true);
    }
};
</script>

<style>
.navbar {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
}
.cont-avatar {
  display: flex;
  align-items: center;
}
.cont-avatar span {
  margin-left: 8px;
}
.btn-link{
  color: #000 !important;
}
.btn-link:hover{
  text-decoration: none !important;
}
.nome-user{
  color: #000;
  margin-left: 8px;
}
</style>