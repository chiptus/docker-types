/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EndpointResource } from './EndpointResource';
import type { Network } from './Network';
import type { NetworkStatus } from './NetworkStatus';

/**
 * The body of the "get network" http response message.
 */
export type NetworkInspect = (Network & {
    /**
     * Contains endpoints attached to the network.
     *
     */
    Containers?: Record<string, EndpointResource>;
    /**
     * List of services using the network. This field is only present for
     * swarm scope networks, and omitted for local scope networks.
     *
     */
    Services?: Record<string, any>;
    /**
     * provides runtime information about the network such as the number of allocated IPs.
     *
     */
    Status?: NetworkStatus;
});

