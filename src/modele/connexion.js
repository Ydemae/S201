"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIsql = exports.connexion = void 0;
const APIsql = __importStar(require("../modele/sqlWeb.js"));
exports.APIsql = APIsql;
APIsql.sqlWeb.init("https://devweb.iutmetz.univ-lorraine.fr/~toto3u/ihm/dossier_application/vue/", "https://devweb.iutmetz.univ-lorraine.fr/~nitschke5/ihm/IHM_API/");
class Connexion {
    constructor() {
        this.init();
    }
    init() {
        // à adapter avec voter nom de base et vos identifiants de connexion
        APIsql.sqlWeb.bdOpen('devbdd.iutmetz.univ-lorraine.fr', '3306', 'toto3u_nombase', 'toto3u_appli', 'motdepasse', 'utf8');
    }
}
let connexion = new Connexion;
exports.connexion = connexion;
