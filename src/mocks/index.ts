// We don't need to even call this to break the server in turbopack just need to import this module
export const initMocking = async () => {
    if (typeof window === 'undefined') {
        const { server } = await import('@/mocks/server');

        server.listen();
    } else {
        const { worker } = await import('@/mocks/browser');

        await worker.start();
    }
};
