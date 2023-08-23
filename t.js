import Github from 'github-api';

const gh = new Github();

let repo = gh.getRepo('Halldor-Hrafn', 'netlify-astronaut');

let commits = await repo.listCommits().then((commits) => {
  console.log(commits.data.length);
});

console.log(commits)
