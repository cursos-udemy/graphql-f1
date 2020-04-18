import { F1DataSource } from './f1-datasource'

export class DriversData extends F1DataSource {
    async getDrivers() {
        return await this.get('drivers.json', {
            cacheOptions: { ttl: 60 }
        });
    }
}