/*
 * require model of core
 */
var createModel = require('../../core/model');
var schema;

/*
 * Objct config schema
 */
schema = {
    title:          { type: "String", default: ""},
    description:    { type: "String", default: ""},
    type:           { type: "String", default: ""},
    latitude:       { type: "String", default: ""},
    longitude:      { type: "String", default: ""},
    create_at:      { type: "Timestamp", default: ""},
    update_at:      { type: "Timestamp", default: ""}

};

/*
 * Exports new model
 */
module.exports = createModel('Event', schema);