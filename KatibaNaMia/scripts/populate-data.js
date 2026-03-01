const axios = require('axios');

const STRAPI_URL = 'http://localhost:1337';

async function populate() {
  try {
    // Create authors
    console.log('Creating authors...');
    await axios.post(`${STRAPI_URL}/api/authors`, {
      data: {
        name: "Ng'ang'a Muigai",
        email: "katibangangamuigai@gmail.com"
      }
    });
    console.log('Created author: Ng\'ang\'a Muigai');
    
    await axios.post(`${STRAPI_URL}/api/authors`, {
      data: {
        name: "Katiba Na Mia Team",
        email: "katibanamia@gmail.com"
      }
    });
    console.log('Created author: Katiba Na Mia Team');

    // Get authors to use their IDs
    const authorsRes = await axios.get(`${STRAPI_URL}/api/authors`);
    const authors = authorsRes.data.data;
    
    // Get categories
    const categoriesRes = await axios.get(`${STRAPI_URL}/api/categories`);
    const categories = categoriesRes.data.data;
    
    const kamauAgenda = categories.find(c => c.slug === 'kamau-agenda');
    const countyTours = categories.find(c => c.slug === 'county-tours');
    const ngangaMuigai = authors.find(a => a.email === 'katibangangamuigai@gmail.com');
    const team = authors.find(a => a.email === 'katibanamia@gmail.com');

    // Create articles
    console.log('Creating articles...');
    
    await axios.post(`${STRAPI_URL}/api/articles`, {
      data: {
        title: "Launch of Katiba Shuleni 2026 Petition",
        slug: "katiba-shuleni-2026-petition",
        description: "We are pushing for the Constitution of Kenya to be established as a full mandatory and examinable subject in the basic education curriculum.",
        category: kamauAgenda.id,
        author: ngangaMuigai.id,
        blocks: [
          {
            __component: "shared.rich-text",
            body: "## Katiba Shuleni 2026\n\nWe are excited to announce the launch of our parliamentary petition to make the Constitution of Kenya a mandatory, examinable subject in schools from primary through tertiary education.\n\n### Why This Matters\n\nConstitutional literacy is the foundation of democratic participation. When citizens understand their rights and responsibilities, they can actively engage in governance and hold leaders accountable.\n\n### How You Can Help\n\n1. Sign the petition on Change.org\n2. Share with your network\n3. Join our county tours\n4. Support the movement"
          },
          {
            __component: "shared.quote",
            title: "Ng'ang'a Muigai",
            body: "An informed citizenry is the backbone of any thriving democracy."
          }
        ]
      }
    });
    console.log('Created article: Katiba Shuleni 2026 Petition');
    
    await axios.post(`${STRAPI_URL}/api/articles`, {
      data: {
        title: "47 Counties Tour: Week 1 in Mombasa",
        slug: "47-counties-tour-mombasa",
        description: "Our first week of the 47-week constitutional education tour kicks off in Mombasa County.",
        category: countyTours.id,
        author: team.id,
        blocks: [
          {
            __component: "shared.rich-text",
            body: "## Mombasa County Tour\n\nWe are thrilled to begin our 47-week journey across all counties in Kenya. Week 1 takes us to Mombasa County, where we will engage with citizens at various action areas.\n\n### Schedule\n\n- Wednesday: Bunge la Mwananchi at Treasury Square\n- Thursday: Bodaboda stages and Jua Kali sectors\n- Friday: Higher learning institutions\n\n### Activities\n\n- Constitutional debates\n- Katiba literacy tests\n- Distribution of Katiba Made Familiar books\n- Music performances"
          }
        ]
      }
    });
    console.log('Created article: 47 Counties Tour');
    
    await axios.post(`${STRAPI_URL}/api/articles`, {
      data: {
        title: "Understanding the KAMAU Agenda",
        slug: "understanding-kamau-agenda",
        description: "A deep dive into the five pillars of the KAMAU Agenda and how they will transform Kenya.",
        category: kamauAgenda.id,
        author: ngangaMuigai.id,
        blocks: [
          {
            __component: "shared.rich-text",
            body: "## The KAMAU Agenda\n\nThe KAMAU Agenda represents our commitment to systemic reform across five critical areas:\n\n### K - Katiba (Constitution)\nMaking the Constitution a mandatory subject in schools.\n\n### A - Masomo (Education)\nEstablishing infrastructure standards for all public schools.\n\n### M - Afya (Health)\nCreating a chronic diseases fund separate from the health budget.\n\n### A - Uchaguzi (Elections)\nReforming the recall process for MPs.\n\n### U - Ugatuzi (Devolution)\nEstablishing a devolution prototype for all counties."
          }
        ]
      }
    });
    console.log('Created article: Understanding the KAMAU Agenda');

    // Create global
    console.log('Creating global...');
    await axios.post(`${STRAPI_URL}/api/global`, {
      data: {
        siteName: "Katiba Na Mia",
        siteDescription: "Constitutional Education Movement led by Ng'ang'a Muigai",
        defaultSeo: {
          metaTitle: "Katiba Na Mia - Constitutional Education for All Kenyans",
          metaDescription: "Empowering every Kenyan with constitutional knowledge through debates, literacy tests, and music. A 47-week journey across all counties."
        }
      }
    });
    console.log('Created global settings');

    // Create about
    console.log('Creating about...');
    await axios.post(`${STRAPI_URL}/api/about`, {
      data: {
        title: "About Katiba Na Mia",
        blocks: [
          {
            __component: "shared.quote",
            title: "Ng'ang'a Muigai",
            body: "Knowledge is power. Let's liberate our future generations from the shackles of ignorance."
          },
          {
            __component: "shared.rich-text",
            body: "## Constitutional Education at the Grassroots\n\nKatiba Na Mia is a civic education movement led by Ng'ang'a Muigai. We simplify Kenya's Constitution for citizens in both Kiswahili and English, committed to taking constitutional knowledge directly to the people at the grassroots level.\n\n### Our Mission\n\nWe conduct civic education and public engagement on constitutional matters across Kenya. Our mission is to make the Constitution accessible and empower citizens with knowledge of their rights and responsibilities through community engagement.\n\n### Our Approach\n\n- Interactive debates on constitutional matters\n- Katiba literacy tests\n- Music performances for mobilization\n- Community engagement at grassroots level"
          }
        ]
      }
    });
    console.log('Created about page');

    console.log('\n✅ All data populated successfully!');
  } catch (error) {
    console.error('Error:', error.response?.data?.error || error.message);
  }
}

populate();
