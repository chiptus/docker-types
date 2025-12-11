/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * PidsStats contains Linux-specific stats of a container's process-IDs (PIDs).
 *
 * This type is Linux-specific and omitted for Windows containers.
 *
 */
export type ContainerPidsStats = {
    /**
     * Current is the number of PIDs in the cgroup.
     *
     */
    current?: number | null;
    /**
     * Limit is the hard limit on the number of pids in the cgroup.
     * A "Limit" of 0 means that there is no limit.
     *
     */
    limit?: number | null;
};

