<template>
  <section id="cont-login">
    <section class="container">
      <div class="cont-form">
        <b-row>
          <b-col sm="8">
            <h1 class="titulo">Entrar na BeDigital</h1>
            <transition name="alert">
              <b-alert v-model="senhaErr" variant="danger" dismissible>
                Senha errada, verifique suas credenciais
              </b-alert>
            </transition>
            <b-form @submit="logar">
              <b-form-group label="CPF">
                <b-form-input
                  type="text"
                  name="cpf"
                  v-model="cpf"
                  v-mask="'###.###.###-##'"
                  placeholder="Ex: 000.000.000-00"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Senha">
                <b-form-input
                  type="password"
                  name="senha"
                  v-model="senha"
                  placeholder="••••••••"
                  required
                ></b-form-input>
              </b-form-group>

              <div class="cont-btn">
                <router-link to="#" class="recSenha"
                  >Esqueceu a senha?</router-link
                >
                <b-button type="submit" variant="success">Login</b-button>
              </div>
            </b-form>
            <hr />
            <div class="criar-conta">
              <transition name="alert">
                <b-alert :show="semConta" variant="danger" dismissible>
                  Este CPF não está cadastrado! Para criar uma conta, clique no
                  link abaixo
                </b-alert>
              </transition>
              <div class="link-criar-conta">
                <p>Ainda não tem uma conta Bemol?</p>
                <router-link to="/user/new" class="btn btn-light"
                  >Criar conta</router-link
                >
              </div>
            </div>
          </b-col>
          <b-col class="cont-img">
            <b-img :src="require('@/assets/login.svg')" fluid></b-img>
          </b-col>
        </b-row>
      </div>
    </section>
  </section>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      cpf: "",
      senha: "",
      semConta: false,
      senhaErr: false,
    };
  },
  methods: {
    ...mapMutations(["SET_LOGADO"]),
    set_logado() {
      this.SET_LOGADO(true);
    },
    logar(event) {
      event.preventDefault();

      axios
        .get(`http://localhost:8080/login/${this.cpf}/${this.senha}`)
        .then((resposta) => {
          window.localStorage.token = resposta.data.token;
          window.localStorage.userLog = JSON.stringify(resposta.data.user);
          this.$router.push({ name: "Loja" });
        })
        .catch((err) => {
          if (err.response.status == 400) this.senhaErr = true;
          else this.semConta = true;
        });
    },
  },
};
</script>

<style scoped>
button {
  margin-top: 16px;
}

.cont-img {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.recSenha {
  font-size: 0.9em;
}
.cont-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.criar-conta p {
  font-size: 1.2em;
  margin-bottom: 0;
  margin-right: 8px;
}
.criar-conta a {
  color: #007bff;
}
.link-criar-conta{
  display: flex;
  align-items: center;
}

.alert-enter,
.alert-leave-to {
  opacity: 0.5;
  transform: translate3d(0, -20px, 0);
}
.alert-enter-active,
.alert-leave-active {
  transition: all 0.8s;
}

@media only screen and (max-width: 700px) {
  .cont-img {
    margin-top: 24px;
  }
}
</style>