Package.describe({
  name: 'parhelium:ui-input-selectize',
  version: '0.0.2',
  summary: '',
  git: '',
  documentation: 'README.md'
});

client = ['client'];
server = ['server'];
both   = ['client', 'server'];

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');

  api.use([
      'templating',
      'jeremy:selectize',
      'parhelium:logger',
      'reactive-var',
  ], client);

  api.addFiles( [
      'lib/selectize.html',
      'lib/selectize.js'
  ], client);
});
