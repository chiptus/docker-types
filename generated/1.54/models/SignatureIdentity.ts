/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { KnownSignerIdentity } from './KnownSignerIdentity';
import type { SignatureTimestamp } from './SignatureTimestamp';
import type { SignatureType } from './SignatureType';
import type { SignerIdentity } from './SignerIdentity';

/**
 * SignatureIdentity contains the properties of verified signatures for the image.
 */
export type SignatureIdentity = {
    /**
     * Name is a textual description summarizing the type of signature.
     */
    Name?: string;
    /**
     * Timestamps contains a list of verified signed timestamps for the signature.
     */
    Timestamps?: Array<SignatureTimestamp>;
    /**
     * KnownSigner is an identifier for a special signer identity that is known to the implementation.
     */
    KnownSigner?: KnownSignerIdentity;
    /**
     * DockerReference is the Docker image reference associated with the signature.
     * This is an optional field only present in older hashedrecord signatures.
     */
    DockerReference?: string;
    /**
     * Signer contains information about the signer certificate used to sign the image.
     */
    Signer?: SignerIdentity;
    /**
     * SignatureType is the type of signature format. E.g. "bundle-v0.3" or "hashedrecord".
     */
    SignatureType?: SignatureType;
    /**
     * Error contains error information if signature verification failed.
     * Other fields will be empty in this case.
     */
    Error?: string;
    /**
     * Warnings contains any warnings that occurred during signature verification.
     * For example, if there was no internet connectivity and cached trust roots were used.
     * Warning does not indicate a failed verification but may point to configuration issues.
     */
    Warnings?: Array<string>;
};

