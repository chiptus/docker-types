/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OCIDescriptor } from './OCIDescriptor';
import type { OCIPlatform } from './OCIPlatform';

/**
 * ImageManifestSummary represents a summary of an image manifest.
 *
 */
export type ImageManifestSummary = {
    /**
     * ID is the content-addressable ID of an image and is the same as the
     * digest of the image manifest.
     *
     */
    ID: string;
    Descriptor: OCIDescriptor;
    /**
     * Indicates whether all the child content (image config, layers) is fully available locally.
     */
    Available: boolean;
    Size: {
        /**
         * Total is the total size (in bytes) of all the locally present
         * data (both distributable and non-distributable) that's related to
         * this manifest and its children.
         * This equal to the sum of [Content] size AND all the sizes in the
         * [Size] struct present in the Kind-specific data struct.
         * For example, for an image kind (Kind == "image")
         * this would include the size of the image content and unpacked
         * image snapshots ([Size.Content] + [ImageData.Size.Unpacked]).
         *
         */
        Total: number;
        /**
         * Content is the size (in bytes) of all the locally present
         * content in the content store (e.g. image config, layers)
         * referenced by this manifest and its children.
         * This only includes blobs in the content store.
         *
         */
        Content: number;
    };
    /**
     * The kind of the manifest.
     *
     * kind         | description
     * -------------|-----------------------------------------------------------
     * image        | Image manifest that can be used to start a container.
     * attestation  | Attestation manifest produced by the Buildkit builder for a specific image manifest.
     *
     */
    Kind: 'image' | 'attestation' | 'unknown';
    /**
     * The image data for the image manifest.
     * This field is only populated when Kind is "image".
     *
     */
    ImageData?: {
        /**
         * OCI platform of the image. This will be the platform specified in the
         * manifest descriptor from the index/manifest list.
         * If it's not available, it will be obtained from the image config.
         *
         */
        Platform: OCIPlatform;
        /**
         * The IDs of the containers that are using this image.
         *
         */
        Containers: Array<string>;
        Size: {
            /**
             * Unpacked is the size (in bytes) of the locally unpacked
             * (uncompressed) image content that's directly usable by the containers
             * running this image.
             * It's independent of the distributable content - e.g.
             * the image might still have an unpacked data that's still used by
             * some container even when the distributable/compressed content is
             * already gone.
             *
             */
            Unpacked: number;
        };
    } | null;
    /**
     * The image data for the attestation manifest.
     * This field is only populated when Kind is "attestation".
     *
     */
    AttestationData?: {
        /**
         * The digest of the image manifest that this attestation is for.
         *
         */
        For: string;
    } | null;
};

