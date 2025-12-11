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
     * The user that commands are run as inside the container.
     */
    User?: string;
    /**
     * An object mapping ports to an empty object in the form:
     *
     * `{"<port>/<tcp|udp|sctp>": {}}`
     *
     */
    ExposedPorts?: Record<string, any> | null;
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
     * Shell for when `RUN`, `CMD`, and `ENTRYPOINT` uses a shell.
     *
     */
    Shell?: Array<string> | null;
};

