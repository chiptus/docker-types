/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EndpointPortConfig } from './EndpointPortConfig';
import type { EndpointSpec } from './EndpointSpec';
import type { ObjectVersion } from './ObjectVersion';
import type { ServiceSpec } from './ServiceSpec';

export type Service = {
    ID?: string;
    Version?: ObjectVersion;
    CreatedAt?: string;
    UpdatedAt?: string;
    Spec?: ServiceSpec;
    Endpoint?: {
        Spec?: EndpointSpec;
        Ports?: Array<EndpointPortConfig>;
        VirtualIPs?: Array<{
            NetworkID?: string;
            Addr?: string;
        }>;
    };
    /**
     * The status of a service update.
     */
    UpdateStatus?: {
        State?: 'updating' | 'paused' | 'completed';
        StartedAt?: string;
        CompletedAt?: string;
        Message?: string;
    };
};

