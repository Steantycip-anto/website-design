import {CompletePage} from "@/app/page"

import * as ModelDetails from "@/components/model-details/main"

const SITE_SECTIONS = [
    {
      type: "model-details",
      title: "Model Details",
      components: {
        "model-detail": { name: "Model Detail", component: ModelDetails.ModelDetail },
        "model-detail-card": { name: "Model Detail Card", component: ModelDetails.ModelDetailCard },
        "model-detail-dashboard-detail-card": { name: "Model Detail Dashboard", component: ModelDetails.ModelDetailDashboard },
      },
      defaultActive: "model-detail-card"
    },
  ];

const Page = () => <CompletePage site_sections={SITE_SECTIONS} />
export default Page