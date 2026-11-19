/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConfigReference } from './ConfigReference';
import type { IPAM } from './IPAM';
import type { PeerInfo } from './PeerInfo';

export type Network = {
    /**
     * Name of the network.
     *
     */
    Name?: string;
    /**
     * ID that uniquely identifies a network on a single machine.
     *
     */
    Id?: string;
    /**
     * Date and time at which the network was created in
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
     *
     */
    Created?: string;
    /**
     * The level at which the network exists (e.g. `swarm` for cluster-wide
     * or `local` for machine level)
     *
     */
    Scope?: string;
    /**
     * The name of the driver used to create the network (e.g. `bridge`,
     * `overlay`).
     *
     */
    Driver?: string;
    /**
     * Whether the network was created with IPv4 enabled.
     *
     */
    EnableIPv4?: boolean;
    /**
     * Whether the network was created with IPv6 enabled.
     *
     */
    EnableIPv6?: boolean;
    /**
     * The network's IP Address Management.
     *
     */
    IPAM?: IPAM;
    /**
     * Whether the network is created to only allow internal networking
     * connectivity.
     *
     */
    Internal?: boolean;
    /**
     * Whether a global / swarm scope network is manually attachable by regular
     * containers from workers in swarm mode.
     *
     */
    Attachable?: boolean;
    /**
     * Whether the network is providing the routing-mesh for the swarm cluster.
     *
     */
    Ingress?: boolean;
    ConfigFrom?: ConfigReference;
    /**
     * Whether the network is a config-only network. Config-only networks are
     * placeholder networks for network configurations to be used by other
     * networks. Config-only networks cannot be used directly to run containers
     * or services.
     *
     */
    ConfigOnly?: boolean;
    /**
     * Network-specific options uses when creating the network.
     *
     */
    Options?: Record<string, string>;
    /**
     * Metadata specific to the network being created.
     *
     */
    Labels?: Record<string, string>;
    /**
     * List of peer nodes for an overlay network. This field is only present
     * for overlay networks, and omitted for other network types.
     *
     */
    Peers?: Array<PeerInfo>;
};

