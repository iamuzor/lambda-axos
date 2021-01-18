## TODOS

- **A LAMBDA INSTANCE SHOULD BE PASSED IN BY CONSUMERS!!** This way there's no need for requiring their AWS credentials,
  no need for the package to itself install aws-sdk, and it also ensures the library is as light as air. UPDATE CODE
  NOW, before going further!!
- Figure out how to return responses - when status code is success, and when an error is returned.
- Add unit tests.
- Install this as an NPM package and confirm it works.