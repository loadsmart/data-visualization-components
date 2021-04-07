# Contributing

Thank you for your interest in contributing to this project. Here is a quick guide:

- Add tests to your features.
- Add stories for new components under `/example`
- Commit with commitizen (you can just `yarn commit` for that)
- Make sure all linters and tests pass
- Squash your commits
  - you can do that from the PR merge button as well, but here you have more control over it.

Publishing a new version to NPM currently is done manually, if you have permission to do that:

- Update your local `main` branch and run `yarn publish` and follow the prompts
  - This project is versioned with CalVer, so the version will be in the format `yyyy.mm.dd`
- After it is published to NPM, Create a PR titled `[Release] <version number>`
- This PR should be merged automatically, if not, proceed as normally to merge it.
- Create a new Github Release
