/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Aggregates all memory stats since container inception on Linux.
 * Windows returns stats for commit and private working set only.
 *
 */
export type ContainerMemoryStats = {
    /**
     * Current `res_counter` usage for memory.
     *
     * This field is Linux-specific and omitted for Windows containers.
     *
     */
    usage?: number;
    /**
     * Maximum usage ever recorded.
     *
     * This field is Linux-specific and only supported on cgroups v1.
     * It is omitted when using cgroups v2 and for Windows containers.
     *
     */
    max_usage?: number;
    /**
     * All the stats exported via memory.stat.
     *
     * The fields in this object differ between cgroups v1 and v2.
     * On cgroups v1, fields such as `cache`, `rss`, `mapped_file` are available.
     * On cgroups v2, fields such as `file`, `anon`, `inactive_file` are available.
     *
     * This field is Linux-specific and omitted for Windows containers.
     *
     */
    stats?: Record<string, number>;
    /**
     * Number of times memory usage hits limits.
     *
     * This field is Linux-specific and only supported on cgroups v1.
     * It is omitted when using cgroups v2 and for Windows containers.
     *
     */
    failcnt?: number;
    /**
     * This field is Linux-specific and omitted for Windows containers.
     *
     */
    limit?: number;
    /**
     * Committed bytes.
     *
     * This field is Windows-specific and omitted for Linux containers.
     *
     */
    commitbytes?: number;
    /**
     * Peak committed bytes.
     *
     * This field is Windows-specific and omitted for Linux containers.
     *
     */
    commitpeakbytes?: number;
    /**
     * Private working set.
     *
     * This field is Windows-specific and omitted for Linux containers.
     *
     */
    privateworkingset?: number;
};

