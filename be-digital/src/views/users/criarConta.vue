<template>
  <section id="cont-criar-conta">
    <div class="container">
      <h1 class="titulo">Criar Conta</h1>

      <div class="cont-form">
        <b-row>
          <b-col sm="8">
            <!-- Alerta de CEP inválido -->
            <b-alert variant="danger" dismisseble v-model="cepInvalido"
              >O CEP informado é inválido</b-alert
            >
            <!-- Controle de fluxo do formulário -->
            <div class="control-form">
              <div class="linha"></div>
              <div class="cont-etapas">
                <div class="etapa etapa-ativa" @click="setEtapa(1)">
                  <div class="circulo">1</div>
                  <div class="legend-etapa">Suas Informações</div>
                </div>
                <div class="etapa" @click="setEtapa(2)">
                  <div class="circulo">2</div>
                  <div class="legend-etapa">Informações Residenciais</div>
                </div>
              </div>
            </div>
            <!-- formulário de cadastro -->
            <b-form @submit="cadastrar">
              <transition name="form">
                <!-- dados pessoais de cadastro -->
                <div class="info-pessoais" v-show="etapaForm == 1">
                  <b-row>
                    <b-col>
                      <b-form-group label="CPF" description="Apenas números">
                        <b-form-input
                          type="text"
                          name="cpf"
                          v-model="user.cpf"
                          v-mask="'###.###.###-##'"
                          placeholder="Ex: 000.000.000-00"
                          required
                        ></b-form-input>
                      </b-form-group>
                    </b-col>

                    <b-col>
                      <b-form-group label="Nome">
                        <b-form-input
                          type="text"
                          name="nome"
                          v-model="user.nome"
                          placeholder="Ex: Cleywert Rayol"
                          required
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col>
                      <b-form-group
                        label="Número de contato"
                        description="Número com DDD, apenas números"
                      >
                        <b-form-input
                          type="text"
                          name="phone"
                          v-model="user.phone"
                          v-mask="'(##) #####-####'"
                          placeholder="Ex: (92) 99900-0000"
                          required
                        ></b-form-input>
                      </b-form-group>
                    </b-col>

                    <b-col>
                      <b-form-group label="E-mail">
                        <b-form-input
                          type="email"
                          name="email"
                          v-model="user.email"
                          placeholder="Ex: cleywert@gmail.com"
                          required
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
                          placeholder="••••••••••"
                          required
                        ></b-form-input>
                      </b-form-group>
                    </b-col>

                    <b-col>
                      <b-form-group label="Confirmar senha">
                        <b-form-input
                          type="password"
                          name="senhaConfirm"
                          v-model="senhaConfirm"
                          placeholder="••••••••••"
                          required
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>
                </div>
              </transition>

              <transition name="form">
                <!-- dados residenciais do usuário -->
                <div class="info-residencial" v-show="etapaForm == 2">
                  <b-row>
                    <b-col>
                      <b-form-group label="CEP" description="Apenas números">
                        <b-form-input
                          type="text"
                          name="cep"
                          required
                          v-mask="'#####-###'"
                          v-model="user.cep"
                          @focusout="getCEP"
                          placeholder="Ex: 69082-000"
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group label="UF">
                        <b-form-input
                          type="text"
                          name="uf"
                          v-model="user.uf"
                          placeholder="Ex: AM"
                          required
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
                          required
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
                          required
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="10">
                      <b-form-group label="Rua">
                        <b-form-input
                          type="text"
                          name="rua"
                          v-model="user.rua"
                          placeholder="Ex: Rua José Ribamar de Freitas"
                          required
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group label="Número">
                        <b-form-input
                          type="text"
                          name="numCasa"
                          v-model="user.numCasa"
                          placeholder="Ex: 5"
                          required
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>
                </div>
              </transition>
              <b-button
                variant="success"
                block
                @click="proximaEtapa"
                v-if="etapaForm == 1"
                >Continuar</b-button
              >
              <b-button type="submit" variant="success" block v-else
                >Criar conta</b-button
              >
            </b-form>
            <hr />
            <div class="logar">
              <p>Já possui uma conta?</p>
              <router-link to="/login" class="btn btn-light"
                >Fazer login</router-link
              >
            </div>
          </b-col>
          <b-col class="cont-img">
            <b-img
              center
              :src="require('@/assets/create_account.svg')"
              fluid
            ></b-img>
            <p class="legend-img">
              Uma única conta, todas as vantagens Bemol para você
            </p>
          </b-col>
        </b-row>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import cep from "@/mixins/cep.js";
import etapa from "@/mixins/alterEtapa.js";
export default {
  data() {
    return {
      etapaForm: 1,
      user: {
        cpf: "",
        nome: "",
        email: "",
        phone: "",
        senha: "",
        cep: "",
        uf: "",
        cidade: "",
        bairro: "",
        rua: "",
        numCasa: "",
      },
      senhaConfirm: "",
      cepInvalido: false,
    };
  },
  mixins: [etapa, cep],
  methods: {
    cadastrar(event) {
      event.preventDefault();
      axios
        .post("http://localhost:8080/user", this.user)
        .then(() => {
          alert("Cadastrado com sucesso!\nVocê será redirecionado em breve");
          window.setTimeout(() => {
            this.$router.push({ name: "Login" });
          }, 5000);
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style scoped>
.cont-form {
  margin-top: 50px;
  margin-bottom: 30px;
}
.alert {
  margin-bottom: 32px;
}
.control-form {
  margin-bottom: 16px;
}
.linha {
  border-bottom: 1px solid #5c545436;
}
.cont-etapas {
  display: flex;
  justify-content: space-around;
}
.etapa {
  cursor: pointer;
  margin-top: -16px;
  position: relative;
  width: max-content;
  text-align: center;
  filter: grayscale(60%);
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
.legend-img {
  margin-top: 16px;
  font-weight: 300;
  text-align: center;
}
.cont-img img {
  margin-top: 32px;
}
.logar{
  display: flex;
  align-items: center;
}
.logar p{
  font-size: 1.2em;
  margin-bottom: 0;
  margin-right: 8px;
}
.logar a{
  color: #007bff;
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
</style>