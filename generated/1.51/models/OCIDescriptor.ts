/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OCIPlatform } from './OCIPlatform';

/**
 * A descriptor struct containing digest, media type, and size, as defined in
 * the [OCI Content Descriptors Specification](https://github.com/opencontainers/image-spec/blob/v1.0.1/descriptor.md).
 *
 */
export type OCIDescriptor = {
    /**
     * The media type of the object this schema refers to.
     *
     */
    mediaType?: string;
    /**
     * The digest of the targeted content.
     *
     */
    digest?: string;
    /**
     * The size in bytes of the blob.
     *
     */
    size?: number;
    /**
     * List of URLs from which this object MAY be downloaded.
     */
    urls?: Array<string> | null;
    /**
     * Arbitrary metadata relating to the targeted content.
     */
    annotations?: Record<string, string> | null;
    /**
     * Data is an embedding of the targeted content. This is encoded as a base64
     * string when marshalled to JSON (automatically, by encoding/json). If
     * present, Data can be used directly to avoid fetching the targeted content.
     */
    data?: string | null;
    platform?: OCIPlatform;
    /**
     * ArtifactType is the IANA media type of this artifact.
     */
    artifactType?: string | null;
};

