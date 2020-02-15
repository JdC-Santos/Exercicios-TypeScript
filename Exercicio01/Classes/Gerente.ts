namespace empresa {
    class Gerente extends  Funcionario{
        private _setor:string;
        
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