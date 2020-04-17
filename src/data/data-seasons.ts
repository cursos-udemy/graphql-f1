import { F1DataSource } from './datasource'

export class SeasonsData extends F1DataSource {
    async getSeasons() {
        return await this.get('seasons.json?limit=80', {
            cacheOptions: { ttl: 60 }
        });
    }
}