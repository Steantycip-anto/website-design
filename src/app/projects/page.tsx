import {CompletePage} from "@/app/page"

import * as Mains from "@/components/projects/main"

const SITE_SECTIONS = [
    {
      type: "main",
      title: "Main",
      components: {
        "main1": { name: "Main 1", component: Mains.ProjectsPageVariant1 },
        "main2": { name: "Main 2", component: Mains.ProjectsPageVariant2 },
        "main3": { name: "Main 3", component: Mains.ProjectsPageVariant3 },
      },
      defaultActive: "main3"
    },
  ];

const Page = () => <CompletePage site_sections={SITE_SECTIONS} />
export default Page