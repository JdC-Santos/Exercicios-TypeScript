namespace empresa {

    class Pessoa {
        
        private nome : string;
        private idade : number;
        private cpf : string;

        public getNome() : string{ return this.nome; }
        public setNome(nome:  string) : void {
            if(nome != "") this.nome = nome;
        }

        public getIdade() : number { return this.idade; }
        public setIdade(idade : number) : void {
            if(idade != NaN) this.idade = idade;
        }

        public getCpf() : string { return this.cpf; }
        public setCpf(cpf : string) : void {
            if(cpf != "") this.cpf = cpf;
        }

    }
    
}