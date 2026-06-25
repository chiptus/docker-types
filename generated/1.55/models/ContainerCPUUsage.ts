/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * All CPU stats aggregated since container inception.
 *
 */
export type ContainerCPUUsage = {
    /**
     * Total CPU time consumed in nanoseconds (Linux) or 100's of nanoseconds (Windows).
     *
     */
    total_usage?: number;
    /**
     * Total CPU time (in nanoseconds) consumed per core (Linux).
     *
     * This field is Linux-specific when using cgroups v1. It is omitted
     * when using cgroups v2 and Windows containers.
     *
     */
    percpu_usage?: Array<number> | null;
    /**
     * Time (in nanoseconds) spent by tasks of the cgroup in kernel mode (Linux),
     * or time spent (in 100's of nanoseconds) by all container processes in
     * kernel mode (Windows).
     *
     * Not populated for Windows containers using Hyper-V isolation.
     *
     */
    usage_in_kernelmode?: number;
    /**
     * Time (in nanoseconds) spent by tasks of the cgroup in user mode (Linux),
     * or time spent (in 100's of nanoseconds) by all container processes in
     * kernel mode (Windows).
     *
     * Not populated for Windows containers using Hyper-V isolation.
     *
     */
    usage_in_usermode?: number;
};

