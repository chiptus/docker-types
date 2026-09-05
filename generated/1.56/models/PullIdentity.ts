/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * PullIdentity contains remote location information if image was created via pull.
 * If image was pulled via mirror, this contains the original repository location.
 */
export type PullIdentity = {
    /**
     * Repository is the remote repository location the image was pulled from.
     */
    Repository?: string;
};

