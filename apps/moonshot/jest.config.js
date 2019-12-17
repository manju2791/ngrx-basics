module.exports = {
  name: 'moonshot',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/moonshot',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
