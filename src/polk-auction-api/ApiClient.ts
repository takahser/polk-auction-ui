import axios from 'axios';
import { useAxios } from 'use-axios-client';
import { Auction } from './models/Auction';
import { Crowdloan } from './models/Crowdloan';
import { Parachain } from './models/Parachain';

const endPointUrl = process.env.POLK_AUCTION_ENDPOINT;

const parachainPath = '/parachain';
const crowdloanPath = '/crowdloan';
const auctionPath = '/auction';

const apiClient = () => {
  return axios.create({
    baseURL: endPointUrl,
  });
};

export const useParachains = (relaychain: string) => {
  const client = apiClient();
  const url = `${parachainPath}/${relaychain.toLowerCase()}`;

  const { data, loading } = useAxios<Parachain[]>({ axiosInstance: client, url });

  return { data, loading };
};

export const useCrowdloans = (relaychain: string) => {
  const client = apiClient();
  const url = `${crowdloanPath}/${relaychain.toLowerCase()}`;

  const { data, loading } = useAxios<Crowdloan>({ axiosInstance: client, url });

  return { data, loading };
};

export const useAuctions = (relaychain: string) => {
  const client = apiClient();
  const url = `${auctionPath}/${relaychain.toLowerCase()}`;

  const { data, loading } = useAxios<Auction>({ axiosInstance: client, url });

  return { data, loading };
};
