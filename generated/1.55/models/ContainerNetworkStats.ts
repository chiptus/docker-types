/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Aggregates the network stats of one container
 *
 */
export type ContainerNetworkStats = {
    /**
     * Bytes received. Windows and Linux.
     *
     */
    rx_bytes?: number;
    /**
     * Packets received. Windows and Linux.
     *
     */
    rx_packets?: number;
    /**
     * Received errors. Not used on Windows.
     *
     * This field is Linux-specific and always zero for Windows containers.
     *
     */
    rx_errors?: number;
    /**
     * Incoming packets dropped. Windows and Linux.
     *
     */
    rx_dropped?: number;
    /**
     * Bytes sent. Windows and Linux.
     *
     */
    tx_bytes?: number;
    /**
     * Packets sent. Windows and Linux.
     *
     */
    tx_packets?: number;
    /**
     * Sent errors. Not used on Windows.
     *
     * This field is Linux-specific and always zero for Windows containers.
     *
     */
    tx_errors?: number;
    /**
     * Outgoing packets dropped. Windows and Linux.
     *
     */
    tx_dropped?: number;
    /**
     * Endpoint ID. Not used on Linux.
     *
     * This field is Windows-specific and omitted for Linux containers.
     *
     */
    endpoint_id?: string | null;
    /**
     * Instance ID. Not used on Linux.
     *
     * This field is Windows-specific and omitted for Linux containers.
     *
     */
    instance_id?: string | null;
};

