/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Mount } from './Mount';
import type { PortMap } from './PortMap';
import type { Resources } from './Resources';
import type { RestartPolicy } from './RestartPolicy';

/**
 * Container configuration that depends on the host we are running on
 */
export type HostConfig = (Resources & {
    /**
     * A list of volume bindings for this container. Each volume binding is a string in one of these forms:
     *
     * - `host-src:container-dest` to bind-mount a host path into the container. Both `host-src`, and `container-dest` must be an _absolute_ path.
     * - `host-src:container-dest:ro` to make the bind mount read-only inside the container. Both `host-src`, and `container-dest` must be an _absolute_ path.
     * - `volume-name:container-dest` to bind-mount a volume managed by a volume driver into the container. `container-dest` must be an _absolute_ path.
     * - `volume-name:container-dest:ro` to mount the volume read-only inside the container.  `container-dest` must be an _absolute_ path.
     *
     */
    Binds?: Array<string>;
    /**
     * Path to a file where the container ID is written
     */
    ContainerIDFile?: string;
    /**
     * The logging configuration for this container
     */
    LogConfig?: {
        Type?: 'json-file' | 'syslog' | 'journald' | 'gelf' | 'fluentd' | 'awslogs' | 'splunk' | 'etwlogs' | 'none';
        Config?: Record<string, string>;
    };
    /**
     * Network mode to use for this container. Supported standard values are: `bridge`, `host`, `none`, and `container:<name|id>`. Any other value is taken as a custom network's name to which this container should connect to.
     */
    NetworkMode?: string;
    PortBindings?: PortMap;
    RestartPolicy?: RestartPolicy;
    /**
     * Automatically remove the container when the container's process exits. This has no effect if `RestartPolicy` is set.
     */
    AutoRemove?: boolean;
    /**
     * Driver that this container uses to mount volumes.
     */
    VolumeDriver?: string;
    /**
     * A list of volumes to inherit from another container, specified in the form `<container name>[:<ro|rw>]`.
     */
    VolumesFrom?: Array<string>;
    /**
     * Specification for mounts to be added to the container.
     */
    Mounts?: Array<Mount>;
    /**
     * A list of kernel capabilities to add to the container.
     */
    CapAdd?: Array<string>;
    /**
     * A list of kernel capabilities to drop from the container.
     */
    CapDrop?: Array<string>;
    /**
     * A list of DNS servers for the container to use.
     */
    Dns?: Array<string>;
    /**
     * A list of DNS options.
     */
    DnsOptions?: Array<string>;
    /**
     * A list of DNS search domains.
     */
    DnsSearch?: Array<string>;
    /**
     * A list of hostnames/IP mappings to add to the container's `/etc/hosts` file. Specified in the form `["hostname:IP"]`.
     *
     */
    ExtraHosts?: Array<string>;
    /**
     * A list of additional groups that the container process will run as.
     */
    GroupAdd?: Array<string>;
    /**
     * IPC sharing mode for the container. Possible values are:
     *
     * - `"none"`: own private IPC namespace, with /dev/shm not mounted
     * - `"private"`: own private IPC namespace
     * - `"shareable"`: own private IPC namespace, with a possibility to share it with other containers
     * - `"container:<name|id>"`: join another (shareable) container's IPC namespace
     * - `"host"`: use the host system's IPC namespace
     *
     * If not specified, daemon default is used, which can either be `"private"`
     * or `"shareable"`, depending on daemon version and configuration.
     *
     */
    IpcMode?: string;
    /**
     * Cgroup to use for the container.
     */
    Cgroup?: string;
    /**
     * A list of links for the container in the form `container_name:alias`.
     */
    Links?: Array<string>;
    /**
     * An integer value containing the score given to the container in order to tune OOM killer preferences.
     */
    OomScoreAdj?: number;
    /**
     * Set the PID (Process) Namespace mode for the container. It can be either:
     *
     * - `"container:<name|id>"`: joins another container's PID namespace
     * - `"host"`: use the host's PID namespace inside the container
     *
     */
    PidMode?: string;
    /**
     * Gives the container full access to the host.
     */
    Privileged?: boolean;
    /**
     * Allocates an ephemeral host port for all of a container's
     * exposed ports.
     *
     * Ports are de-allocated when the container stops and allocated when the container starts.
     * The allocated port might be changed when restarting the container.
     *
     * The port is selected from the ephemeral port range that depends on the kernel.
     * For example, on Linux the range is defined by `/proc/sys/net/ipv4/ip_local_port_range`.
     *
     */
    PublishAllPorts?: boolean;
    /**
     * Mount the container's root filesystem as read only.
     */
    ReadonlyRootfs?: boolean;
    /**
     * A list of string values to customize labels for MLS systems, such as SELinux.
     */
    SecurityOpt?: Array<string>;
    /**
     * Storage driver options for this container, in the form `{"size": "120G"}`.
     *
     */
    StorageOpt?: Record<string, string>;
    /**
     * A map of container directories which should be replaced by tmpfs mounts, and their corresponding mount options. For example: `{ "/run": "rw,noexec,nosuid,size=65536k" }`.
     *
     */
    Tmpfs?: Record<string, string>;
    /**
     * UTS namespace to use for the container.
     */
    UTSMode?: string;
    /**
     * Sets the usernamespace mode for the container when usernamespace remapping option is enabled.
     */
    UsernsMode?: string;
    /**
     * Size of `/dev/shm` in bytes. If omitted, the system uses 64MB.
     */
    ShmSize?: number;
    /**
     * A list of kernel parameters (sysctls) to set in the container. For example: `{"net.ipv4.ip_forward": "1"}`
     *
     */
    Sysctls?: Record<string, string>;
    /**
     * Runtime to use with this container.
     */
    Runtime?: string;
    /**
     * Initial console size, as an `[height, width]` array. (Windows only)
     */
    ConsoleSize?: Array<number>;
    /**
     * Isolation technology of the container. (Windows only)
     */
    Isolation?: 'default' | 'process' | 'hyperv';
    /**
     * The list of paths to be masked inside the container (this overrides the default set of paths)
     */
    MaskedPaths?: Array<string>;
    /**
     * The list of paths to be set as read-only inside the container (this overrides the default set of paths)
     */
    ReadonlyPaths?: Array<string>;
});

