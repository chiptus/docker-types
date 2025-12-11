/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EndpointSettings } from './EndpointSettings';
import type { MountPoint } from './MountPoint';
import type { OCIDescriptor } from './OCIDescriptor';
import type { Port } from './Port';

export type ContainerSummary = {
    /**
     * The ID of this container as a 128-bit (64-character) hexadecimal string (32 bytes).
     */
    Id?: string;
    /**
     * The names associated with this container. Most containers have a single
     * name, but when using legacy "links", the container can have multiple
     * names.
     *
     * For historic reasons, names are prefixed with a forward-slash (`/`).
     */
    Names?: Array<string>;
    /**
     * The name or ID of the image used to create the container.
     *
     * This field shows the image reference as was specified when creating the container,
     * which can be in its canonical form (e.g., `docker.io/library/ubuntu:latest`
     * or `docker.io/library/ubuntu@sha256:72297848456d5d37d1262630108ab308d3e9ec7ed1c3286a32fe09856619a782`),
     * short form (e.g., `ubuntu:latest`)), or the ID(-prefix) of the image (e.g., `72297848456d`).
     *
     * The content of this field can be updated at runtime if the image used to
     * create the container is untagged, in which case the field is updated to
     * contain the the image ID (digest) it was resolved to in its canonical,
     * non-truncated form (e.g., `sha256:72297848456d5d37d1262630108ab308d3e9ec7ed1c3286a32fe09856619a782`).
     */
    Image?: string;
    /**
     * The ID (digest) of the image that this container was created from.
     */
    ImageID?: string;
    /**
     * OCI descriptor of the platform-specific manifest of the image
     * the container was created from.
     *
     * Note: Only available if the daemon provides a multi-platform
     * image store.
     *
     * This field is not populated in the `GET /system/df` endpoint.
     *
     */
    ImageManifestDescriptor?: OCIDescriptor | null;
    /**
     * Command to run when starting the container
     */
    Command?: string;
    /**
     * Date and time at which the container was created as a Unix timestamp
     * (number of seconds since EPOCH).
     */
    Created?: number;
    /**
     * Port-mappings for the container.
     */
    Ports?: Array<Port>;
    /**
     * The size of files that have been created or changed by this container.
     *
     * This field is omitted by default, and only set when size is requested
     * in the API request.
     */
    SizeRw?: number | null;
    /**
     * The total size of all files in the read-only layers from the image
     * that the container uses. These layers can be shared between containers.
     *
     * This field is omitted by default, and only set when size is requested
     * in the API request.
     */
    SizeRootFs?: number | null;
    /**
     * User-defined key/value metadata.
     */
    Labels?: Record<string, string>;
    /**
     * The state of this container.
     *
     */
    State?: 'created' | 'running' | 'paused' | 'restarting' | 'exited' | 'removing' | 'dead';
    /**
     * Additional human-readable status of this container (e.g. `Exit 0`)
     */
    Status?: string;
    /**
     * Summary of host-specific runtime information of the container. This
     * is a reduced set of information in the container's "HostConfig" as
     * available in the container "inspect" response.
     */
    HostConfig?: {
        /**
         * Networking mode (`host`, `none`, `container:<id>`) or name of the
         * primary network the container is using.
         *
         * This field is primarily for backward compatibility. The container
         * can be connected to multiple networks for which information can be
         * found in the `NetworkSettings.Networks` field, which enumerates
         * settings per network.
         */
        NetworkMode?: string;
        /**
         * Arbitrary key-value metadata attached to the container.
         */
        Annotations?: Record<string, string> | null;
    };
    /**
     * Summary of the container's network settings
     */
    NetworkSettings?: {
        /**
         * Summary of network-settings for each network the container is
         * attached to.
         */
        Networks?: Record<string, EndpointSettings>;
    };
    /**
     * List of mounts used by the container.
     */
    Mounts?: Array<MountPoint>;
};

