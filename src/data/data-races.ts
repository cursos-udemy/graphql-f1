import { F1DataSource } from './f1-datasource'

export class RacesData extends F1DataSource {
    async getRaces(year: string) {
        return await this.get(`${year}.json`, {
            cacheOptions: { ttl: 60 }
        });
    }
}