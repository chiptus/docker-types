/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An open port on a container
 */
export type Port = {
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

