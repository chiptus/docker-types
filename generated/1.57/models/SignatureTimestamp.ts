/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SignatureTimestampType } from './SignatureTimestampType';

/**
 * SignatureTimestamp contains information about a verified signed timestamp for an image signature.
 */
export type SignatureTimestamp = {
    Type?: SignatureTimestampType;
    URI?: string;
    Timestamp?: string;
};

