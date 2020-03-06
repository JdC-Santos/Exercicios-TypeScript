namespace empresa {
    export class Funcionario extends Pessoa{
        private _cdFuncionario: Number;
        private _valorDia:number;

        constructor(nome:string, cpf:string){
            super(nome, cpf);
        }

        getCdFuncionario():Number{
            return this._cdFuncionario;
        }

        setCdFuncionario(cd:Number):void{
            this._cdFuncionario = cd;
        }

        getValorDia():number{
            return this._valorDia;
        }

        setValorDia(vl:number):void{
            this._valorDia = vl;
        }

        calcularSalario():number{
            return this._valorDia * 30;
        }
    }
}