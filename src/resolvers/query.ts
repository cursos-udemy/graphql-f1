import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        async seasons(_: void, __: any, { dataSources }) {
            return await dataSources.seasons.getSeasons().then(
                (data: any) => data.MRData.SeasonTable.Seasons
            );
        },
        async racesByYear(_: void, { year }, { dataSources }) {
            return await dataSources.races.getRaces(year).then(
                (data: any) => data.MRData.RaceTable.Races
            );
        }
    }
};

export default query;