/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The mount type. Available types:
 *
 * - `bind` a mount of a file or directory from the host into the container.
 * - `cluster` a Swarm cluster volume.
 * - `image` an OCI image.
 * - `npipe` a named pipe from the host into the container.
 * - `tmpfs` a `tmpfs`.
 * - `volume` a docker volume with the given `Name`.
 */
export type MountType = 'bind' | 'cluster' | 'image' | 'npipe' | 'tmpfs' | 'volume';
