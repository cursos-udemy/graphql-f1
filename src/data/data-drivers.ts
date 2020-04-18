import { F1DataSource } from './f1-datasource'

export class DriversData extends F1DataSource {
    async getDrivers(limit: number = 10, page: number = 1) {
        const offset = (page - 1) * limit;
        return await this.get(`drivers.json?limit=${limit}&offset=${offset}`, {
            cacheOptions: { ttl: 60 }
        });
    }

    async getDriversBySeason(year: string, limit: number = 100, page: number = 1) {
        const offset = (page - 1) * limit;
        return await this.get(`${year}/drivers.json?limit=${limit}&offset=${offset}`, {
            cacheOptions: { ttl: 60 }
        });
    }

    async getDriversByRace(year: string, round: string) {
        return await this.get(`${year}/${round}/drivers.json`, {
            cacheOptions: { ttl: 60 }
        });
    }

    async getDriver(id: string) {
        return await this.get(`drivers/${id}.json`, {
            cacheOptions: { ttl: 60 }
        });
    }

}