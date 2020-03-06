namespace empresa{
    export class FIlial{
        private empresa: Empresa;
        private cdFilial: number;
        private cidade: string;

        constructor(empresa:Empresa){
            this.empresa = empresa;
        }

        getEmpresa(){ return this.empresa; }

        getCdFilial():number{ return this.cdFilial; }
        setCdFilial(filial: number):void{ this.cdFilial = filial; }

        getCidade():string{ return this.cidade; }
        setCidade(cidade:string):void{ this.cidade = cidade; }
    }
}