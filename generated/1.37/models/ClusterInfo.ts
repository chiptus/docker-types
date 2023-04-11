/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectVersion } from './ObjectVersion';
import type { SwarmSpec } from './SwarmSpec';
import type { TLSInfo } from './TLSInfo';

/**
 * ClusterInfo represents information about the swarm as is returned by the
 * "/info" endpoint. Join-tokens are not included.
 *
 */
export type ClusterInfo = {
    /**
     * The ID of the swarm.
     */
    ID?: string;
    Version?: ObjectVersion;
    /**
     * Date and time at which the swarm was initialised in
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
     *
     */
    CreatedAt?: string;
    /**
     * Date and time at which the swarm was last updated in
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
     *
     */
    UpdatedAt?: string;
    Spec?: SwarmSpec;
    TLSInfo?: TLSInfo;
    /**
     * Whether there is currently a root CA rotation in progress for the swarm
     */
    RootRotationInProgress?: boolean;
};

