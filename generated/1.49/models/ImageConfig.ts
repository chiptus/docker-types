/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HealthConfig } from './HealthConfig';

/**
 * Configuration of the image. These fields are used as defaults
 * when starting a container from the image.
 *
 */
export type ImageConfig = {
    /**
     * The hostname to use for the container, as a valid RFC 1123 hostname.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: this field is not part of the image specification and is
     * > always empty. It must not be used, and will be removed in API v1.50.
     *
     */
    Hostname?: string;
    /**
     * The domain name to use for the container.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: this field is not part of the image specification and is
     * > always empty. It must not be used, and will be removed in API v1.50.
     *
     */
    Domainname?: string;
    /**
     * The user that commands are run as inside the container.
     */
    User?: string;
    /**
     * Whether to attach to `stdin`.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: this field is not part of the image specification and is
     * > always false. It must not be used, and will be removed in API v1.50.
     *
     */
    AttachStdin?: boolean;
    /**
     * Whether to attach to `stdout`.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: this field is not part of the image specification and is
     * > always false. It must not be used, and will be removed in API v1.50.
     *
     */
    AttachStdout?: boolean;
    /**
     * Whether to attach to `stderr`.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: this field is not part of the image specification and is
     * > always false. It must not be used, and will be removed in API v1.50.
     *
     */
    AttachStderr?: boolean;
    /**
     * An object mapping ports to an empty object in the form:
     *
     * `{"<port>/<tcp|udp|sctp>": {}}`
     *
     */
    ExposedPorts?: Record<string, any> | null;
    /**
     * Attach standard streams to a TTY, including `stdin` if it is not closed.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: this field is not part of the image specification and is
     * > always false. It must not be used, and will be removed in API v1.50.
     *
     */
    Tty?: boolean;
    /**
     * Open `stdin`
     *
     * <p><br /></p>
     *
     * > **Deprecated**: this field is not part of the image specification and is
     * > always false. It must not be used, and will be removed in API v1.50.
     *
     */
    OpenStdin?: boolean;
    /**
     * Close `stdin` after one attached client disconnects.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: this field is not part of the image specification and is
     * > always false. It must not be used, and will be removed in API v1.50.
     *
     */
    StdinOnce?: boolean;
    /**
     * A list of environment variables to set inside the container in the
     * form `["VAR=value", ...]`. A variable without `=` is removed from the
     * environment, rather than to have an empty value.
     *
     */
    Env?: Array<string>;
    /**
     * Command to run specified as a string or an array of strings.
     *
     */
    Cmd?: Array<string>;
    Healthcheck?: HealthConfig;
    /**
     * Command is already escaped (Windows only)
     */
    ArgsEscaped?: boolean | null;
    /**
     * The name (or reference) of the image to use when creating the container,
     * or which was used when the container was created.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: this field is not part of the image specification and is
     * > always empty. It must not be used, and will be removed in API v1.50.
     *
     */
    Image?: string;
    /**
     * An object mapping mount point paths inside the container to empty
     * objects.
     *
     */
    Volumes?: Record<string, any>;
    /**
     * The working directory for commands to run in.
     */
    WorkingDir?: string;
    /**
     * The entry point for the container as a string or an array of strings.
     *
     * If the array consists of exactly one empty string (`[""]`) then the
     * entry point is reset to system default (i.e., the entry point used by
     * docker when there is no `ENTRYPOINT` instruction in the `Dockerfile`).
     *
     */
    Entrypoint?: Array<string>;
    /**
     * Disable networking for the container.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: this field is not part of the image specification and is
     * > always omitted. It must not be used, and will be removed in API v1.50.
     *
     */
    NetworkDisabled?: boolean | null;
    /**
     * MAC address of the container.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: this field is not part of the image specification and is
     * > always omitted. It must not be used, and will be removed in API v1.50.
     *
     */
    MacAddress?: string | null;
    /**
     * `ONBUILD` metadata that were defined in the image's `Dockerfile`.
     *
     */
    OnBuild?: Array<string> | null;
    /**
     * User-defined key/value metadata.
     */
    Labels?: Record<string, string>;
    /**
     * Signal to stop a container as a string or unsigned integer.
     *
     */
    StopSignal?: string | null;
    /**
     * Timeout to stop a container in seconds.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: this field is not part of the image specification and is
     * > always omitted. It must not be used, and will be removed in API v1.50.
     *
     */
    StopTimeout?: number | null;
    /**
     * Shell for when `RUN`, `CMD`, and `ENTRYPOINT` uses a shell.
     *
     */
    Shell?: Array<string> | null;
};

