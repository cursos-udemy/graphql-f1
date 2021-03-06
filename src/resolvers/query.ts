import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        async seasons(_: void, __: any, { dataSources }) {
            return await dataSources.seasons.getSeasons().then(
                (data: any) => data.MRData.SeasonTable.Seasons
            );
        },
        async races(_: void, { year }, { dataSources }) {
            return await dataSources.races.getRaces(year).then(
                (data: any) => data.MRData.RaceTable.Races
            );
        },
        async race(_: void, { year, round }, { dataSources }) {
            return await dataSources.races.getRace(year, round).then(
                (data: any) => {
                    const races = data.MRData.RaceTable.Races;
                    return (races) ? races[0] : null;
                }
            );
        },
        async drivers(_: void, { limit, page }, { dataSources }) {
            return await dataSources.drivers.getDrivers(limit, page).then(
                (data: any) => data.MRData.DriverTable.Drivers
            );
        },
        async driversBySeason(_: void, { year, limit, page }, { dataSources }) {
            return await dataSources.drivers.getDriversBySeason(year, limit, page).then(
                (data: any) => data.MRData.DriverTable.Drivers
            );
        },
        async driversByRace(_: void, { year, round }, { dataSources }) {
            return await dataSources.drivers.getDriversByRace(year, round).then(
                (data: any) => data.MRData.DriverTable.Drivers
            );
        },
        async driver(_: void, { id }, { dataSources }) {
            return await dataSources.drivers.getDriver(id).then(
                (data: any) => {
                    const drv = data.MRData.DriverTable.Drivers;
                    return (drv) ? drv[0] : null;
                }
            );
        },
    }
};

export default query;