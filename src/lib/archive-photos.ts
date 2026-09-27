type ArchiveAsset = { url: string };

const archiveAssets = import.meta.glob<ArchiveAsset>(
  "../assets/archive/*.asset.json",
  { eager: true, import: "default" },
);

type ArchivePhoto = {
  id: string;
  type: "photo";
  category: string;
  image: string;
  kicker: string;
  title: string;
  description: string;
  meta: string;
  metric: string;
};

function details(number: number) {
  if (number <= 6866) return { category: "Workshop & Assembly", kicker: "Fabrication · CNC routing", title: "CNC Workshop and Router Setup", description: "Historical record of the team preparing the CNC router, controls and wooden stock used to fabricate the plotter chassis.", meta: "CNC Fabrication", metric: "Wooden Components" };
  if (number <= 6905) return { category: "Workshop & Assembly", kicker: "Fabrication · Parts finishing", title: "Cutting, Removing and Finishing Chassis Parts", description: "The team removes, inspects and hand-finishes routed wooden components before bringing them into the assembly workshop.", meta: "Parts Preparation", metric: "Historical Build" };
  if (number <= 6929) return { category: "Workshop & Assembly", kicker: "Workshop · Chassis assembly", title: "Wooden Chassis Measuring and Assembly", description: "Progress photography of measuring, drilling and joining the wooden base and frame components for the first plotter build.", meta: "Frame Assembly", metric: "Hand Tools" };
  if (number <= 6962) return { category: "Electronic Benchwork", kicker: "Prototype · Mechanical integration", title: "Rails, Motors and Carriage Integration", description: "The early mechanical prototype takes shape as guide rods, motor mounts, belts and carriage hardware are fitted to the wooden base.", meta: "Prototype Assembly", metric: "Two-Axis Rig" };
  if (number <= 6991) return { category: "Electronic Benchwork", kicker: "Prototype · Wiring and motion", title: "Control Wiring and Motion-System Testing", description: "Detailed build record of wiring, electronics installation and hands-on checks of the assembled two-axis motion system.", meta: "System Integration", metric: "Bench Testing" };
  if (number <= 7038) return { category: "Electronic Benchwork", kicker: "Controls · Breadboard prototype", title: "Breadboard Control Circuit Development", description: "The control circuit is assembled and tested on a breadboard alongside the motors, drivers and computer interface.", meta: "Control Electronics", metric: "Breadboard Stage" };
  return { category: "Live Plotting Videos", kicker: "V1 prototype · Drawing test", title: "Early Plotting and Pen-Carriage Tests", description: "Historical testing of the assembled prototype, from computer setup and carriage alignment to the first pen movements over paper.", meta: "Prototype Test", metric: "Pen on Paper" };
}

export const archivePhotos: ArchivePhoto[] = Object.entries(archiveAssets)
  .map(([path, asset]) => {
    const match = path.match(/IMG_(\d+)\.JPG/);
    const number = match ? Number(match[1]) : 0;
    const info = details(number);
    return {
      id: `ARCHIVE-${number}`,
      type: "photo" as const,
      image: asset.url,
      ...info,
      title: `${info.title} — IMG_${number}`,
    };
  })
  .sort((a, b) => Number(a.id.split("-")[1]) - Number(b.id.split("-")[1]));
