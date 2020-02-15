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
}