import vercel from '@sveltejs/adapter-auto';
import node from '@sveltejs/adapter-node';

const dockerBuild = process.env.DOCKER_BUILD

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: dockerBuild ? node() : vercel(),
	}
};

export default config;
