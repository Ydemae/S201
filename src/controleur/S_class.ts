type FormS = {
    btnAjInf : HTMLInputElement,
}

class VueS{
    private _form : FormS;
    
    init(form : FormS) : void{
        this._form = form;

    }

    get form() : FormS {return this._form}; 
}

let vueS = new VueS();

export { vueS }