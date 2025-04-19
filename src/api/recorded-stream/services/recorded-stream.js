'use strict';

/**
 * recorded-stream service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recorded-stream.recorded-stream');
