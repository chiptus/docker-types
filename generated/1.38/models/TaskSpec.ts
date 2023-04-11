/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HealthConfig } from './HealthConfig';
import type { Mount } from './Mount';
import type { Platform } from './Platform';
import type { ResourceObject } from './ResourceObject';

/**
 * User modifiable task configuration.
 */
export type TaskSpec = {
    /**
     * Plugin spec for the service.  *(Experimental release only.)*
     *
     * <p><br /></p>
     *
     * > **Note**: ContainerSpec, NetworkAttachmentSpec, and PluginSpec are
     * > mutually exclusive. PluginSpec is only used when the Runtime field
     * > is set to `plugin`. NetworkAttachmentSpec is used when the Runtime
     * > field is set to `attachment`.
     *
     */
    PluginSpec?: {
        /**
         * The name or 'alias' to use for the plugin.
         */
        Name?: string;
        /**
         * The plugin image reference to use.
         */
        Remote?: string;
        /**
         * Disable the plugin once scheduled.
         */
        Disabled?: boolean;
        PluginPrivilege?: Array<{
            Name?: string;
            Description?: string;
            Value?: Array<string>;
        }>;
    };
    /**
     * Container spec for the service.
     *
     * <p><br /></p>
     *
     * > **Note**: ContainerSpec, NetworkAttachmentSpec, and PluginSpec are
     * > mutually exclusive. PluginSpec is only used when the Runtime field
     * > is set to `plugin`. NetworkAttachmentSpec is used when the Runtime
     * > field is set to `attachment`.
     *
     */
    ContainerSpec?: {
        /**
         * The image name to use for the container
         */
        Image?: string;
        /**
         * User-defined key/value data.
         */
        Labels?: Record<string, string>;
        /**
         * The command to be run in the image.
         */
        Command?: Array<string>;
        /**
         * Arguments to the command.
         */
        Args?: Array<string>;
        /**
         * The hostname to use for the container, as a valid RFC 1123 hostname.
         */
        Hostname?: string;
        /**
         * A list of environment variables in the form `VAR=value`.
         */
        Env?: Array<string>;
        /**
         * The working directory for commands to run in.
         */
        Dir?: string;
        /**
         * The user inside the container.
         */
        User?: string;
        /**
         * A list of additional groups that the container process will run as.
         */
        Groups?: Array<string>;
        /**
         * Security options for the container
         */
        Privileges?: {
            /**
             * CredentialSpec for managed service account (Windows only)
             */
            CredentialSpec?: {
                /**
                 * Load credential spec from this file. The file is read by the daemon, and must be present in the
                 * `CredentialSpecs` subdirectory in the docker data directory, which defaults to
                 * `C:\ProgramData\Docker\` on Windows.
                 *
                 * For example, specifying `spec.json` loads `C:\ProgramData\Docker\CredentialSpecs\spec.json`.
                 *
                 * <p><br /></p>
                 *
                 * > **Note**: `CredentialSpec.File` and `CredentialSpec.Registry` are mutually exclusive.
                 *
                 */
                File?: string;
                /**
                 * Load credential spec from this value in the Windows registry. The specified registry value must be
                 * located in:
                 *
                 * `HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Virtualization\Containers\CredentialSpecs`
                 *
                 * <p><br /></p>
                 *
                 *
                 * > **Note**: `CredentialSpec.File` and `CredentialSpec.Registry` are mutually exclusive.
                 *
                 */
                Registry?: string;
            };
            /**
             * SELinux labels of the container
             */
            SELinuxContext?: {
                /**
                 * Disable SELinux
                 */
                Disable?: boolean;
                /**
                 * SELinux user label
                 */
                User?: string;
                /**
                 * SELinux role label
                 */
                Role?: string;
                /**
                 * SELinux type label
                 */
                Type?: string;
                /**
                 * SELinux level label
                 */
                Level?: string;
            };
        };
        /**
         * Whether a pseudo-TTY should be allocated.
         */
        TTY?: boolean;
        /**
         * Open `stdin`
         */
        OpenStdin?: boolean;
        /**
         * Mount the container's root filesystem as read only.
         */
        ReadOnly?: boolean;
        /**
         * Specification for mounts to be added to containers created as part of the service.
         */
        Mounts?: Array<Mount>;
        /**
         * Signal to stop the container.
         */
        StopSignal?: string;
        /**
         * Amount of time to wait for the container to terminate before forcefully killing it.
         */
        StopGracePeriod?: number;
        HealthCheck?: HealthConfig;
        /**
         * A list of hostname/IP mappings to add to the container's `hosts`
         * file. The format of extra hosts is specified in the
         * [hosts(5)](http://man7.org/linux/man-pages/man5/hosts.5.html)
         * man page:
         *
         * IP_address canonical_hostname [aliases...]
         *
         */
        Hosts?: Array<string>;
        /**
         * Specification for DNS related configurations in resolver configuration file (`resolv.conf`).
         */
        DNSConfig?: {
            /**
             * The IP addresses of the name servers.
             */
            Nameservers?: Array<string>;
            /**
             * A search list for host-name lookup.
             */
            Search?: Array<string>;
            /**
             * A list of internal resolver variables to be modified (e.g., `debug`, `ndots:3`, etc.).
             */
            Options?: Array<string>;
        };
        /**
         * Secrets contains references to zero or more secrets that will be exposed to the service.
         */
        Secrets?: Array<{
            /**
             * File represents a specific target that is backed by a file.
             */
            File?: {
                /**
                 * Name represents the final filename in the filesystem.
                 */
                Name?: string;
                /**
                 * UID represents the file UID.
                 */
                UID?: string;
                /**
                 * GID represents the file GID.
                 */
                GID?: string;
                /**
                 * Mode represents the FileMode of the file.
                 */
                Mode?: number;
            };
            /**
             * SecretID represents the ID of the specific secret that we're referencing.
             */
            SecretID?: string;
            /**
             * SecretName is the name of the secret that this references, but this is just provided for
             * lookup/display purposes. The secret in the reference will be identified by its ID.
             *
             */
            SecretName?: string;
        }>;
        /**
         * Configs contains references to zero or more configs that will be exposed to the service.
         */
        Configs?: Array<{
            /**
             * File represents a specific target that is backed by a file.
             */
            File?: {
                /**
                 * Name represents the final filename in the filesystem.
                 */
                Name?: string;
                /**
                 * UID represents the file UID.
                 */
                UID?: string;
                /**
                 * GID represents the file GID.
                 */
                GID?: string;
                /**
                 * Mode represents the FileMode of the file.
                 */
                Mode?: number;
            };
            /**
             * ConfigID represents the ID of the specific config that we're referencing.
             */
            ConfigID?: string;
            /**
             * ConfigName is the name of the config that this references, but this is just provided for
             * lookup/display purposes. The config in the reference will be identified by its ID.
             *
             */
            ConfigName?: string;
        }>;
        /**
         * Isolation technology of the containers running the service. (Windows only)
         */
        Isolation?: 'default' | 'process' | 'hyperv';
        /**
         * Run an init inside the container that forwards signals and reaps processes. This field is omitted if empty, and the default (as configured on the daemon) is used.
         */
        Init?: boolean | null;
    };
    /**
     * Read-only spec type for non-swarm containers attached to swarm overlay
     * networks.
     *
     * <p><br /></p>
     *
     * > **Note**: ContainerSpec, NetworkAttachmentSpec, and PluginSpec are
     * > mutually exclusive. PluginSpec is only used when the Runtime field
     * > is set to `plugin`. NetworkAttachmentSpec is used when the Runtime
     * > field is set to `attachment`.
     *
     */
    NetworkAttachmentSpec?: {
        /**
         * ID of the container represented by this task
         */
        ContainerID?: string;
    };
    /**
     * Resource requirements which apply to each individual container created as part of the service.
     */
    Resources?: {
        /**
         * Define resources limits.
         */
        Limits?: ResourceObject;
        /**
         * Define resources reservation.
         */
        Reservations?: ResourceObject;
    };
    /**
     * Specification for the restart policy which applies to containers created as part of this service.
     */
    RestartPolicy?: {
        /**
         * Condition for restart.
         */
        Condition?: 'none' | 'on-failure' | 'any';
        /**
         * Delay between restart attempts.
         */
        Delay?: number;
        /**
         * Maximum attempts to restart a given container before giving up (default value is 0, which is ignored).
         */
        MaxAttempts?: number;
        /**
         * Windows is the time window used to evaluate the restart policy (default value is 0, which is unbounded).
         */
        Window?: number;
    };
    Placement?: {
        /**
         * An array of constraints.
         */
        Constraints?: Array<string>;
        /**
         * Preferences provide a way to make the scheduler aware of factors such as topology. They are provided in order from highest to lowest precedence.
         */
        Preferences?: Array<{
            Spread?: {
                /**
                 * label descriptor, such as engine.labels.az
                 */
                SpreadDescriptor?: string;
            };
        }>;
        /**
         * Platforms stores all the platforms that the service's image can
         * run on. This field is used in the platform filter for scheduling.
         * If empty, then the platform filter is off, meaning there are no
         * scheduling restrictions.
         *
         */
        Platforms?: Array<Platform>;
    };
    /**
     * A counter that triggers an update even if no relevant parameters have been changed.
     */
    ForceUpdate?: number;
    /**
     * Runtime is the type of runtime specified for the task executor.
     */
    Runtime?: string;
    Networks?: Array<{
        Target?: string;
        Aliases?: Array<string>;
    }>;
    /**
     * Specifies the log driver to use for tasks created from this spec. If not present, the default one for the swarm will be used, finally falling back to the engine default if not specified.
     */
    LogDriver?: {
        Name?: string;
        Options?: Record<string, string>;
    };
};

