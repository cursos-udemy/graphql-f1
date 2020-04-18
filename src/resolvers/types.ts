import { IResolvers } from 'graphql-tools';
import { getMobileURL } from '../lib/utils';

const types: IResolvers = {
    Season: {
        year: parent => parent.season,
        urlMobile: parent => getMobileURL(parent.url)
    },
    Race: {
        name: parent => parent.raceName,
        circuit: parent => parent.Circuit
    },
    Circuit: {
        id: parent => parent.circuitId,
        name: parent => parent.circuitName,
        location: parent => parent.Location
    },
    Driver: {
        id: parent => parent.driverId,
        name: parent => parent.givenName + ' ' + parent.familyName
    }
};

export default types;