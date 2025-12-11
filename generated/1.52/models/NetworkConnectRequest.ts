/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EndpointSettings } from './EndpointSettings';

/**
 * NetworkConnectRequest represents the data to be used to connect a container to a network.
 *
 */
export type NetworkConnectRequest = {
    /**
     * The ID or name of the container to connect to the network.
     */
    Container: string;
    EndpointConfig?: EndpointSettings | null;
};

