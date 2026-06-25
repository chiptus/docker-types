/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * StorageStats is the disk I/O stats for read/write on Windows.
 *
 * This type is Windows-specific and omitted for Linux containers.
 *
 */
export type ContainerStorageStats = {
    read_count_normalized?: number | null;
    read_size_bytes?: number | null;
    write_count_normalized?: number | null;
    write_size_bytes?: number | null;
};

