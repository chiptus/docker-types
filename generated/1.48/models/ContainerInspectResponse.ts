/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContainerConfig } from './ContainerConfig';
import type { ContainerState } from './ContainerState';
import type { DriverData } from './DriverData';
import type { HostConfig } from './HostConfig';
import type { MountPoint } from './MountPoint';
import type { NetworkSettings } from './NetworkSettings';
import type { OCIDescriptor } from './OCIDescriptor';

export type ContainerInspectResponse = {
    /**
     * The ID of this container as a 128-bit (64-character) hexadecimal string (32 bytes).
     */
    Id?: string;
    /**
     * Date and time at which the container was created, formatted in
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
     */
    Created?: string | null;
    /**
     * The path to the command being run
     */
    Path?: string;
    /**
     * The arguments to the command being run
     */
    Args?: Array<string>;
    State?: ContainerState;
    /**
     * The ID (digest) of the image that this container was created from.
     */
    Image?: string;
    /**
     * Location of the `/etc/resolv.conf` generated for the container on the
     * host.
     *
     * This file is managed through the docker daemon, and should not be
     * accessed or modified by other tools.
     */
    ResolvConfPath?: string;
    /**
     * Location of the `/etc/hostname` generated for the container on the
     * host.
     *
     * This file is managed through the docker daemon, and should not be
     * accessed or modified by other tools.
     */
    HostnamePath?: string;
    /**
     * Location of the `/etc/hosts` generated for the container on the
     * host.
     *
     * This file is managed through the docker daemon, and should not be
     * accessed or modified by other tools.
     */
    HostsPath?: string;
    /**
     * Location of the file used to buffer the container's logs. Depending on
     * the logging-driver used for the container, this field may be omitted.
     *
     * This file is managed through the docker daemon, and should not be
     * accessed or modified by other tools.
     */
    LogPath?: string | null;
    /**
     * The name associated with this container.
     *
     * For historic reasons, the name may be prefixed with a forward-slash (`/`).
     */
    Name?: string;
    /**
     * Number of times the container was restarted since it was created,
     * or since daemon was started.
     */
    RestartCount?: number;
    /**
     * The storage-driver used for the container's filesystem (graph-driver
     * or snapshotter).
     */
    Driver?: string;
    /**
     * The platform (operating system) for which the container was created.
     *
     * This field was introduced for the experimental "LCOW" (Linux Containers
     * On Windows) features, which has been removed. In most cases, this field
     * is equal to the host's operating system (`linux` or `windows`).
     */
    Platform?: string;
    /**
     * OCI descriptor of the platform-specific manifest of the image
     * the container was created from.
     *
     * Note: Only available if the daemon provides a multi-platform
     * image store.
     */
    ImageManifestDescriptor?: OCIDescriptor;
    /**
     * SELinux mount label set for the container.
     */
    MountLabel?: string;
    /**
     * SELinux process label set for the container.
     */
    ProcessLabel?: string;
    /**
     * The AppArmor profile set for the container.
     */
    AppArmorProfile?: string;
    /**
     * IDs of exec instances that are running in the container.
     */
    ExecIDs?: Array<string> | null;
    HostConfig?: HostConfig;
    GraphDriver?: DriverData;
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
     * List of mounts used by the container.
     */
    Mounts?: Array<MountPoint>;
    Config?: ContainerConfig;
    NetworkSettings?: NetworkSettings;
};

