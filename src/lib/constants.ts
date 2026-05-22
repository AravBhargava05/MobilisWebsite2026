export const PRESS_LINKS = [
  {
    label: "ABC NEWS",
    href: "https://wjla.com/news/offbeat/virginia-high-school-students-compete-in-national-science-math-competition-2024-regeneron-science-talent-search-stem-education-finalists-awards",
    preview: "/images/press/abc-news.png",
    previewAlt:
      "Arav Bhargava presenting the Mobilis universal-fit prosthetic socket research poster at the Regeneron Science Talent Search",
  },
  {
    label: "SCRIPPS NEWS",
    href: "https://www.scrippsnews.com/us-news/students-invent-3d-printed-prosthetic-arms-and-explore-bee-pollination-at-national-stem-competition",
    preview: "/images/press/scripps-news.png",
    previewAlt:
      "Close-up of the Mobilis prosthetic socket held at the Regeneron Science Talent Search, as covered by Scripps News",
  },
  {
    label: "3DPRINT.COM",
    href: "https://3dprint.com/307701/tinkering-for-change-12th-graders-universal-fit-3d-printed-prosthetic-at-2024-regeneron-competition/",
    preview: "/images/press/3dprint.png",
    previewAlt:
      "Arav Bhargava demonstrating the Mobilis 3D-printed prosthetic socket in an interview with 3DPrint.com",
  },
  {
    label: "REGENERON STS",
    href: "https://www.societyforscience.org/regeneron-sts/2024-student-finalists/arav-bhargava/",
    preview: "/images/press/regeneron-sts.png",
    previewAlt:
      "Watercolor illustration of Arav Bhargava for the Regeneron Science Talent Search 2024 finalist profile",
    previewAspect: "654 / 750",
    previewFit: "contain" as const,
    previewBg: "bg-white",
  },
] as const;

export const SPEC_ROWS = [
  { label: "MATERIAL COST", value: "~$40 USD" },
  { label: "TRADITIONAL COST", value: "$10,000+" },
  { label: "FITTING TIME", value: "<5 MINUTES" },
  { label: "PATENT", value: "US 12,245,957", href: "/mobilis-patent.pdf" },
] as const;

export const MARQUEE_ITEMS = [
  "MCOP",
  "GEORGE MASON",
  "WALTER REED",
  "MORPH LABS",
  "HARVARD",
  "MIT",
] as const;
