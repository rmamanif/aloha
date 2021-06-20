import axios from "axios";

export class UsuarioService{
    baseUrl = "http://127.0.0.1:8050/api/usuarios/";
    getAll(){
        return axios.get(this.baseUrl).then(res => res.data);
    }

    save(usuario) {
        return axios.post(this.baseUrl, usuario).then(res => res.data);
    }
}