exports.config = {
    bundles: [ 
      { components: ['my-component'] },
      { components: ['my-list'] },
      { components: ['my-list-details'] }
],
      	

    collections:[
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
