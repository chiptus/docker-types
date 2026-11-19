/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Network } from './Network';

/**
 * Specifies how a task is attached to a network, and the addresses the
 * task was assigned on that network.
 *
 */
export type NetworkAttachment = {
    Network?: Network;
    /**
     * The IP addresses (in CIDR notation) assigned to the task on this
     * network. To maintain backward compatibility this field accepts CIDR
     * notation, but only the IP address is used.
     *
     */
    Addresses?: Array<string>;
};

