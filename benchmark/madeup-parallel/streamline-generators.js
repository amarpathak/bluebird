/*** Generated by streamline 0.10.17 (generators) - DO NOT EDIT ***/var galaxy = require("streamline/lib/generators/runtime");(function(){})();(galaxy.unstar(function*(_) {var execWithin_ = galaxy.unstar(execWithin, 2); require('../lib/fakes');

// Futures work on streamlined function so we need to wrap execWithin
function* execWithin(query, tx, _) {
    return (yield galaxy.invoke(query, "execWithin", [tx, _], 1));
}

module.exports = galaxy.unstar(function* upload(stream, idOrPath, tag, _) {
    try {
        var queries = new Array(global.parallelQueries);
        var tx = db.begin();

        for (var i = 0, len = queries.length; i < len; ++i ) {
            queries[i] = execWithin_(FileVersion.insert({index: i}), tx, false);
        }

        for (var i = 0, len = queries.length; i < len; ++i ) {
            (yield galaxy.invoke(queries, i, [_], 0));
        }

        tx.commit();
    } catch (err) {
        tx.rollback();
        throw err;
    }
}, 3);

}, 0).call(this, function(err) {
  if (err) throw err;
}));