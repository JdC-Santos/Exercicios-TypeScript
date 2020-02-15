namespace empresa {

    export class Cliente extends Pessoa{
        private _saldo: Number|undefined;
        private _limit: Number|undefined;
        private _cdCliente: Number|undefined;

        constructor(nome:string, cpf:string, cod:Number){
            super(nome, cpf);
            this._cdCliente = cod;
        }

        getSaldo():Number|undefined{
            return this._saldo;
        }

        setSaldo(saldo: Number):void{
            this._saldo = saldo;
        }

        getLimit():Number|undefined{
            return this._limit;
        }

        setLimit(limit:Number):void{
            this._limit = limit;
        }

        getCdCliente():Number|undefined{
            return this._cdCliente;
        }

        setCdCliente(cd: Number):void{
            this._cdCliente = cd;
        }
    }
}