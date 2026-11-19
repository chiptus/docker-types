/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * BuildIdentity contains build reference information if image was created via build.
 */
export type BuildIdentity = {
    /**
     * Ref is the identifier for the build request. This reference can be used to
     * look up the build details in BuildKit history API.
     */
    Ref?: string;
    /**
     * CreatedAt is the time when the build ran.
     */
    CreatedAt?: string;
};

