/** @type {import('next').NextConfig} */
const nextConfig = {
    // distDir: "build", //this line will tell the build to create a file with this nam
    images:{
        domains: ['flowbite.s3.amazonaws.com', 'images.unsplash.com'],
    },
};

export default nextConfig;
