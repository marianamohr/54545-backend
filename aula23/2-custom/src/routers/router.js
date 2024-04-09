const express = require("express");


class Router {
    constructor() {
        this.router = express.Router();
        this.init();
    }

    getRouter() {
        return this.router;
    }

    init(){};

    get(path, ...callback){
        this.router.get(path, this.applyCallback(callback));    
    }

    applyCallback(callbacks){
        return callbacks.map((callback) => async(...params) =>{
            try {
                await callback.apply(this, params);
            } catch (error) {
                console.error(error);
                params[1].status(500).send(error);
                
            }
        });
    }
}

module.exports = Router;