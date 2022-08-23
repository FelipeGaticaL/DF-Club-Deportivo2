const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index.js');
const {it} = require ('mocha')
const {describe} = require("mocha");

//middleware
chai.use(chaiHttp);

describe("Probando nuestra API REST con Mocha y Chai", function () {

    it("Probar el GET de deportes sea un array", function () {

        chai.request(app).get('/deportes').end((err, res) => {
            let data = JSON.parse(res.text);
            

            //Validar si existe una propiedad 
            chai.expect(data).to.have.property('deportes');

             //Esperamos que la data sea un arreglo
             chai.expect(data.deportes).to.be.an('array');

        });
    });

});