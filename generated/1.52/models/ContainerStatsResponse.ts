/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContainerBlkioStats } from './ContainerBlkioStats';
import type { ContainerCPUStats } from './ContainerCPUStats';
import type { ContainerMemoryStats } from './ContainerMemoryStats';
import type { ContainerPidsStats } from './ContainerPidsStats';
import type { ContainerStorageStats } from './ContainerStorageStats';

/**
 * Statistics sample for a container.
 *
 */
export type ContainerStatsResponse = {
    /**
     * ID of the container for which the stats were collected.
     *
     */
    id?: string | null;
    /**
     * Name of the container for which the stats were collected.
     *
     */
    name?: string | null;
    /**
     * OSType is the OS of the container ("linux" or "windows") to allow
     * platform-specific handling of stats.
     *
     */
    os_type?: string | null;
    /**
     * Date and time at which this sample was collected.
     * The value is formatted as [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)
     * with nano-seconds.
     *
     */
    read?: string;
    cpu_stats?: ContainerCPUStats;
    memory_stats?: ContainerMemoryStats;
    /**
     * Network statistics for the container per interface.
     *
     * This field is omitted if the container has no networking enabled.
     *
     */
    networks?: any;
    pids_stats?: ContainerPidsStats;
    blkio_stats?: ContainerBlkioStats;
    /**
     * The number of processors on the system.
     *
     * This field is Windows-specific and always zero for Linux containers.
     *
     */
    num_procs?: number;
    storage_stats?: ContainerStorageStats;
    /**
     * Date and time at which this first sample was collected. This field
     * is not propagated if the "one-shot" option is set. If the "one-shot"
     * option is set, this field may be omitted, empty, or set to a default
     * date (`0001-01-01T00:00:00Z`).
     *
     * The value is formatted as [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)
     * with nano-seconds.
     *
     */
    preread?: string;
    precpu_stats?: ContainerCPUStats;
};

