import axios from "axios";
export default {
    methods: {
        getCEP() {
            const cep = this.user.cep.replace(/\D/g, "");
            if (cep.length == 8) {
                if (this.cepInvalido) this.cepInvalido = false;
                axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((resposta) => {
                    this.user.uf = resposta.data.uf;
                    this.user.cidade = resposta.data.localidade;
                    this.user.bairro = resposta.data.bairro;
                    this.user.rua = resposta.data.logradouro;

                    if(resposta.data.erro){
                        this.cepInvalido = true;
                    }
                })
            } else {
                this.cepInvalido = true;
            }
        },
    }
}