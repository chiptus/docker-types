/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EndpointSettings } from './EndpointSettings';
import type { PortMap } from './PortMap';

/**
 * NetworkSettings exposes the network settings in the API
 */
export type NetworkSettings = {
    /**
     * SandboxID uniquely represents a container's network stack.
     */
    SandboxID?: string;
    /**
     * SandboxKey is the full path of the netns handle
     */
    SandboxKey?: string;
    Ports?: PortMap;
    /**
     * Information about all networks that the container is connected to.
     *
     */
    Networks?: Record<string, EndpointSettings>;
};

