'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  //To customize API's output
  async find(ctx){

    console.log(ctx.response)
    const products = await strapi.services.product.find(ctx.query)

    return products.map((product) =>
      [
        product.title,
        product.description
      ]
    )

}
}
