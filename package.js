Package.describe( {
    name: 'parhelium:ui-input-selectize',
    version: '0.0.5',
    summary: 'Integration of Selectize with Meteor.',
    git: 'https://github.com/parhelium/meteor-ui-input-selectize',
    documentation: 'README.md'
} );

client = ['client'];
server = ['server'];
both = ['client', 'server'];

Package.onUse( function ( api ) {
    api.versionsFrom( '1.0.3.1' );

    api.use( [
        'templating',
        'jeremy:selectize@0.12.1',
        'reactive-var',
    ], client );

    api.addFiles( [
        'lib/selectize.html',
        'lib/selectize.js'
    ], client );
} );
