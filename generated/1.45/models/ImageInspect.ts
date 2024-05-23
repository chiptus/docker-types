/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContainerConfig } from './ContainerConfig';
import type { GraphDriverData } from './GraphDriverData';

/**
 * Information about an image in the local image cache.
 *
 */
export type ImageInspect = {
    /**
     * ID is the content-addressable ID of an image.
     *
     * This identifier is a content-addressable digest calculated from the
     * image's configuration (which includes the digests of layers used by
     * the image).
     *
     * Note that this digest differs from the `RepoDigests` below, which
     * holds digests of image manifests that reference the image.
     *
     */
    Id?: string;
    /**
     * List of image names/tags in the local image cache that reference this
     * image.
     *
     * Multiple image tags can refer to the same image, and this list may be
     * empty if no tags reference the image, in which case the image is
     * "untagged", in which case it can still be referenced by its ID.
     *
     */
    RepoTags?: Array<string>;
    /**
     * List of content-addressable digests of locally available image manifests
     * that the image is referenced from. Multiple manifests can refer to the
     * same image.
     *
     * These digests are usually only available if the image was either pulled
     * from a registry, or if the image was pushed to a registry, which is when
     * the manifest is generated and its digest calculated.
     *
     */
    RepoDigests?: Array<string>;
    /**
     * ID of the parent image.
     *
     * Depending on how the image was created, this field may be empty and
     * is only set for images that were built/created locally. This field
     * is empty if the image was pulled from an image registry.
     *
     */
    Parent?: string;
    /**
     * Optional message that was set when committing or importing the image.
     *
     */
    Comment?: string;
    /**
     * Date and time at which the image was created, formatted in
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
     *
     * This information is only available if present in the image,
     * and omitted otherwise.
     *
     */
    Created?: string | null;
    /**
     * The ID of the container that was used to create the image.
     *
     * Depending on how the image was created, this field may be empty.
     *
     * **Deprecated**: this field is kept for backward compatibility, but
     * will be removed in API v1.45.
     *
     */
    Container?: string;
    /**
     * **Deprecated**: this field is kept for backward compatibility, but
     * will be removed in API v1.45.
     *
     */
    ContainerConfig?: ContainerConfig;
    /**
     * The version of Docker that was used to build the image.
     *
     * Depending on how the image was created, this field may be empty.
     *
     */
    DockerVersion?: string;
    /**
     * Name of the author that was specified when committing the image, or as
     * specified through MAINTAINER (deprecated) in the Dockerfile.
     *
     */
    Author?: string;
    Config?: ContainerConfig;
    /**
     * Hardware CPU architecture that the image runs on.
     *
     */
    Architecture?: string;
    /**
     * CPU architecture variant (presently ARM-only).
     *
     */
    Variant?: string | null;
    /**
     * Operating System the image is built to run on.
     *
     */
    Os?: string;
    /**
     * Operating System version the image is built to run on (especially
     * for Windows).
     *
     */
    OsVersion?: string | null;
    /**
     * Total size of the image including all layers it is composed of.
     *
     */
    Size?: number;
    /**
     * Total size of the image including all layers it is composed of.
     *
     * Deprecated: this field is omitted in API v1.44, but kept for backward compatibility. Use Size instead.
     *
     */
    VirtualSize?: number;
    GraphDriver?: GraphDriverData;
    /**
     * Information about the image's RootFS, including the layer IDs.
     *
     */
    RootFS?: {
        Type: string;
        Layers?: Array<string>;
    };
    /**
     * Additional metadata of the image in the local cache. This information
     * is local to the daemon, and not part of the image itself.
     *
     */
    Metadata?: {
        /**
         * Date and time at which the image was last tagged in
         * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
         *
         * This information is only available if the image was tagged locally,
         * and omitted otherwise.
         *
         */
        LastTagTime?: string | null;
    };
};

