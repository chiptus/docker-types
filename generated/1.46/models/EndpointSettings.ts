/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EndpointIPAMConfig } from './EndpointIPAMConfig';

/**
 * Configuration for a network endpoint.
 */
export type EndpointSettings = {
    IPAMConfig?: EndpointIPAMConfig;
    Links?: Array<string>;
    /**
     * MAC address for the endpoint on this network. The network driver might ignore this parameter.
     *
     */
    MacAddress?: string;
    Aliases?: Array<string>;
    /**
     * DriverOpts is a mapping of driver options and values. These options
     * are passed directly to the driver and are driver specific.
     *
     */
    DriverOpts?: Record<string, string> | null;
    /**
     * Unique ID of the network.
     *
     */
    NetworkID?: string;
    /**
     * Unique ID for the service endpoint in a Sandbox.
     *
     */
    EndpointID?: string;
    /**
     * Gateway address for this network.
     *
     */
    Gateway?: string;
    /**
     * IPv4 address.
     *
     */
    IPAddress?: string;
    /**
     * Mask length of the IPv4 address.
     *
     */
    IPPrefixLen?: number;
    /**
     * IPv6 gateway address.
     *
     */
    IPv6Gateway?: string;
    /**
     * Global IPv6 address.
     *
     */
    GlobalIPv6Address?: string;
    /**
     * Mask length of the global IPv6 address.
     *
     */
    GlobalIPv6PrefixLen?: number;
    /**
     * List of all DNS names an endpoint has on a specific network. This
     * list is based on the container name, network aliases, container short
     * ID, and hostname.
     *
     * These DNS names are non-fully qualified but can contain several dots.
     * You can get fully qualified DNS names by appending `.<network-name>`.
     * For instance, if container name is `my.ctr` and the network is named
     * `testnet`, `DNSNames` will contain `my.ctr` and the FQDN will be
     * `my.ctr.testnet`.
     *
     */
    DNSNames?: Array<string>;
};

