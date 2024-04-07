/** @type {import('next').NextConfig} */
module.exports = {
    transpilePackages: ["@repo/ui"],
    async redirects() {
        return [
            {
                source: '/',
                destination: '/dashboard',
                permanent: true
            }
        ]
    }
}