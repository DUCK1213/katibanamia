'use strict';

const { categories, authors, articles, global, about } = require('../data/data.json');

async function seedData({ strapi }) {
  const shouldImportSeedData = await isFirstRun(strapi);

  if (shouldImportSeedData) {
    try {
      console.log('Setting up the template...');
      await importSeedData(strapi);
      console.log('Ready to go');
    } catch (error) {
      console.log('Could not import seed data');
      console.error(error);
    }
  } else {
    console.log('Seed data has already been imported.');
  }
}

async function isFirstRun(strapi) {
  const pluginStore = strapi.store({
    environment: strapi.config.environment,
    type: 'type',
    name: 'setup',
  });
  const initHasRun = await pluginStore.get({ key: 'initHasRun' });
  await pluginStore.set({ key: 'initHasRun', value: true });
  return !initHasRun;
}

async function setPublicPermissions(strapi, newPermissions) {
  const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
    where: { type: 'public' },
  });

  const allPermissionsToCreate = [];
  Object.keys(newPermissions).forEach((controller) => {
    const actions = newPermissions[controller];
    const permissionsToCreate = actions.map((action) => {
      return strapi.query('plugin::users-permissions.permission').create({
        data: {
          action: `api::${controller}.${controller}.${action}`,
          role: publicRole.id,
        },
      });
    });
    allPermissionsToCreate.push(...permissionsToCreate);
  });
  await Promise.all(allPermissionsToCreate);
}

async function importCategories(strapi) {
  for (const category of categories) {
    await strapi.entityService.create('api::category.category', {
      data: category,
    });
  }
}

async function importAuthors(strapi) {
  for (const author of authors) {
    await strapi.entityService.create('api::author.author', {
      data: {
        name: author.name,
        email: author.email,
      },
    });
  }
}

async function importArticles(strapi, categoriesData, authorsData) {
  for (const article of articles) {
    const category = categoriesData.find((cat) => cat.slug === article.category.slug);
    const author = authorsData.find((auth) => auth.email === article.author.email);

    await strapi.entityService.create('api::article.article', {
      data: {
        title: article.title,
        slug: article.slug,
        description: article.description,
        category: category.id,
        author: author.id,
        blocks: article.blocks,
      },
    });
  }
}

async function importGlobal(strapi) {
  await strapi.entityService.create('api::global.global', {
    data: {
      siteName: global.siteName,
      siteDescription: global.siteDescription,
      defaultSeo: global.defaultSeo,
    },
  });
}

async function importAbout(strapi) {
  await strapi.entityService.create('api::about.about', {
    data: {
      title: about.title,
      blocks: about.blocks,
    },
  });
}

async function importSeedData(strapi) {
  // Set public permissions for reading
  await setPublicPermissions(strapi, {
    article: ['find', 'findOne'],
    category: ['find', 'findOne'],
    author: ['find', 'findOne'],
    global: ['find', 'findOne'],
    about: ['find', 'findOne'],
  });

  // Create all entries
  await importCategories(strapi);
  const createdCategories = await strapi.entityService.findMany('api::category.category');
  
  await importAuthors(strapi);
  const createdAuthors = await strapi.entityService.findMany('api::author.author');
  
  await importArticles(strapi, createdCategories, createdAuthors);
  await importGlobal(strapi);
  await importAbout(strapi);
}

module.exports = seedData;
