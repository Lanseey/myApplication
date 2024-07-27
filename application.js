module.exports.root = {
    name: 'John Smith',
    function(name) {
      var page =
        '<html><h1>Welcome to my Node.js Application</h1><body><p>Welcome John Smith. This is an activity about basics of Node.js.</p></body></html>';
      return page;
    },
  };
  
  module.exports.about = {
    function(name) {
      var page =
        '<html><h1>This is the About Page</h1><body><p>Hello John Smith. This activity will teach on how to deal with a simple server and local modules in Node.js.</p></body></html>';
      return page;
    },
  };
  
  module.exports.contact = {
    function(name) {
      var page =
        '<html><h1>This is the Contact Page</h1><body><p> John Smith, For more information, refer to the canvas materials about Node.js</p></body></html>';
      return page;
    },
  };
  
  module.exports.gallery = {
    function(name) {
      var page = '<html><h1>This is the Gallery Page</h1></html>';
      return page;
    },
  };
  
  module.exports.error = {
    function(name) {
      var page = '<html><p>Invalid Request</p></html>';
      return page;
    },
  };
  