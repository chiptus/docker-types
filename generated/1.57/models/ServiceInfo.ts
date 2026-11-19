/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NetworkTaskInfo } from './NetworkTaskInfo';

/**
 * represents service parameters with the list of service's tasks
 *
 */
export type ServiceInfo = {
    VIP?: string;
    Ports?: Array<string>;
    LocalLBIndex?: number;
    Tasks?: Array<NetworkTaskInfo>;
};

