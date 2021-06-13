<template>
  <section id="edit-dados">
    <Menu></Menu>
    <main class="container">
      <!-- Alerta -->
      <b-alert
        :variant="variant"
        :show="dismissCountDown"
        @dismissed="dismissCountDown = 0"
        @dismiss-count-down="countDownChanged"
        dismissible
      >
        <p>
          {{ msgAlert }}
        </p>
        <b-progress
          :variant="variant"
          :max="dismissSecs"
          :value="dismissCountDown"
          height="2px"
        ></b-progress>
      </b-alert>

      <section class="cont-form">
        <b-row>
          <b-col>
            <!-- Controle do formulário -->
            <div class="cont-etapa">
              <div class="etapa etapa-ativa" @click="setEtapa(1)">
                <div class="circulo">1</div>
                <span>Informações Pessoais</span>
              </div>
              <div class="etapa" @click="setEtapa(2)">
                <div class="circulo">2</div>
                <span>Informações Residenciais</span>
              </div>
            </div>
          </b-col>
          <!-- Formulário -->
          <b-col sm="9">
            <b-form @submit="atualizar">
              <!-- Informações pessoais -->
              <transition name="form">
                <div v-show="etapaForm == 1">
                  <h3>Informações Pessoais</h3>
                  <b-row>
                    <b-col>
                      <b-form-group label="CPF">
                        <b-form-input
                          type="text"
                          name="cpf"
                          v-model="user.cpf"
                          disabled
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group label="Nome">
                        <b-form-input
                          type="text"
                          name="nome"
                          v-model="user.nome"
                          placeholder="Ex: Cleywert"
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col>
                      <b-form-group label="E-mail">
                        <b-form-input
                          type="text"
                          name="email"
                          v-model="user.email"
                          placeholder="Ex: email@gmail.com"
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        label="Número de Contato"
                        description="Número com DDD, apenas números"
                      >
                        <b-form-input
                          type="text"
                          name="phone"
                          v-model="user.phone"
                          v-mask="'(##) #####-####'"
                          placeholder="Ex: (92) 99900-0000"
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col>
                      <b-form-group label="Senha">
                        <b-form-input
                          type="password"
                          name="senha"
                          v-model="user.senha"
                          placeholder="Ex: ••••••••"
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group label="Confirmar Senha">
                        <b-form-input
                          type="password"
                          name="senhaConfirm"
                          v-model="senhaConfirm"
                          placeholder="Ex: ••••••••"
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>
                </div>
              </transition>

              <!-- Informações residenciais -->
              <transition name="form">
                <div v-show="etapaForm == 2">
                  <h3>Informações Residenciais</h3>
                  <b-row>
                    <b-col sm="8">
                      <b-form-group label="CEP" description="Somente números">
                        <b-form-input
                          type="text"
                          name="cep"
                          v-model="user.cep"
                          v-mask="'#####-###'"
                          @focusout="getCEP"
                          placeholder="Ex: 69082-480"
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group label="Uf">
                        <b-form-input
                          type="text"
                          name="uf"
                          v-model="user.uf"
                          placeholder="Ex: AM"
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col>
                      <b-form-group label="Cidade">
                        <b-form-input
                          type="text"
                          name="cidade"
                          v-model="user.cidade"
                          placeholder="Ex: Manaus"
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group label="Bairro">
                        <b-form-input
                          type="text"
                          name="bairro"
                          v-model="user.bairro"
                          placeholder="Ex: Coroado"
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="8">
                      <b-form-group label="Rua">
                        <b-form-input
                          type="text"
                          name="rua"
                          v-model="user.rua"
                          placeholder="Ex: Rua dos Alfeneiros"
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group label="Numero">
                        <b-form-input
                          type="number"
                          name="numCasa"
                          v-model="user.numCasa"
                          placeholder="Ex: 4"
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>
                </div>
              </transition>
              <div class="d-flex justify-content-between">
                <div>
                  <div
                    class="btn btn-secondary"
                    v-show="etapaForm == 2"
                    @click="setEtapa(1)"
                  >
                    Voltar
                  </div>
                  <b-button
                    variant="primary"
                    v-show="etapaForm == 1"
                    @click="proximaEtapa"
                    >Próximo</b-button
                  >
                </div>
                <b-button type="submit" variant="success">Concluir</b-button>
              </div>
            </b-form>
          </b-col>
        </b-row>
      </section>
    </main>
  </section>
