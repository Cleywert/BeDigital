export default {
    methods: {
        proximaEtapa(event) {
            event.preventDefault();
            this.setEtapa(this.etapaForm + 1);
        },
        setEtapa(etapa) {
            if (this.user.senha == this.senhaConfirm) {
                if (
                    this.user.cpf != "" &&
                    this.user.nome != "" &&
                    this.user.email != "" &&
                    this.user.phone != "" &&
                    this.user.senha != "" &&
                    this.senhaConfirm != ""
                ) {
                    let obj = document.querySelector(".etapa-ativa");
                    let newEtapa = document.getElementsByClassName("etapa")[etapa - 1];
                    obj.removeAttribute("class");
                    obj.setAttribute("class", "etapa");
                    newEtapa.classList.add("etapa-ativa");

                    this.etapaForm = 0;
                    window.setTimeout(() => {
                        this.etapaForm = etapa;
                    }, 700);
                }
            } else {
                alert("As senham não são iguais");
            }
        },
    }
}