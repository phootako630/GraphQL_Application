import { Widgets } from "./data/dbConnector";
import {reject} from "loadsh/collection";
import {resolve} from "@babel/core/lib/vendor/import-meta-resolve";

const resolver = {
    getProducts: ({ id }) => {
        return new Promise((resolver) => {
            Widgets.findById({ _id: id}, (err, product) => {
                if (err) reject(err)
                else resolve(product)
            })
        }) ;
    },
    createProduct: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        productDatabase[id] = input;
        return new Product(id, input)
    }
}

export default resolver