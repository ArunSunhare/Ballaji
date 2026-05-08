This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


############################################################
What is Sitemap.xml?

A sitemap is a file that tells Google:

“These are all the pages on my website. Please crawl and index them.”

Without sitemap:

Google discovers pages slowly

With sitemap:

Faster indexing
Better SEO crawling
Easier discovery of new pages
Example Sitemap
<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>
      https://www.balajihospital.com/
    </loc>
  </url>

  <url>
    <loc>
      https://www.balajihospital.com/conditions/diabetes-treatment-delhi
    </loc>
  </url>

  <url>
    <loc>
      https://www.balajihospital.com/conditions/thyroid-treatment-delhi
    </loc>
  </url>

</urlset>

Google reads this automatically.

Best Part in Next.js App Router

Next.js already provides built-in sitemap support.

SUPER EASY.

STEP-BY-STEP IMPLEMENTATION
Step 1 — Create sitemap.ts

Inside:

app/sitemap.ts
Step 2 — Add This Code
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.balajihospital.com";

  const conditionPages = [
    "diabetes-treatment-delhi",
    "thyroid-treatment-delhi",
    "hypertension-treatment-delhi",
    "migraine-treatment-delhi",
  ];

  const conditionUrls = conditionPages.map((slug) => ({
    url: `${baseUrl}/conditions/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    ...conditionUrls,
  ];
}

DONE.

Step 3 — Run Project

Now visit:

https://yourdomain.com/sitemap.xml

Automatically generated.

Magic of Next.js.

Output Will Look Like
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

<url>
<loc>https://www.balajihospital.com</loc>
</url>

<url>
<loc>
https://www.balajihospital.com/conditions/diabetes-treatment-delhi
</loc>
</url>

</urlset>
IMPORTANT CONCEPTS
1. priority
priority: 1

Higher = more important page.

Examples:

Page	Priority
Homepage	1
Condition Pages	0.9
Blogs	0.7
2. changeFrequency

Tells Google how often page updates.

Examples:

daily
weekly
monthly
3. lastModified

Helps Google know fresh content exists.

lastModified: new Date()
Dynamic Sitemap (BEST FOR YOU)

Since you’ll have MANY condition pages.

Instead of hardcoding.

Create data file:

data/conditions.ts
export const conditions = [
  {
    slug: "diabetes-treatment-delhi",
  },
  {
    slug: "thyroid-treatment-delhi",
  },
  {
    slug: "hypertension-treatment-delhi",
  },
];
Then sitemap.ts
import { MetadataRoute } from "next";
import { conditions } from "@/data/conditions";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.balajihospital.com";

  const conditionUrls = conditions.map((condition) => ({
    url: `${baseUrl}/conditions/${condition.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },

    ...conditionUrls,
  ];
}

NOW:
Whenever you add condition data → sitemap auto updates.

Very scalable.

Recommended Folder Structure
app/
 ├── sitemap.ts
 ├── robots.ts
 ├── conditions/
 │    └── [slug]/
 │         └── page.tsx
 │
data/
 └── conditions.ts
Add robots.txt (VERY IMPORTANT)

Create:

app/robots.ts

Code:

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://www.balajihospital.com/sitemap.xml",
  };
}
Why robots.txt Important?

It tells Google:

You can crawl my site.
Here is my sitemap.
Final URLs You’ll Have
/sitemap.xml
/robots.txt

Google automatically checks these.

MOST IMPORTANT STEP
Submit Sitemap to Google Search Console
Step 1

Go:

https://search.google.com/search-console
Step 2

Add your domain.

Example:

balajihospital.com
Step 3

Go to:

Indexing → Sitemaps
Step 4

Submit:

https://www.balajihospital.com/sitemap.xml

DONE.

What Happens After This?

Google will:

Crawl all pages
Discover new condition pages
Index faster
Improve SEO visibility
BEST SEO FLOW FOR YOU
conditions.ts
      ↓
Dynamic pages
      ↓
sitemap.xml
      ↓
Google Search Console
      ↓
Google indexing
      ↓
SEO traffic
Advanced Scalable Setup (Future)

Later you can generate:

doctor sitemap
blog sitemap
services sitemap

Example:

/sitemap.xml
/blog-sitemap.xml
/doctors-sitemap.xml

Large healthcare sites do this.

Final Recommendation

Start with:

Minimum Setup

✅ app/sitemap.ts
✅ app/robots.ts
✅ dynamic condition pages
✅ Google Search Console submission

This alone gives a huge SEO foundation for your hospital website.

1. Create data with slugs
        ↓
2. Generate dynamic pages using [slug]
        ↓
3. Generate sitemap automatically from same data
        ↓
4. Submit sitemap to Google
        ↓
5. Google indexes all pages