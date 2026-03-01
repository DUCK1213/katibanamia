const data = require('../data/data.json');

async function populate() {
  try {
    // Update Global settings
    console.log('Updating Global settings...');
    await strapi.entityService.update('api::global.global', 1, {
      data: {
        siteName: data.global.siteName,
        siteDescription: data.global.siteDescription,
      },
    });
    console.log('Global settings updated');

    // Update About page
    console.log('Updating About page...');
    await strapi.entityService.update('api::about.about', 1, {
      data: {
        title: data.about.title,
        blocks: data.about.blocks,
      },
    });
    console.log('About page updated');

    // Create Categories
    console.log('Creating Categories...');
    for (const category of data.categories) {
      const existing = await strapi.entityService.findMany('api::category.category', {
        filters: { slug: category.slug },
      });
      if (existing.length === 0) {
        await strapi.entityService.create('api::category.category', {
          data: category,
        });
        console.log(`Created category: ${category.name}`);
      } else {
        console.log(`Category already exists: ${category.name}`);
      }
    }

    // Create Authors
    console.log('Creating Authors...');
    for (const author of data.authors) {
      const existing = await strapi.entityService.findMany('api::author.author', {
        filters: { email: author.email },
      });
      if (existing.length === 0) {
        await strapi.entityService.create('api::author.author', {
          data: author,
        });
        console.log(`Created author: ${author.name}`);
      } else {
        await strapi.entityService.update('api::author.author', existing[0].id, {
          data: author,
        });
        console.log(`Updated author: ${author.name}`);
      }
    }

    console.log('Population complete!');
  } catch (error) {
    console.error('Error during population:', error);
  }
}

populate();
