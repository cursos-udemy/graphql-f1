import { RESTDataSource } from 'apollo-datasource-rest'

export class F1DataSource extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://ergast.com/api/f1/';
    }
}