/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Information for connecting to the containerd instance that is used by the daemon.
 * This is included for debugging purposes only.
 *
 */
export type ContainerdInfo = {
    /**
     * The address of the containerd socket.
     */
    Address?: string;
    /**
     * The namespaces that the daemon uses for running containers and
     * plugins in containerd. These namespaces can be configured in the
     * daemon configuration, and are considered to be used exclusively
     * by the daemon, Tampering with the containerd instance may cause
     * unexpected behavior.
     *
     * As these namespaces are considered to be exclusively accessed
     * by the daemon, it is not recommended to change these values,
     * or to change them to a value that is used by other systems,
     * such as cri-containerd.
     *
     */
    Namespaces?: {
        /**
         * The default containerd namespace used for containers managed
         * by the daemon.
         *
         * The default namespace for containers is "moby", but will be
         * suffixed with the `<uid>.<gid>` of the remapped `root` if
         * user-namespaces are enabled and the containerd image-store
         * is used.
         *
         */
        Containers?: string;
        /**
         * The default containerd namespace used for plugins managed by
         * the daemon.
         *
         * The default namespace for plugins is "plugins.moby", but will be
         * suffixed with the `<uid>.<gid>` of the remapped `root` if
         * user-namespaces are enabled and the containerd image-store
         * is used.
         *
         */
        Plugins?: string;
    };
};

