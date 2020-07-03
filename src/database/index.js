import Sequelize from 'sequelize';
import databaseConfig from '../config/databaseConfig';
import User from '../app/models/User';

const models = [User];

class Database{
    constructor(){

    }
    init(){
        this.connection = new Sequelize(databaseConfig);
        models.map(model => model.init(this.connection))
    }
}

export default new Database();