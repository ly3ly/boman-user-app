export default async function mockRequest() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Timeout completed');
        }, 1000);
    })
}