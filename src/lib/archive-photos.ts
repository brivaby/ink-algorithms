type ArchiveAsset = { url: string };

const archiveAssets = import.meta.glob<ArchiveAsset>(
  "../assets/archive/*.asset.json",
  { eager: true, import: "default" },
);

type ArchivePhoto = {
  id: string;
  type: "photo";
  category: string;
  version: "V1" | "V2";
  image: string;
  kicker: string;
  title: string;
  description: string;
  meta: string;
  metric: string;
};

function details(number: number) {
  // Version 1 is the wooden prototype; Version 2 is the rebuild with 3D-printed parts.
  const version = number <= 7077 ? ("V1" as const) : ("V2" as const);
  if (number <= 6866) return { version, category: "Workshop & Assembly", kicker: "Fabrication · CNC routing", title: "CNC Workshop and Router Setup", description: "Historical record of the team preparing the CNC router, controls and wooden stock used to fabricate the plotter chassis.", meta: "CNC Fabrication", metric: "Wooden Components" };
  if (number <= 6905) return { version, category: "Workshop & Assembly", kicker: "Fabrication · Parts finishing", title: "Cutting, Removing and Finishing Chassis Parts", description: "The team removes, inspects and hand-finishes routed wooden components before bringing them into the assembly workshop.", meta: "Parts Preparation", metric: "Historical Build" };
  if (number <= 6929) return { version, category: "Workshop & Assembly", kicker: "Workshop · Chassis assembly", title: "Wooden Chassis Measuring and Assembly", description: "Progress photography of measuring, drilling and joining the wooden base and frame components for the first plotter build.", meta: "Frame Assembly", metric: "Hand Tools" };
  if (number <= 6962) return { version, category: "Electronic Benchwork", kicker: "Prototype · Mechanical integration", title: "Rails, Motors and Carriage Integration", description: "The early mechanical prototype takes shape as guide rods, motor mounts, belts and carriage hardware are fitted to the wooden base.", meta: "Prototype Assembly", metric: "Two-Axis Rig" };
  if (number <= 6991) return { version, category: "Electronic Benchwork", kicker: "Prototype · Wiring and motion", title: "Control Wiring and Motion-System Testing", description: "Detailed build record of wiring, electronics installation and hands-on checks of the assembled two-axis motion system.", meta: "System Integration", metric: "Bench Testing" };
  if (number <= 7038) return { version, category: "Electronic Benchwork", kicker: "Controls · Breadboard prototype", title: "Breadboard Control Circuit Development", description: "The control circuit is assembled and tested on a breadboard alongside the motors, drivers and computer interface.", meta: "Control Electronics", metric: "Breadboard Stage" };
  return { version, category: "Live Plotting Videos", kicker: "V1 prototype · Drawing test", title: "Early Plotting and Pen-Carriage Tests", description: "Historical testing of the assembled prototype, from computer setup and carriage alignment to the first pen movements over paper.", meta: "Prototype Test", metric: "Pen on Paper" };
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

const extraAssets = import.meta.glob<ArchiveAsset>(
  "../assets/archive-extra/*.asset.json",
  { eager: true, import: "default" },
);

const extraInfo: Record<string, Omit<ArchivePhoto, "id" | "type" | "image">> = {
  "design-01-block-diagram": { version: "V1" as const, category: "Design & Sourcing", kicker: "Design · System architecture", title: "2D CNC System Block Diagram", description: "Block diagram of the Arduino Uno and CNC Shield V3 control hub with the 12 V supply, A4988 drivers, NEMA 17 motors, pen-lift servo, 16×2 I2C LCD, microSD module and push buttons.", meta: "System Design", metric: "Block Diagram" },
  "design-02-circuit-diagram": { version: "V1" as const, category: "Design & Sourcing", kicker: "Design · Wiring schematic", title: "2D CNC Circuit Diagram", description: "Wiring schematic showing the CNC Shield V3 connections to the A4988 drivers, X/Y stepper motors, pen-lift servo, I2C LCD, microSD breakout and UI buttons.", meta: "Circuit Design", metric: "CNC Shield V3" },
  "design-03-flowchart": { version: "V1" as const, category: "Design & Sourcing", kicker: "Design · Program logic", title: "Control Software Flowchart", description: "Flowchart of the plotter's control program, mapping menu selection, file reading and plotting decisions.", meta: "Software Design", metric: "Flowchart" },
};
const cadTitles: Record<string, string> = {
  "cad-01-assembly": "Full Plotter Assembly Model", "cad-02-base": "Wooden Base Plate Model", "cad-03-bracket": "Rail End Bracket Model",
  "cad-04-carriage": "Pen Carriage Model", "cad-05-top": "Assembly Top View", "cad-06-side": "Assembly Side Elevation",
  "cad-07-end": "Assembly End Elevation", "cad-08-carriage-detail": "Carriage and Rod Detail", "cad-09-mount": "Motor Mount Model",
};
for (const [k, t] of Object.entries(cadTitles)) extraInfo[k] = { version: "V1" as const, category: "Design & Sourcing", kicker: "Design · 3D CAD model", title: t, description: "3D CAD model of the plotter's wooden base, guide rods, printed brackets and control-panel housing, created while planning the build.", meta: "CAD Modelling", metric: "3D Model" };
const sourceTitles: Record<string, string> = {
  "source-01-nema17": "NEMA 17 Stepper Motor", "source-02-gt2-pulley": "GT2 16-Tooth Pulley", "source-03-gt2-belt": "GT2 Timing Belt",
  "source-04-cnc-shield": "CNC Shield V3", "source-05-a4988": "A4988 Stepper Driver", "source-06-jumpers": "2.54 mm Shunt Jumpers",
  "source-07-psu": "12 V Power Supply Adapter", "source-08-breadboard": "400-Point Mini Breadboard", "source-09-ff-wires": "Female-to-Female Jumper Wires",
  "source-10-mf-wires": "Male-to-Female Jumper Wires", "source-11-lcd": "16×2 LCD with I2C Module", "source-12-cart": "LCD, Buttons and microSD Order",
  "source-13-adapter": "12 V 3 A DC Adapter", "source-14-receipt": "Component Purchase Receipt", "source-15-receipt": "Electronics Shop Receipt",
};
for (const [k, t] of Object.entries(sourceTitles)) extraInfo[k] = { version: "V1" as const, category: "Design & Sourcing", kicker: k.includes("receipt") ? "Sourcing · Purchase record" : "Sourcing · Component listing", title: t, description: k.includes("receipt") ? "Purchase record kept while buying components for the plotter from local electronics suppliers." : "Component sourced from local Ugandan electronics suppliers while assembling the plotter's bill of materials.", meta: "Component Sourcing", metric: "Local Supplier" };
extraInfo["plot-01-lettering"] = { version: "V2" as const, category: "Sample Plot Outputs", kicker: "V2 testing · Lettering", title: "Overhead View of a Lettering Plot", description: "Overhead view of the plotter drawing outlined letters with the servo pen holder over paper on the wooden base.", meta: "Plot Output", metric: "Pen on Paper" };
extraInfo["plot-02-lettering"] = { ...extraInfo["plot-01-lettering"], title: "Pen Carriage Mid-Plot Over Lettering" };

export const extraArchivePhotos: ArchivePhoto[] = Object.entries(extraAssets)
  .flatMap(([path, asset]): ArchivePhoto[] => {
    const key = path.split("/").pop()!.replace(".jpg.asset.json", "");
    const info = extraInfo[key];
    return info ? [{ id: `EXTRA-${key}`, type: "photo", image: asset.url, ...info }] : [];
  })
  .sort((a, b) => a.id.localeCompare(b.id));
