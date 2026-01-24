import { fetchRepo } from '../../../util/github';
import { projectDetails } from '../../../util/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    const { slug } = params;
    const repo = await fetchRepo(slug);
    const details = projectDetails[slug];

    return {
        repo,
        details
    };
};
