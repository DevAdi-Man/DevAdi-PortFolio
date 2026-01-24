import type { Repo } from "./types";

export const fetchPinnedRepos = async (): Promise<Repo[]> => {
  const query = `
  {
    user(login: "DevAdi-Man") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            url
            description
            stargazerCount
            forkCount
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  }`;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  let repos = data.data.user.pinnedItems.nodes;

  // ❌ Remove specific repos (example: exclude "old-repo", "test-project")
  repos = repos.filter((repo: { name: string; }) => !["old-repo", "test-project"].includes(repo.name));

  return repos;
};

export const fetchRepo = async (name: string): Promise<Repo | null> => {
	const query = `
		query($name: String!) {
			repository(owner: "DevAdi-Man", name: $name) {
				name
				url
				description
				stargazerCount
				forkCount
				primaryLanguage {
					name
					color
				}
			}
		}
	`;

	const response = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query,
			variables: { name }
		})
	});

	const data = await response.json();
	return data.data.repository;
};
