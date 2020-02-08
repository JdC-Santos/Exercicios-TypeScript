"use strict";
var empresa;
(function (empresa) {
    var Pessoa = /** @class */ (function () {
        function Pessoa(cpf) {
            this._cpf = cpf;
        }
        Pessoa.prototype.getNome = function () {
            return this._nome;
        };
        Pessoa.prototype.setNome = function (nome) {
            this._nome = nome;
        };
        Pessoa.prototype.getCpf = function () {
            return this._cpf;
        };
        Pessoa.prototype.getDtNascimento = function () {
            return this._dtNascimento;
        };
        Pessoa.prototype.setDtNascimento = function (dt) {
            this._dtNascimento = dt;
        };
        return Pessoa;
    }());
    empresa.Pessoa = Pessoa;
})(empresa || (empresa = {}));
