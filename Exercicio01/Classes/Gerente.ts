namespace empresa {
    export class Gerente extends Funcionario{

        private _setor:string;

        constructor(nome:string, cpf:string){
            super(nome, cpf);
        }

        getSetor():string{
            return this._setor;
        }

        setSetor(s:string):void{
            this._setor = s;
        }

        calcularSalario():number{
            return (this.getValorDia() * 30) + (this.getValorDia()* 0.3);
        }
    }
}