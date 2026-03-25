/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BuildIdentity } from './BuildIdentity';
import type { PullIdentity } from './PullIdentity';
import type { SignatureIdentity } from './SignatureIdentity';

/**
 * Identity holds information about the identity and origin of the image.
 * This is trusted information verified by the daemon and cannot be modified
 * by tagging an image to a different name.
 */
export type Identity = {
    /**
     * Signature contains the properties of verified signatures for the image.
     */
    Signature?: Array<SignatureIdentity>;
    /**
     * Pull contains remote location information if image was created via pull.
     * If image was pulled via mirror, this contains the original repository location.
     * After successful push this images also contains the pushed repository location.
     */
    Pull?: Array<PullIdentity>;
    /**
     * Build contains build reference information if image was created via build.
     */
    Build?: Array<BuildIdentity>;
};

