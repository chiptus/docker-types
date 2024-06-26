/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';
import type { EndpointSettings } from './EndpointSettings';
import type { PortMap } from './PortMap';

/**
 * NetworkSettings exposes the network settings in the API
 */
export type NetworkSettings = {
    /**
     * Name of the default bridge interface when dockerd's --bridge flag is set.
     *
     */
    Bridge?: string;
    /**
     * SandboxID uniquely represents a container's network stack.
     */
    SandboxID?: string;
    /**
     * Indicates if hairpin NAT should be enabled on the virtual interface.
     *
     * Deprecated: This field is never set and will be removed in a future release.
     *
     */
    HairpinMode?: boolean;
    /**
     * IPv6 unicast address using the link-local prefix.
     *
     * Deprecated: This field is never set and will be removed in a future release.
     *
     */
    LinkLocalIPv6Address?: string;
    /**
     * Prefix length of the IPv6 unicast address.
     *
     * Deprecated: This field is never set and will be removed in a future release.
     *
     */
    LinkLocalIPv6PrefixLen?: number;
    Ports?: PortMap;
    /**
     * SandboxKey is the full path of the netns handle
     */
    SandboxKey?: string;
    /**
     * Deprecated: This field is never set and will be removed in a future release.
     */
    SecondaryIPAddresses?: Array<Address> | null;
    /**
     * Deprecated: This field is never set and will be removed in a future release.
     */
    SecondaryIPv6Addresses?: Array<Address> | null;
    /**
     * EndpointID uniquely represents a service endpoint in a Sandbox.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: This field is only propagated when attached to the
     * > default "bridge" network. Use the information from the "bridge"
     * > network inside the `Networks` map instead, which contains the same
     * > information. This field was deprecated in Docker 1.9 and is scheduled
     * > to be removed in Docker 17.12.0
     *
     */
    EndpointID?: string;
    /**
     * Gateway address for the default "bridge" network.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: This field is only propagated when attached to the
     * > default "bridge" network. Use the information from the "bridge"
     * > network inside the `Networks` map instead, which contains the same
     * > information. This field was deprecated in Docker 1.9 and is scheduled
     * > to be removed in Docker 17.12.0
     *
     */
    Gateway?: string;
    /**
     * Global IPv6 address for the default "bridge" network.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: This field is only propagated when attached to the
     * > default "bridge" network. Use the information from the "bridge"
     * > network inside the `Networks` map instead, which contains the same
     * > information. This field was deprecated in Docker 1.9 and is scheduled
     * > to be removed in Docker 17.12.0
     *
     */
    GlobalIPv6Address?: string;
    /**
     * Mask length of the global IPv6 address.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: This field is only propagated when attached to the
     * > default "bridge" network. Use the information from the "bridge"
     * > network inside the `Networks` map instead, which contains the same
     * > information. This field was deprecated in Docker 1.9 and is scheduled
     * > to be removed in Docker 17.12.0
     *
     */
    GlobalIPv6PrefixLen?: number;
    /**
     * IPv4 address for the default "bridge" network.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: This field is only propagated when attached to the
     * > default "bridge" network. Use the information from the "bridge"
     * > network inside the `Networks` map instead, which contains the same
     * > information. This field was deprecated in Docker 1.9 and is scheduled
     * > to be removed in Docker 17.12.0
     *
     */
    IPAddress?: string;
    /**
     * Mask length of the IPv4 address.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: This field is only propagated when attached to the
     * > default "bridge" network. Use the information from the "bridge"
     * > network inside the `Networks` map instead, which contains the same
     * > information. This field was deprecated in Docker 1.9 and is scheduled
     * > to be removed in Docker 17.12.0
     *
     */
    IPPrefixLen?: number;
    /**
     * IPv6 gateway address for this network.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: This field is only propagated when attached to the
     * > default "bridge" network. Use the information from the "bridge"
     * > network inside the `Networks` map instead, which contains the same
     * > information. This field was deprecated in Docker 1.9 and is scheduled
     * > to be removed in Docker 17.12.0
     *
     */
    IPv6Gateway?: string;
    /**
     * MAC address for the container on the default "bridge" network.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: This field is only propagated when attached to the
     * > default "bridge" network. Use the information from the "bridge"
     * > network inside the `Networks` map instead, which contains the same
     * > information. This field was deprecated in Docker 1.9 and is scheduled
     * > to be removed in Docker 17.12.0
     *
     */
    MacAddress?: string;
    /**
     * Information about all networks that the container is connected to.
     *
     */
    Networks?: Record<string, EndpointSettings>;
};

