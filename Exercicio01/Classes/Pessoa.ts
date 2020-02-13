namespace empresa{
    
    export class Pessoa {
        private _nome: string|undefined;
        private _cpf: string;
        private _dtNascimento: string|undefined;

        constructor(nome:string, cpf:string){
            this._nome = nome;
            this._cpf = cpf;
        }

        getNome():string|undefined{
            return this._nome;
        }

        setNome(nome: string): void {
            this._nome = nome;
        }

        getCpf(): string|undefined{
            return this._cpf;
        }

        getDtNascimento():string|undefined{
            return this._dtNascimento;
        }

        setDtNascimento(dt:string):void{
            this._dtNascimento = dt;
        }
    }
}