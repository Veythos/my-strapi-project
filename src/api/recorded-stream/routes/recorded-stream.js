'use strict';

/**
 * recorded-stream router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::recorded-stream.recorded-stream');
