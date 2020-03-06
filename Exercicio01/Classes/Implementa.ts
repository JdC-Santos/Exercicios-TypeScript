namespace empresa{
    let p = new Pessoa("JdC","123.123.123-23");
    p.setDtNascimento("1993-02-14");

    document.getElementById('nome').textContent = p.getNome();
    document.getElementById('cpf').textContent = p.getCpf();
    document.getElementById('dtNasc').textContent = p.getDtNascimento();

    let c = new Cliente('JdC',"123.123.123-23",1);
    c.setLimit(300);
    c.setSaldo(200);
    c.setDtNascimento("1993-02-14");

    document.getElementById('cli_nome').textContent = c.getNome();
    document.getElementById('cli_cpf').textContent = c.getCpf();
    document.getElementById('cli_dtNasc').textContent = c.getDtNascimento();
    document.getElementById('cli_limit').textContent = "R$ " + c.getLimit().toString();
    document.getElementById('cli_saldo').textContent = "R$ " + c.getSaldo().toString();
    document.getElementById('cli_cd').textContent = c.getCdCliente().toString();

    let f = new Funcionario('funciona8r738y3','000.000.000-99');
    f.setDtNascimento('1990-04-19');
    f.setCdFuncionario(1);
    f.setValorDia(100);

    document.getElementById('f_nome').textContent = f.getNome();
    document.getElementById('f_cpf').textContent = f.getCpf();
    document.getElementById('f_dtNascimento').textContent = f.getDtNascimento();
    document.getElementById('f_codigo').textContent = f.getCdFuncionario().toString();
    document.getElementById('f_vl_dia').textContent = f.getValorDia().toString();

    let g = new Gerente("Oswaoldo",'999.999.999-987');
    g.setDtNascimento('1987-10-10');
    g.setCdFuncionario(2);
    g.setValorDia(120);
    g.setSetor("T.I.");

    document.getElementById('g_nome').textContent = g.getNome();
    document.getElementById('g_cpf').textContent = g.getCpf();
    document.getElementById('g_dtNascimento').textContent = g.getDtNascimento();
    document.getElementById('g_codigo').textContent = g.getCdFuncionario().toString();
    document.getElementById('g_vl_dia').textContent = g.getValorDia().toString();
    document.getElementById('g_setor').textContent = g.getSetor();

    let e = new Empresa();
    e.setNomeEmpresa("empureza");
    e.setCidade("Itanhaem");
    e.setAtividade("T.I");
    e.addCliente(c);
    e.addFuncionario(f);

    document.getElementById('e_nome').textContent = e.getNomeEmpresa();
    document.getElementById('e_atividade').textContent = e.getAtividade();
    document.getElementById('e_cidade').textContent = e.getCidade();

    let funcEmp = document.getElementById('emp_func');

    e.getFuncionario().forEach(element => {
        funcEmp.innerHTML += "<h4>"+element.getNome()+"</h4>";
    });

    let filial = new FIlial(e);
    filial.setCdFilial(1);
    filial.setCidade("Santos");

    document.getElementById('fi_codigo').textContent = filial.getCdFilial().toString();
    document.getElementById('fi_cidade').textContent = filial.getCidade();
}