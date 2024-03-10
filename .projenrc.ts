import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Kuu Miyazaki',
  authorAddress: 'miyazaqui@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'awscdk-construct-lambda-function-for-inserting-scte',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/kuu/awscdk-construct-lambda-function-for-inserting-scte.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();