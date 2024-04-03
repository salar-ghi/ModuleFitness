/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = (await import("@ducanh2912/next-pwa")).default({
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    disable : false,
    workboxOptions: {
        disableDevLogs : true,
    }
});


const nextConfig = {
    reactStrictMode: true,
};

// export default nextConfig;
export default withPWA(nextConfig);
