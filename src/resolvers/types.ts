import { IResolvers } from 'graphql-tools';
import { getMobileURL } from '../lib/utils';

const types: IResolvers = {
    Season: {
        year: parent => parent.season,
        urlMobile: parent => getMobileURL(parent.url)
    }
};

export default types;