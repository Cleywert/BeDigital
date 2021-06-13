<template>
  <section id="cont-loja">
    <Menu></Menu>
    <main class="container">
      <h2 class="titulo text-center">Nossos Produtos</h2>
      <div v-if="carregando" class="d-flex justify-content-center mb-3 cont-spinner">
        <b-spinner v-show="carregando" style="width: 5rem; height: 5rem" class="spinner"></b-spinner>
      </div>
      <section class="cont-produtos">
        <div class="card-produto" v-for="produto in produtos" :key="produto.id">
          <div class="cont-thumb">
            <img :src="produto.thumbnail" alt="" class="thumb" />
          </div>
          <div class="card-body">
            <h5 class="titulo-card">{{ produto.title }}</h5>
            <p>{{ formatMoney(produto.price) }}</p>
            <b-button variant="primary" block>Adicionar ao carrinho</b-button>
          </div>
        </div>
      </section>
    </main>
  </section>
</template>

<script>
import axios from "axios";
import Menu from "@/components/Menu.vue";
export default {
  data() {
    return {
      produtos: [],
      carregando: true,
    };
  },
  components: {
    Menu,
  },
  methods: {
    getProdutos() {
      axios
        .get("https://api.mercadolibre.com/sites/MLB/search?category=MLB1000")
        .then((resposta) => {
          this.carregando = false;
          this.produtos = resposta.data.results;
        });
    },
    formatMoney(valor) {
      return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style scoped>
.cont-spinner {
  margin-top: 70px;
}
.cont-produtos {
  display: grid;
  row-gap: 24px;
  margin: 32px 0;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fill, 250px);
}
.card-produto {
  height: 380px;
  border-radius: 8px;
  flex-direction: column;
  border: 1px solid #ccc;
}
.card-body {
  display: flex;
  height: 230px;
  justify-content: flex-end;
  flex-direction: column;
}
.cont-thumb {
  text-align: center;
  padding: 16px 0 0;
}
.thumb {
  width: auto;
  height: 130px;
  max-width: 100%;
}
</style>