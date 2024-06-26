/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Commit } from './Commit';
import type { GenericResources } from './GenericResources';
import type { PluginsInfo } from './PluginsInfo';
import type { RegistryServiceConfig } from './RegistryServiceConfig';
import type { Runtime } from './Runtime';
import type { SwarmInfo } from './SwarmInfo';

export type SystemInfo = {
    /**
     * Unique identifier of the daemon.
     *
     * <p><br /></p>
     *
     * > **Note**: The format of the ID itself is not part of the API, and
     * > should not be considered stable.
     *
     */
    ID?: string;
    /**
     * Total number of containers on the host.
     */
    Containers?: number;
    /**
     * Number of containers with status `"running"`.
     *
     */
    ContainersRunning?: number;
    /**
     * Number of containers with status `"paused"`.
     *
     */
    ContainersPaused?: number;
    /**
     * Number of containers with status `"stopped"`.
     *
     */
    ContainersStopped?: number;
    /**
     * Total number of images on the host.
     *
     * Both _tagged_ and _untagged_ (dangling) images are counted.
     *
     */
    Images?: number;
    /**
     * Name of the storage driver in use.
     */
    Driver?: string;
    /**
     * Information specific to the storage driver, provided as
     * "label" / "value" pairs.
     *
     * This information is provided by the storage driver, and formatted
     * in a way consistent with the output of `docker info` on the command
     * line.
     *
     * <p><br /></p>
     *
     * > **Note**: The information returned in this field, including the
     * > formatting of values and labels, should not be considered stable,
     * > and may change without notice.
     *
     */
    DriverStatus?: Array<Array<string>>;
    /**
     * Root directory of persistent Docker state.
     *
     * Defaults to `/var/lib/docker` on Linux, and `C:\ProgramData\docker`
     * on Windows.
     *
     */
    DockerRootDir?: string;
    /**
     * Status information about this node (standalone Swarm API).
     *
     * <p><br /></p>
     *
     * > **Note**: The information returned in this field is only propagated
     * > by the Swarm standalone API, and is empty (`null`) when using
     * > built-in swarm mode.
     *
     */
    SystemStatus?: Array<Array<string>>;
    Plugins?: PluginsInfo;
    /**
     * Indicates if the host has memory limit support enabled.
     */
    MemoryLimit?: boolean;
    /**
     * Indicates if the host has memory swap limit support enabled.
     */
    SwapLimit?: boolean;
    /**
     * Indicates if the host has kernel memory limit support enabled.
     */
    KernelMemory?: boolean;
    /**
     * Indicates if CPU CFS(Completely Fair Scheduler) period is supported by the host.
     */
    CpuCfsPeriod?: boolean;
    /**
     * Indicates if CPU CFS(Completely Fair Scheduler) quota is supported by the host.
     */
    CpuCfsQuota?: boolean;
    /**
     * Indicates if CPU Shares limiting is supported by the host.
     */
    CPUShares?: boolean;
    /**
     * Indicates if CPUsets (cpuset.cpus, cpuset.mems) are supported by the host.
     *
     * See [cpuset(7)](https://www.kernel.org/doc/Documentation/cgroup-v1/cpusets.txt)
     *
     */
    CPUSet?: boolean;
    /**
     * Indicates if OOM killer disable is supported on the host.
     */
    OomKillDisable?: boolean;
    /**
     * Indicates IPv4 forwarding is enabled.
     */
    IPv4Forwarding?: boolean;
    /**
     * Indicates if `bridge-nf-call-iptables` is available on the host.
     */
    BridgeNfIptables?: boolean;
    /**
     * Indicates if `bridge-nf-call-ip6tables` is available on the host.
     */
    BridgeNfIp6tables?: boolean;
    /**
     * Indicates if the daemon is running in debug-mode / with debug-level logging enabled.
     */
    Debug?: boolean;
    /**
     * The total number of file Descriptors in use by the daemon process.
     *
     * This information is only returned if debug-mode is enabled.
     *
     */
    NFd?: number;
    /**
     * The  number of goroutines that currently exist.
     *
     * This information is only returned if debug-mode is enabled.
     *
     */
    NGoroutines?: number;
    /**
     * Current system-time in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)
     * format with nano-seconds.
     *
     */
    SystemTime?: string;
    /**
     * The logging driver to use as a default for new containers.
     *
     */
    LoggingDriver?: string;
    /**
     * The driver to use for managing cgroups.
     *
     */
    CgroupDriver?: 'cgroupfs' | 'systemd';
    /**
     * Number of event listeners subscribed.
     */
    NEventsListener?: number;
    /**
     * Kernel version of the host.
     *
     * On Linux, this information obtained from `uname`. On Windows this
     * information is queried from the <kbd>HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\</kbd>
     * registry value, for example _"10.0 14393 (14393.1198.amd64fre.rs1_release_sec.170427-1353)"_.
     *
     */
    KernelVersion?: string;
    /**
     * Name of the host's operating system, for example: "Ubuntu 16.04.2 LTS"
     * or "Windows Server 2016 Datacenter"
     *
     */
    OperatingSystem?: string;
    /**
     * Generic type of the operating system of the host, as returned by the
     * Go runtime (`GOOS`).
     *
     * Currently returned values are "linux" and "windows". A full list of
     * possible values can be found in the [Go documentation](https://go.dev/doc/install/source#environment).
     *
     */
    OSType?: string;
    /**
     * Hardware architecture of the host, as returned by the Go runtime
     * (`GOARCH`).
     *
     * A full list of possible values can be found in the [Go documentation](https://go.dev/doc/install/source#environment).
     *
     */
    Architecture?: string;
    /**
     * The number of logical CPUs usable by the daemon.
     *
     * The number of available CPUs is checked by querying the operating
     * system when the daemon starts. Changes to operating system CPU
     * allocation after the daemon is started are not reflected.
     *
     */
    NCPU?: number;
    /**
     * Total amount of physical memory available on the host, in bytes.
     *
     */
    MemTotal?: number;
    /**
     * Address / URL of the index server that is used for image search,
     * and as a default for user authentication for Docker Hub and Docker Cloud.
     *
     */
    IndexServerAddress?: string;
    RegistryConfig?: RegistryServiceConfig;
    GenericResources?: GenericResources;
    /**
     * HTTP-proxy configured for the daemon. This value is obtained from the
     * [`HTTP_PROXY`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html) environment variable.
     *
     * Containers do not automatically inherit this configuration.
     *
     */
    HttpProxy?: string;
    /**
     * HTTPS-proxy configured for the daemon. This value is obtained from the
     * [`HTTPS_PROXY`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html) environment variable.
     *
     * Containers do not automatically inherit this configuration.
     *
     */
    HttpsProxy?: string;
    /**
     * Comma-separated list of domain extensions for which no proxy should be
     * used. This value is obtained from the [`NO_PROXY`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html)
     * environment variable.
     *
     * Containers do not automatically inherit this configuration.
     *
     */
    NoProxy?: string;
    /**
     * Hostname of the host.
     */
    Name?: string;
    /**
     * User-defined labels (key/value metadata) as set on the daemon.
     *
     * <p><br /></p>
     *
     * > **Note**: When part of a Swarm, nodes can both have _daemon_ labels,
     * > set through the daemon configuration, and _node_ labels, set from a
     * > manager node in the Swarm. Node labels are not included in this
     * > field. Node labels can be retrieved using the `/nodes/(id)` endpoint
     * > on a manager node in the Swarm.
     *
     */
    Labels?: Array<string>;
    /**
     * Indicates if experimental features are enabled on the daemon.
     *
     */
    ExperimentalBuild?: boolean;
    /**
     * Version string of the daemon.
     *
     */
    ServerVersion?: string;
    /**
     * URL of the distributed storage backend.
     *
     *
     * The storage backend is used for multihost networking (to store
     * network and endpoint information) and by the node discovery mechanism.
     *
     * <p><br /></p>
     *
     * > **Note**: This field is only propagated when using standalone Swarm
     * > mode, and overlay networking using an external k/v store. Overlay
     * > networks with Swarm mode enabled use the built-in raft store, and
     * > this field will be empty.
     *
     */
    ClusterStore?: string;
    /**
     * The network endpoint that the Engine advertises for the purpose of
     * node discovery. ClusterAdvertise is a `host:port` combination on which
     * the daemon is reachable by other hosts.
     *
     * <p><br /></p>
     *
     * > **Note**: This field is only propagated when using standalone Swarm
     * > mode, and overlay networking using an external k/v store. Overlay
     * > networks with Swarm mode enabled use the built-in raft store, and
     * > this field will be empty.
     *
     */
    ClusterAdvertise?: string;
    /**
     * List of [OCI compliant](https://github.com/opencontainers/runtime-spec)
     * runtimes configured on the daemon. Keys hold the "name" used to
     * reference the runtime.
     *
     * The Docker daemon relies on an OCI compliant runtime (invoked via the
     * `containerd` daemon) as its interface to the Linux kernel namespaces,
     * cgroups, and SELinux.
     *
     * The default runtime is `runc`, and automatically configured. Additional
     * runtimes can be configured by the user and will be listed here.
     *
     */
    Runtimes?: Record<string, Runtime>;
    /**
     * Name of the default OCI runtime that is used when starting containers.
     *
     * The default can be overridden per-container at create time.
     *
     */
    DefaultRuntime?: string;
    Swarm?: SwarmInfo;
    /**
     * Indicates if live restore is enabled.
     *
     * If enabled, containers are kept running when the daemon is shutdown
     * or upon daemon start if running containers are detected.
     *
     */
    LiveRestoreEnabled?: boolean;
    /**
     * Represents the isolation technology to use as a default for containers.
     * The supported values are platform-specific.
     *
     * If no isolation value is specified on daemon start, on Windows client,
     * the default is `hyperv`, and on Windows server, the default is `process`.
     *
     * This option is currently not used on other platforms.
     *
     */
    Isolation?: 'default' | 'hyperv' | 'process';
    /**
     * Name and, optional, path of the the `docker-init` binary.
     *
     * If the path is omitted, the daemon searches the host's `$PATH` for the
     * binary and uses the first result.
     *
     */
    InitBinary?: string;
    ContainerdCommit?: Commit;
    RuncCommit?: Commit;
    InitCommit?: Commit;
    /**
     * List of security features that are enabled on the daemon, such as
     * apparmor, seccomp, SELinux, and user-namespaces (userns).
     *
     * Additional configuration options for each security feature may
     * be present, and are included as a comma-separated list of key/value
     * pairs.
     *
     */
    SecurityOptions?: Array<string>;
};

