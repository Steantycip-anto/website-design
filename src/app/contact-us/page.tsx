import { CompletePage } from "@/app/page"

import * as Forms from "@/components/contact-us/forms"
import * as ModelSelections from "@/components/contact-us/model-selections"

const SITE_SECTIONS = [
    {
      type: "contact-us",
      title: "Contact Us",
      components: {
        "form-1": { name: "Form 1", component: Forms.ContactAsymmetric },
        "form-2": { name: "Form 2", component: Forms.ContactCircular },
        "form-3": { name: "Form 3", component: Forms.ContactDynamic },
      },
      defaultActive: "form-3"
    },
    {
      type: "model-selections",
      title: "Model Selections",
      components: {
        "model-selection-1": { name: "Model Selection 1", component: ModelSelections.AddModelsSection1 },
        "model-selection-2": { name: "Model Selection 2", component: ModelSelections.AddModelsSection2 },
        "model-selection-3": { name: "Model Selection 3", component: ModelSelections.AddModelsSection3 },
      },
      defaultActive: "model-selection-3"
    },
  ];

const Page = () => <CompletePage site_sections={SITE_SECTIONS} />
export default Page