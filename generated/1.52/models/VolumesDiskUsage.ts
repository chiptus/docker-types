/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * represents system data usage for volume resources.
 *
 */
export type VolumesDiskUsage = {
    /**
     * Count of active volumes.
     *
     */
    ActiveCount?: number;
    /**
     * Count of all volumes.
     *
     */
    TotalCount?: number;
    /**
     * Disk space that can be reclaimed by removing inactive volumes.
     *
     */
    Reclaimable?: number;
    /**
     * Disk space in use by volumes.
     *
     */
    TotalSize?: number;
    /**
     * List of volumes.
     *
     */
    Items?: Array<any>;
};

