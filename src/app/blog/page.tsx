import { CompletePage } from "@/app/page"

import * as Blogs from "@/components/blog/main"

const SITE_SECTIONS = [
    {
      type: "blog",
      title: "Blog",
      components: {
        "infinite-scroll": { name: "Blog Infinite Scroll", component: Blogs.BlogVariant1 },
        "infinite-scroll2": { name: "Blog Infinite Scroll", component: Blogs.BlogVariant2 },
        "infinite-scroll3": { name: "Blog Infinite Scroll", component: Blogs.BlogVariant3 },
        
      },
      defaultActive: "infinite-scroll3"
    },
  ];

const Page = () => <CompletePage site_sections={SITE_SECTIONS} />
export default Page