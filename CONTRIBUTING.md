# Contributing

Thank you for your interest in contributing to this project. Here is a quick guide:

- Add tests to your features.
- Add stories for new components under `/example`
- Commit with commitizen (you can just `yarn commit` for that)
- Make sure all linters and tests pass
- Squash your commits
  - you can do that from the PR merge button as well, but here you have more control over it.

This project is setup with Yarn Workspaces. We currently have 2 workspaces:
- `/lib`, aka `@loadsmart/data-visualization`
  - this workspace contains all the library code
- `/example` aka `@loadsmart/data-visualization-example`
  - this workspace contains the storybook that gets published to Netlify
  - this workspace depends on `/lib` directly, importing from it locally, not through NPM

To get up and running a development environment you will need to do the following:

- `git clone` the project


- run `yarn` to set everything up
  - this project is using Yarn 2, but it will be activated locally automatically for you
  - this will also install the top level dependencies


- install all dependencies for each workspace with `yarn workspaces foreach install`
  - this will simply run the installation command for each workspace


- start the development env with `yarn start`. This script will do the following for you:
  - start the `lib` watch + build cycle
    - this will make microbundle start watching and compiling `lib/src` to `lib/dist`
    - changes made on `lib/src` will be reflected immediately.
  - start the `example` storybook server
    - this will run the usual storybook scripts and start the dev server
    - this workspace imports locally form the other (`lib`) workspace, so changes there will be reflected here.


Publishing a new version to NPM currently is done manually, if you have permission to do that:

- Update your local `main` branch, checkout a new `release` branch from it and run `yarn workspace @loadsmart/data-visualization run publish` and follow the prompts
  - This project is versioned with CalVer, so the version will be in the format `yyyy.mm.dd-micro` (micro is only needed when there are 2 or more releases in a single day, it can be omitted otherwise)
  - This will publish it to NPM
- After it is published to NPM, Create a PR titled `[Release] <version number>` from your `release` branch
- This PR should be merged/approved automatically, if not, proceed as normally to merge it.
- Create a new GitHub Release
