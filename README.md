# `setup-tau-prolog`

This actions sets up a Tau Prolog environment for use in workflows.

![](https://github.com/logtalk-actions/setup-tau-prolog/workflows/Test/badge.svg)

## Usage

See [action.yml](action.yml) for the action metadata.

## Example

```yml
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Install Tau Prolog 
        uses: logtalk-actions/setup-tau-prolog@master
        with:
          tau-prolog-version: latest
      - name: Checkout application to be tested
        uses: actions/checkout@v1
```

## License

This project is released under the [Apache License 2.0](LICENSE).

## Current Status

This action is in active development. This action does not support Windows at this time.
