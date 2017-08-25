var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var archiveHelpers = require('../helpers/archive-helpers.js');

// archiveHelpers.readListOfUrlsAsync().then(function(urls){
//   archive.downloadUrlsAsync(urls);
// });

archive.readListOfUrls(archive.downloadUrls);
