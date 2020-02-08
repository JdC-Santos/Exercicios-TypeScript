"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var empresa;
(function (empresa) {
    var Cliente = /** @class */ (function (_super) {
        __extends(Cliente, _super);
        function Cliente() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cliente.prototype.getSaldo = function () {
            return this._saldo;
        };
        Cliente.prototype.setSaldo = function (saldo) {
            this._saldo = saldo;
        };
        Cliente.prototype.getLimit = function () {
            return this._limit;
        };
        Cliente.prototype.setLimit = function (limit) {
            this._limit = limit;
        };
        Cliente.prototype.getCdCliente = function () {
            return this._cdCliente;
        };
        Cliente.prototype.setCdCliente = function (cd) {
            this._cdCliente = cd;
        };
        return Cliente;
    }(empresa.Pessoa));
})(empresa || (empresa = {}));
