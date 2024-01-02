/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IPAM = {
    /**
     * Name of the IPAM driver to use.
     */
    Driver?: string;
    /**
     * List of IPAM configuration options, specified as a map:
     *
     * ```
     * {"Subnet": <CIDR>, "IPRange": <CIDR>, "Gateway": <IP address>, "AuxAddress": <device_name:IP address>}
     * ```
     *
     */
    Config?: Array<Record<string, string>>;
    /**
     * Driver-specific options, specified as a map.
     */
    Options?: Record<string, string>;
};

