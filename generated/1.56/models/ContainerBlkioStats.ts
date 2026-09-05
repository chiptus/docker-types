/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContainerBlkioStatEntry } from './ContainerBlkioStatEntry';

/**
 * BlkioStats stores all IO service stats for data read and write.
 *
 * This type is Linux-specific and holds many fields that are specific to cgroups v1.
 * On a cgroup v2 host, all fields other than `io_service_bytes_recursive`
 * are omitted or `null`.
 *
 * This type is only populated on Linux and omitted for Windows containers.
 *
 */
export type ContainerBlkioStats = {
    io_service_bytes_recursive?: Array<ContainerBlkioStatEntry>;
    /**
     * This field is only available when using Linux containers with
     * cgroups v1. It is omitted or `null` when using cgroups v2.
     *
     */
    io_serviced_recursive?: Array<ContainerBlkioStatEntry> | null;
    /**
     * This field is only available when using Linux containers with
     * cgroups v1. It is omitted or `null` when using cgroups v2.
     *
     */
    io_queue_recursive?: Array<ContainerBlkioStatEntry> | null;
    /**
     * This field is only available when using Linux containers with
     * cgroups v1. It is omitted or `null` when using cgroups v2.
     *
     */
    io_service_time_recursive?: Array<ContainerBlkioStatEntry> | null;
    /**
     * This field is only available when using Linux containers with
     * cgroups v1. It is omitted or `null` when using cgroups v2.
     *
     */
    io_wait_time_recursive?: Array<ContainerBlkioStatEntry> | null;
    /**
     * This field is only available when using Linux containers with
     * cgroups v1. It is omitted or `null` when using cgroups v2.
     *
     */
    io_merged_recursive?: Array<ContainerBlkioStatEntry> | null;
    /**
     * This field is only available when using Linux containers with
     * cgroups v1. It is omitted or `null` when using cgroups v2.
     *
     */
    io_time_recursive?: Array<ContainerBlkioStatEntry> | null;
    /**
     * This field is only available when using Linux containers with
     * cgroups v1. It is omitted or `null` when using cgroups v2.
     *
     */
    sectors_recursive?: Array<ContainerBlkioStatEntry> | null;
};

