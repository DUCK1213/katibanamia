const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN || "";

interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<StrapiResponse<T>> {
  const defaultOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const response = await fetch(`${STRAPI_URL}/api${endpoint}`, mergedOptions);

  if (!response.ok) {
    console.error(`Strapi API error: ${response.status} ${response.statusText}`);
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

export function getStrapiMedia(url: string | null): string | null {
  if (!url) return null;
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

// Types for Strapi content
export interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    publishedAt: string;
    cover?: {
      data: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      };
    };
    author?: {
      data: {
        attributes: {
          name: string;
          avatar?: {
            data: {
              attributes: {
                url: string;
              };
            };
          };
        };
      };
    };
    category?: {
      data: {
        attributes: {
          name: string;
          slug: string;
        };
      };
    };
    blocks?: Array<{
      __component: string;
      body?: string;
      title?: string;
      files?: {
        data: Array<{
          attributes: {
            url: string;
          };
        }>;
      };
    }>;
  };
}

export interface Author {
  id: number;
  attributes: {
    name: string;
    email?: string;
    avatar?: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

export interface Category {
  id: number;
  attributes: {
    name: string;
    slug: string;
    description?: string;
  };
}

export interface Global {
  data: {
    attributes: {
      siteName: string;
      siteDescription: string;
      favicon?: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      defaultSeo?: {
        metaTitle: string;
        metaDescription: string;
        shareImage?: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      };
    };
  };
}

export interface About {
  data: {
    attributes: {
      title: string;
      blocks?: Array<{
        __component: string;
        body?: string;
        title?: string;
        file?: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      }>;
    };
  };
}

// API functions
export async function getArticles(
  params: string = ""
): Promise<StrapiResponse<Article[]>> {
  return fetchAPI(`/articles?populate=*${params}`);
}

export async function getCategories(): Promise<StrapiResponse<Category[]>> {
  return fetchAPI("/categories");
}

export async function getGlobal(): Promise<Global> {
  return fetchAPI("/global?populate=*");
}

export async function getAbout(): Promise<About> {
  return fetchAPI("/about?populate=*");
}
