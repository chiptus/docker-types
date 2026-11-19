/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * represents system data usage information for container resources.
 *
 */
export type ContainersDiskUsage = {
    /**
     * Count of active containers.
     *
     */
    ActiveCount?: number;
    /**
     * Count of all containers.
     *
     */
    TotalCount?: number;
    /**
     * Disk space that can be reclaimed by removing inactive containers.
     *
     */
    Reclaimable?: number;
    /**
     * Disk space in use by containers.
     *
     */
    TotalSize?: number;
    /**
     * List of container summaries.
     *
     */
    Items?: Array<any>;
};

