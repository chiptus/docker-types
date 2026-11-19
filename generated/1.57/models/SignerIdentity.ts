/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * SignerIdentity contains information about the signer certificate used to sign the image.
 */
export type SignerIdentity = {
    /**
     * CertificateIssuer is the certificate issuer.
     */
    CertificateIssuer?: string;
    /**
     * SubjectAlternativeName is the certificate subject alternative name.
     */
    SubjectAlternativeName?: string;
    /**
     * The OIDC issuer. Should match `iss` claim of ID token or, in the case of
     * a federated login like Dex it should match the issuer URL of the
     * upstream issuer. The issuer is not set the extensions are invalid and
     * will fail to render.
     */
    Issuer?: string;
    /**
     * Reference to specific build instructions that are responsible for signing.
     */
    BuildSignerURI?: string;
    /**
     * Immutable reference to the specific version of the build instructions that is responsible for signing.
     */
    BuildSignerDigest?: string;
    /**
     * Specifies whether the build took place in platform-hosted cloud infrastructure or customer/self-hosted infrastructure.
     */
    RunnerEnvironment?: string;
    /**
     * Source repository URL that the build was based on.
     */
    SourceRepositoryURI?: string;
    /**
     * Immutable reference to a specific version of the source code that the build was based upon.
     */
    SourceRepositoryDigest?: string;
    /**
     * Source Repository Ref that the build run was based upon.
     */
    SourceRepositoryRef?: string;
    /**
     * Immutable identifier for the source repository the workflow was based upon.
     */
    SourceRepositoryIdentifier?: string;
    /**
     * Source repository owner URL of the owner of the source repository that the build was based on.
     */
    SourceRepositoryOwnerURI?: string;
    /**
     * Immutable identifier for the owner of the source repository that the workflow was based upon.
     */
    SourceRepositoryOwnerIdentifier?: string;
    /**
     * Build Config URL to the top-level/initiating build instructions.
     */
    BuildConfigURI?: string;
    /**
     * Immutable reference to the specific version of the top-level/initiating build instructions.
     */
    BuildConfigDigest?: string;
    /**
     * Event or action that initiated the build.
     */
    BuildTrigger?: string;
    /**
     * Run Invocation URL to uniquely identify the build execution.
     */
    RunInvocationURI?: string;
    /**
     * Source repository visibility at the time of signing the certificate.
     */
    SourceRepositoryVisibilityAtSigning?: string;
};

