/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * NetworkDisconnectRequest represents the data to be used to disconnect a container from a network.
 *
 */
export type NetworkDisconnectRequest = {
    /**
     * The ID or name of the container to disconnect from the network.
     */
    Container: string;
    /**
     * Force the container to disconnect from the network.
     */
    Force?: boolean;
};

