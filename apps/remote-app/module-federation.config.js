module.exports = {
  name: 'remote-app',
  exposes: {
    './Module': 'apps/remote-app/src/app/remote-entry/entry.module.ts',
  },
};
