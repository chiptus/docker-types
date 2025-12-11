/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EndpointSettings } from './EndpointSettings';

/**
 * NetworkingConfig represents the container's networking configuration for
 * each of its interfaces.
 * It is used for the networking configs specified in the `docker create`
 * and `docker network connect` commands.
 *
 */
export type NetworkingConfig = {
    /**
     * A mapping of network name to endpoint configuration for that network.
     * The endpoint configuration can be left empty to connect to that
     * network with no particular endpoint configuration.
     *
     */
    EndpointsConfig?: Record<string, EndpointSettings>;
};

