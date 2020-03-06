namespace empresa{

    export class Empresa{
        private nomeEmpresa:string;
        private atividade:string;
        private cidade: string;
        private clientes: Array<Cliente> = [];
        private funcionarios: Array<Funcionario> = [];
        
        getNomeEmpresa():string{ return this.nomeEmpresa; }
        setNomeEmpresa(nm:string):void{ this.nomeEmpresa = nm; }

        getAtividade():string{ return this.atividade; }
        setAtividade(atv:string):void{ this.atividade = atv; }

        getCidade():string{ return this.cidade; }
        setCidade(cidade:string):void{ this.cidade = cidade; }

        getCliente(){ return this.clientes; }
        addCliente(cli:Cliente):void{ this.clientes.push(cli); }

        getFuncionario(){ return this.funcionarios; }
        addFuncionario(f:Funcionario):void{ this.funcionarios.push(f); }
    }
}