</template>

<script>
import axios from "axios";
import cep from "@/mixins/cep.js";
import Menu from "@/components/Menu.vue";
import etapa from "@/mixins/alterEtapa.js";
export default {
  data() {
    return {
      user: [],
      senhaConfirm: "",
      senhaInit: "",
      etapaForm: 1,
      variant: "",
      msgAlert: "",
      dismissSecs: 5,
      dismissCountDown: 0,
      cepInvalido: false,
    };
  },
  components: {
    Menu,
  },
  watch: {
    cepInvalido() {
      if (this.cepInvalido) {
        this.variant = "danger";
        this.dismissCountDown = this.dismissSecs;
        this.msgAlert = "CEP inválido";
      }
    },
  },
  mixins: [etapa, cep],
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    atualizar(e) {
      e.preventDefault();
      if ((this.user.senha != this.senhaInit || this.senhaConfirm != this.senhaInit) && this.user.senha != this.senhaConfirm) {
        this.variant = "danger";
        this.dismissCountDown = this.dismissSecs;
        this.msgAlert = "As senhas informadas são incompativeis!";
      } else if(!this.cepInvalido) {
        let token = window.localStorage.token;
        axios
          .put(`http://localhost:8080/user/${this.user.cpf}`, this.user, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          })
          .then((resposta) => {
            this.variant = "success";
            this.dismissCountDown = this.dismissSecs;
            this.msgAlert = "Informações atualizadas com sucesso!";
            this.user = resposta.data;
            this.senhaConfirm = this.senhaInit = this.user.senha;
          })
          .catch((err) => {
            console.log(err.data);
          });
      }else{
        this.variant = "danger";
        this.dismissCountDown = this.dismissSecs;
        this.msgAlert = "CEP inválido";
      }
    },
    getUser() {
      let token = window.localStorage.token;
      let userLog = JSON.parse(window.localStorage.userLog);
      axios
        .get(`http://localhost:8080/user/${userLog.cpf}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((resposta) => {
          this.user = resposta.data;
          this.senhaInit = this.senhaConfirm = this.user.senha;
        });
    },
  },
  created() {
    this.getUser();
  },
};
</script>

<style scoped>
.alert {
  margin-top: 16px;
}
.cont-form {
  margin: 30px 0;
}
.cont-etapa {
  width: 0;
  height: 357px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-evenly;
  border-right: 1px solid #5c545436;
}
.etapa {
  display: flex;
  cursor: pointer;
  margin-left: -16px;
  width: max-content;
  text-align: center;
  align-items: center;
  filter: grayscale(60%);
}
.etapa span {
  margin-left: 8px;
}
.etapa-ativa {
  filter: none;
}
.circulo {
  width: 32px;
  height: 32px;
  margin: auto;
  color: #fff;
  display: flex;
  align-items: center;
  border-radius: 16px;
  justify-content: center;
  background-color: #0097d8;
}

.form-enter,
.form-leave-to {
  transform: translate3d(-50px, 0, 0);
}
.form-enter-active,
.form-leave-active {
  opacity: 0.5;
  transition: all 0.8s;
}

@media only screen and (max-width: 1000px) {
  .cont-form > .row {
    align-items: center;
    flex-direction: column;
  }
  .cont-etapa {
    width: 100%;
    display: flex;
    margin-bottom: 24px;
    border-right: none;
    text-align: center;
    height: max-content;
    flex-direction: row;
    border-top: 1px solid #000;
    justify-content: space-evenly;
  }
  .etapa {
    display: block;
    position: relative;
    margin-top: -16px;
    cursor: pointer;
    text-align: center;
  }
}
</style>