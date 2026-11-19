/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Describes a port-mapping between the container and the host.
 *
 */
export type PortSummary = {
    /**
     * Host IP address that the container's port is mapped to
     */
    IP?: string;
    /**
     * Port on the container
     */
    PrivatePort: number;
    /**
     * Port exposed on the host
     */
    PublicPort?: number;
    Type: 'tcp' | 'udp' | 'sctp';
};

