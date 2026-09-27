import { createFileRoute } from "@tanstack/react-router";
import {
  Activity, Archive, BatteryCharging, Camera, ChevronRight, Download,
  Gauge, Grid3X3, Image as ImageIcon, Play, Ruler,
  SlidersHorizontal, X, ZoomIn,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "../components/ui/button";
import { archivePhotos, extraArchivePhotos } from "../lib/archive-photos";

import img7073 from "../assets/IMG_7073.JPG.asset.json";
import img7074 from "../assets/IMG_7074.JPG.asset.json";
import img7075 from "../assets/IMG_7075.JPG.asset.json";
import img7076 from "../assets/IMG_7076.JPG.asset.json";
import img7077 from "../assets/IMG_7077.JPG.asset.json";
import img7092 from "../assets/IMG_7092.JPG.asset.json";
import img7093 from "../assets/IMG_7093.JPG.asset.json";
import img7094 from "../assets/IMG_7094.JPG.asset.json";
import img7095 from "../assets/IMG_7095.JPG.asset.json";
import img7096 from "../assets/IMG_7096.JPG.asset.json";
import img7097 from "../assets/IMG_7097.JPG.asset.json";
import img7098 from "../assets/IMG_7098.JPG.asset.json";
import lettering from "../assets/media_lettering.jpg.asset.json";
import rigMidplot from "../assets/media_rig_midplot.jpg.asset.json";
import workshop from "../assets/media_workshop.jpg.asset.json";
import v6339 from "../assets/IMG_6339.mp4.asset.json";
import v6339Poster from "../assets/IMG_6339-poster.jpg.asset.json";
import v6341 from "../assets/IMG_6341.mp4.asset.json";
import v6341Poster from "../assets/IMG_6341-poster.jpg.asset.json";
import v6342 from "../assets/IMG_6342.mp4.asset.json";
import v6342Poster from "../assets/IMG_6342-poster.jpg.asset.json";
import v6552 from "../assets/IMG_6552.mp4.asset.json";
import v6552Poster from "../assets/IMG_6552-poster.jpg.asset.json";
import v6553 from "../assets/IMG_6553_3.mp4.asset.json";
import v6553Poster from "../assets/IMG_6553_3-poster.jpg.asset.json";
import vConv from "../assets/Convention_Presentation.mp4.asset.json";
import vConvPoster from "../assets/Convention_Presentation-poster.jpg.asset.json";
import v6846 from "../assets/IMG_6846.mp4.asset.json";
import v6846Poster from "../assets/IMG_6846-poster.jpg.asset.json";
import v6852 from "../assets/IMG_6852.mp4.asset.json";
import v6852Poster from "../assets/IMG_6852-poster.jpg.asset.json";
import v6853 from "../assets/IMG_6853.mp4.asset.json";
import v6853Poster from "../assets/IMG_6853-poster.jpg.asset.json";
import v6854 from "../assets/IMG_6854.mp4.asset.json";
import v6854Poster from "../assets/IMG_6854-poster.jpg.asset.json";
import v6859 from "../assets/IMG_6859.mp4.asset.json";
import v6859Poster from "../assets/IMG_6859-poster.jpg.asset.json";
import v6908 from "../assets/IMG_6908.mp4.asset.json";
import v6908Poster from "../assets/IMG_6908-poster.jpg.asset.json";
import v6986 from "../assets/IMG_6986.mp4.asset.json";
import v6986Poster from "../assets/IMG_6986-poster.jpg.asset.json";
import v6987 from "../assets/IMG_6987.mp4.asset.json";
import v6987Poster from "../assets/IMG_6987-poster.jpg.asset.json";
import v6988 from "../assets/IMG_6988.mp4.asset.json";
import v6988Poster from "../assets/IMG_6988-poster.jpg.asset.json";
import v6990 from "../assets/IMG_6990.mp4.asset.json";
import v6990Poster from "../assets/IMG_6990-poster.jpg.asset.json";
import v6992 from "../assets/IMG_6992.mp4.asset.json";
import v6992Poster from "../assets/IMG_6992-poster.jpg.asset.json";
import v6993 from "../assets/IMG_6993.mp4.asset.json";
import v6993Poster from "../assets/IMG_6993-poster.jpg.asset.json";
import v6995 from "../assets/IMG_6995.mp4.asset.json";
import v6995Poster from "../assets/IMG_6995-poster.jpg.asset.json";
import v6996 from "../assets/IMG_6996.mp4.asset.json";
import v6996Poster from "../assets/IMG_6996-poster.jpg.asset.json";
import v7066 from "../assets/IMG_7066.mp4.asset.json";
import v7066Poster from "../assets/IMG_7066-poster.jpg.asset.json";
import v7067 from "../assets/IMG_7067.mp4.asset.json";
import v7067Poster from "../assets/IMG_7067-poster.jpg.asset.json";
import v7078 from "../assets/IMG_7078.mp4.asset.json";
import v7078Poster from "../assets/IMG_7078-poster.jpg.asset.json";
import v7079 from "../assets/IMG_7079.mp4.asset.json";
import v7079Poster from "../assets/IMG_7079-poster.jpg.asset.json";
import v7088 from "../assets/IMG_7088.mp4.asset.json";
import v7088Poster from "../assets/IMG_7088-poster.jpg.asset.json";
import v7091 from "../assets/IMG_7091.mp4.asset.json";
import v7091Poster from "../assets/IMG_7091-poster.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ink and Algorithms — Build Media Archive" },
      { name: "description", content: "Verified build photography, plotting runs, and calibration records from the low-cost standalone 2D CNC pen plotter built at School of Tomorrow, Uganda." },
      { property: "og:title", content: "Ink and Algorithms — Build Media Archive" },
      { property: "og:description", content: "Verified build photography, plotting runs, and calibration records from the low-cost standalone 2D CNC pen plotter built at School of Tomorrow, Uganda." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MediaVault,
});

type MediaItem = {
  id: string; type: "video" | "photo"; category: string; image: string; kicker: string;
  title: string; description: string; meta: string; metric: string; duration?: string; video?: string;
};

// Ordered by historic creation sequence: Version 1 prototype captures (IMG_7073–7077)
// first, then the Version 2 rebuild and competition-era documentation.
const media: MediaItem[] = [
  { id: "VID-01", type: "video", category: "Live Plotting Videos", image: v6339Poster.url, video: v6339.url, kicker: "V1 prototype · Floor test", title: "Version 1 Floor Test: Guiding the First Pen Moves", description: "Early Version 1 testing on the floor with the frame taped over paper, the team steadying the carriage while commands are sent from the computer.", meta: "Bench Test", metric: "USB G-code", duration: "00:28" },
  { id: "VID-02", type: "video", category: "Live Plotting Videos", image: v6341Poster.url, video: v6341.url, kicker: "V1 prototype · Carriage run", title: "Version 1 Carriage Run: Belts, Rods and Servo Pen Holder", description: "Close view of the Version 1 frame in motion — steel rods, belt-driven axes and the SG90 servo pen holder moving across the sheet.", meta: "Axis Motion", metric: "SG90 Pen Lift", duration: "00:59" },
  { id: "VID-03", type: "video", category: "Live Plotting Videos", image: v6342Poster.url, video: v6342.url, kicker: "V1 prototype · Axis check", title: "Version 1 Axis Check: Moving the Carriage by Hand", description: "Hand-moving the Version 1 carriage to check travel and alignment of the rails before a powered run.", meta: "Travel Check", metric: "99 × 224 mm Area", duration: "00:38" },
  { id: "VID-04", type: "video", category: "Live Plotting Videos", image: v6552Poster.url, video: v6552.url, kicker: "V2 rebuild · Pencil run", title: "Version 2 Plotting Run: Pencil Drawing on the Wooden Base", description: "The rebuilt Version 2 machine drawing with a pencil — belt-driven carriage, servo pen lift and the battery supply behind the frame.", meta: "Standalone Run", metric: "M3 / M5 Pen Lift", duration: "00:31" },
  { id: "VID-05", type: "video", category: "Live Plotting Videos", image: v6553Poster.url, video: v6553.url, kicker: "V2 rebuild · Line drawing", title: "Version 2 Line Drawing: Servo Lowering the Pencil", description: "A second Version 2 run showing the pencil being lowered by the servo and tracing lines across the sheet.", meta: "G1 Line Moves", metric: "SG90 Servo Lift", duration: "00:17" },
  { id: "VID-06", type: "video", category: "Workshop & Assembly", image: v6846Poster.url, video: v6846.url, kicker: "Fabrication · CNC workshop", title: "First Look at the CNC Wood-Cutting Workshop", description: "An early workshop view of the full-size CNC router used while preparing wooden structural parts for the plotter.", meta: "Workshop Visit", metric: "CNC Router", duration: "00:07" },
  { id: "VID-07", type: "video", category: "Workshop & Assembly", image: v6852Poster.url, video: v6852.url, kicker: "Fabrication · Base cutting", title: "Cutting the Plotter’s Wooden Base Components", description: "The team reviews cut wooden sections on the CNC bed as the chassis pieces are produced and checked against the intended shape.", meta: "CNC Fabrication", metric: "Wooden Chassis", duration: "00:57" },
  { id: "VID-08", type: "video", category: "Workshop & Assembly", image: v6853Poster.url, video: v6853.url, kicker: "Fabrication · Part inspection", title: "Inspecting the Newly Cut Chassis Pieces", description: "Students examine the routed wooden parts on the machine bed before removing and assembling them.", meta: "Part Inspection", metric: "CNC-Cut Wood", duration: "00:24" },
  { id: "VID-09", type: "video", category: "Workshop & Assembly", image: v6854Poster.url, video: v6854.url, kicker: "Fabrication · Material handling", title: "Lifting the Cut Sections from the CNC Bed", description: "The cut wooden panels are carefully loosened and lifted from the router bed for the next stage of the build.", meta: "Fabrication", metric: "Panel Removal", duration: "00:21" },
  { id: "VID-10", type: "video", category: "Workshop & Assembly", image: v6859Poster.url, video: v6859.url, kicker: "Fabrication · Final check", title: "Checking the CNC Router and Finished Parts", description: "A final workshop inspection records the router, tools and completed wooden pieces before assembly begins.", meta: "Quality Check", metric: "Workshop Tools", duration: "00:22" },
  { id: "VID-11", type: "video", category: "Electronic Benchwork", image: v6908Poster.url, video: v6908.url, kicker: "Electronics · Soldering", title: "Soldering the Plotter Control Electronics", description: "A brief close-up of the team soldering connections for the control and driver electronics during the hardware build.", meta: "Circuit Assembly", metric: "Soldered Wiring", duration: "00:03" },
  { id: "VID-12", type: "video", category: "Live Plotting Videos", image: v6986Poster.url, video: v6986.url, kicker: "V2 testing · Computer link", title: "Connecting the Rebuilt Plotter to the Computer", description: "The computer interface and exposed control electronics are checked before sending movement commands to the rebuilt machine.", meta: "System Setup", metric: "USB G-code", duration: "00:17" },
  { id: "VID-13", type: "video", category: "Live Plotting Videos", image: v6987Poster.url, video: v6987.url, kicker: "V2 testing · First run", title: "Starting an Early Version 2 Plotting Test", description: "An early powered test captures the operator, machine frame and blank paper as the system is prepared to plot.", meta: "Powered Test", metric: "Two-Axis Motion", duration: "00:34" },
  { id: "VID-14", type: "video", category: "Live Plotting Videos", image: v6988Poster.url, video: v6988.url, kicker: "V2 testing · Extended run", title: "Extended Control and Carriage Test", description: "A longer bench run records control adjustments, carriage movement and pen positioning across the drawing area.", meta: "Motion Test", metric: "01:51 Session", duration: "01:51" },
  { id: "VID-15", type: "video", category: "Live Plotting Videos", image: v6990Poster.url, video: v6990.url, kicker: "V2 testing · Letter plot", title: "Plotting the First Rectangular Letter Forms", description: "The rebuilt machine traces red rectangular letter forms while the operator monitors the controller and pen path.", meta: "Lettering Run", metric: "G1 Line Moves", duration: "00:33" },
  { id: "VID-16", type: "video", category: "Live Plotting Videos", image: v6992Poster.url, video: v6992.url, kicker: "V2 testing · Setup", title: "Preparing the Rebuilt Plotter for a Drawing Run", description: "The team positions the paper and checks the rebuilt machine before beginning a controlled plotting test.", meta: "Run Preparation", metric: "Paper Alignment", duration: "00:18" },
  { id: "VID-17", type: "video", category: "Live Plotting Videos", image: v6993Poster.url, video: v6993.url, kicker: "V2 testing · Control", title: "Operating the Plotter from the Control Board", description: "A close working view of the operator adjusting the controls while the machine is prepared for movement over the paper.", meta: "Control Test", metric: "Manual Setup", duration: "00:47" },
  { id: "VID-18", type: "video", category: "Live Plotting Videos", image: v6995Poster.url, video: v6995.url, kicker: "V2 testing · Short run", title: "Short Plotting Test on the Wooden Base", description: "A brief test of the assembled plotter with the carriage positioned above a clean sheet on the wooden base.", meta: "Motion Test", metric: "Two-Axis Rig", duration: "00:12" },
  { id: "VID-19", type: "video", category: "Live Plotting Videos", image: v6996Poster.url, video: v6996.url, kicker: "V2 testing · Overhead", title: "Overhead Check of the Plotting Area", description: "An overhead view records the control connection, carriage position and available drawing area during testing.", meta: "Area Check", metric: "99 × 224 mm", duration: "00:12" },
  { id: "VID-20", type: "video", category: "Live Plotting Videos", image: v7066Poster.url, video: v7066.url, kicker: "V2 testing · Bench run", title: "Bench Test with the Complete Electronics Harness", description: "The rebuilt plotter is tested with its control electronics exposed beside the wooden frame for direct observation.", meta: "Bench Test", metric: "12 V Supply", duration: "00:51" },
  { id: "VID-21", type: "video", category: "Live Plotting Videos", image: v7067Poster.url, video: v7067.url, kicker: "V2 testing · Adjustment", title: "Adjusting the Carriage Before the Next Run", description: "A hands-on adjustment at the carriage and paper bed prepares the mechanism for another plotting sequence.", meta: "Carriage Setup", metric: "GT2 Belt Drive", duration: "00:34" },
  { id: "VID-22", type: "video", category: "Workshop & Assembly", image: v7078Poster.url, video: v7078.url, kicker: "Workshop · Fabrication", title: "Fabricating Wooden Parts for the Plotter", description: "Workshop footage documents hands-on shaping and fitting of wooden structural pieces used in the machine build.", meta: "Fabrication", metric: "Local Materials", duration: "00:51" },
  { id: "VID-23", type: "video", category: "Workshop & Assembly", image: v7079Poster.url, video: v7079.url, kicker: "Workshop · Rail assembly", title: "Assembling the Guide Rod and Gantry Hardware", description: "The team handles the guide rods and matching frame pieces while preparing the mechanical gantry assembly.", meta: "Mechanical Build", metric: "Guide Rods", duration: "00:32" },
  { id: "VID-24", type: "video", category: "Workshop & Assembly", image: v7088Poster.url, video: v7088.url, kicker: "Workshop · Team build", title: "Team Assembly Session at the Workbench", description: "The builders work together at the fabrication bench with tools, electronics and plotter parts arranged around them.", meta: "Team Build", metric: "Bench Assembly", duration: "00:32" },
  { id: "VID-25", type: "video", category: "Workshop & Assembly", image: v7091Poster.url, video: v7091.url, kicker: "Workshop · Extended record", title: "Extended Workshop Build and Wiring Session", description: "A longer record of the team assembling, inspecting and wiring the plotter at the workbench during its later construction stage.", meta: "Build Record", metric: "05:32 Session", duration: "05:32" },
  { id: "VID-26", type: "video", category: "Workshop & Assembly", image: vConvPoster.url, video: vConv.url, kicker: "Convention · Presentation", title: "Convention Presentation: Showing the Plotter to the Judges at the EASC", description: "Presenting the project at the convention beside the display board.", meta: "Public Demo", metric: "UGX 570,700 Build", duration: "00:29" },
  { id: "STILL-01", type: "photo", category: "Live Plotting Videos", image: img7073.url, kicker: "V1 prototype · First letters", title: "Version 1 First Plot: Servo Carriage Drawing Test Letters", description: "The first successful G-code run on the Version 1 frame — the SG90 servo lowers the pen and the Bresenham loop steps both axes through the letter paths.", meta: "G1 Line Moves", metric: "M3 / M5 Pen Lift" },
  { id: "STILL-02", type: "photo", category: "Sample Plot Outputs", image: img7074.url, kicker: "Pen-down close-up · V1", title: "Lettering Test: Pen Tracking the Vector Path", description: "Close capture of the pen following single-stroke letter outlines, verifying pen-lift timing and line continuity on plain paper.", meta: "Stroke Test", metric: "SG90 Servo Lift" },
  { id: "STILL-03", type: "photo", category: "Live Plotting Videos", image: img7075.url, kicker: "Calibration run · V1", title: "Dimensional Calibration: Measuring the Drawn Line", description: "The Section 11 calibration test — a commanded line is drawn, then measured on paper to confirm the microsteps-per-millimetre setting for the pulley in use.", meta: "Target: ±1 mm", metric: "80–100 µsteps/mm" },
  { id: "STILL-04", type: "photo", category: "Live Plotting Videos", image: rigMidplot.url, kicker: "V2 rebuild · Mid-plot", title: "Version 2 Mid-Plot: Continuous Line Drawing", description: "The rebuilt wooden machine rendering a design from the microSD card — fully standalone, no computer connected, file selected from the LCD menu.", meta: "Standalone Run", metric: "microSD G-code" },
  { id: "PHOTO-01", type: "photo", category: "Electronic Benchwork", image: img7077.url, kicker: "Driver stage · V1", title: "CNC Shield with A4988 Stepper Drivers", description: "The Arduino CNC shield carrying the A4988 driver modules, configured for 1/16 microstepping — 3,200 microsteps per revolution of each NEMA 17 motor.", meta: "A4988 Drivers", metric: "1/16 Microstep" },
  { id: "PHOTO-02", type: "photo", category: "Electronic Benchwork", image: img7076.url, kicker: "Full harness · V1", title: "Version 1 Wiring: Breadboard, LCD and Driver Harness", description: "The complete Version 1 electronics layout — breadboard prototyping, 16×2 LCD status display, and the full stepper and servo wiring harness before consolidation.", meta: "Bench Wiring", metric: "12 V Supply" },
  { id: "PHOTO-03", type: "photo", category: "Workshop & Assembly", image: workshop.url, kicker: "Fabrication bench", title: "Workshop Assembly & Parts Layout", description: "The crowded fabrication bench during the build — wooden chassis work, mechanism fitting, and tool layout as the frame came together.", meta: "Local Materials", metric: "Kampala Sourced" },
  { id: "PHOTO-04", type: "photo", category: "Sample Plot Outputs", image: lettering.url, kicker: "Output verification", title: "Hand-Checked Lettering Output Beside the Rig", description: "A drawn lettering sample inspected next to the machine — the paper record used to judge line quality before the Version 2 rebuild.", meta: "Output Check", metric: "Pen on Paper" },
  { id: "PHOTO-05", type: "photo", category: "Workshop & Assembly", image: img7094.url, kicker: "Assembly inspection · V2", title: "Inspecting the Rebuilt Gantry Assembly", description: "Hands-on inspection of the Version 2 gantry during assembly — the rebuild that replaced glue joints with mechanical fasteners after the transit break.", meta: "V2 Rebuild", metric: "Bolted Joints" },
  { id: "PHOTO-06", type: "photo", category: "Workshop & Assembly", image: img7098.url, kicker: "Wooden gantry & chassis", title: "Finalized Plotter with Engraved Wooden Base", description: "The finished two-axis machine on its natural-wood chassis — rails, gantry and control housing mounted for competition transport.", meta: "Base Assembly", metric: "V2 Final" },
  { id: "PHOTO-07", type: "photo", category: "Electronic Benchwork", image: img7097.url, kicker: "User interface // HMI", title: "Control Panel: LCD, SD Slot & Three Buttons", description: "The standalone operator panel — 16×2 LCD file menu, microSD slot for G-code, and the up / down / select buttons wired to analog pins A0–A2.", meta: "16×2 Interface", metric: "Offline Capable" },
  { id: "PHOTO-08", type: "photo", category: "Electronic Benchwork", image: img7092.url, kicker: "Logic proto // Proto-01", title: "Exposed Control Board & Rail Wiring", description: "Close view of the control board and rail wiring during bench testing, confirming signal integrity before the housing was closed.", meta: "Logic Testing", metric: "5 V Logic Bus" },
  { id: "PHOTO-09", type: "photo", category: "Electronic Benchwork", image: img7093.url, kicker: "Power electronics", title: "Driver Harness & Power Routing Detail", description: "Second angle on the exposed driver and power harness — the subsystem that feeds both steppers from the 12 V supply.", meta: "Driver Subsystem", metric: "12 V / 5 V Rails" },
  { id: "PHOTO-10", type: "photo", category: "Workshop & Assembly", image: img7096.url, kicker: "Mechanical transmission", title: "Guide Rods & GT2 Belt Drive Mechanism", description: "The motion hardware — smooth guide rods with the GT2 timing belt drive, 2 mm tooth pitch converting stepper rotation into linear travel.", meta: "GT2 Belt Drive", metric: "Pitch: 2.0 mm" },
  { id: "PHOTO-11", type: "photo", category: "Electronic Benchwork", image: img7095.url, kicker: "Team & machine", title: "The Team with the Finished Plotter", description: "Elijah and Derek beside the completed machine and the project display board — the presentation state of the competition build.", meta: "Competition Ready", metric: "UGX 570,700 Build" },
  ...extraArchivePhotos,
  ...archivePhotos,
];

const filters = ["All Media", "Live Plotting Videos", "Workshop & Assembly", "Electronic Benchwork", "Sample Plot Outputs", "Design & Sourcing"];

function MediaVault() {
  const [filter, setFilter] = useState("All Media");
  const [selected, setSelected] = useState<MediaItem | null>(null);
  const videos = media.filter((item) => item.type === "video" && (filter === "All Media" || item.category === filter));
  const photos = media.filter((item) => item.type === "photo" && (filter === "All Media" || item.category === filter));

  useEffect(() => {
    if (!selected) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [selected]);

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b-2 border-console bg-background">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase text-muted-foreground">
            <span className="flex size-8 items-center justify-center border border-console bg-console text-console-foreground"><Archive size={16}/></span>
            <span>INK & ALGORITHMS // DOC-LOG</span><ChevronRight size={12}/><span>Gallery & Media Archive</span><ChevronRight size={12}/><strong className="text-foreground">Hardware V2</strong>
          </div>
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase"><span className="size-2 animate-pulse rounded-full bg-primary"/><span>Feed: Verified Build Assets</span><span className="border-l border-border pl-3">Total Objects: {media.length}</span></div>
        </div>
      </header>

      <section className="mx-auto max-w-[1440px] px-5 pb-8 pt-12 lg:px-10 lg:pt-20">
        <div className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div><p className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase text-primary"><Camera size={16}/> Build documentation & field captures</p><h1 className="max-w-4xl text-5xl font-bold leading-[0.94] tracking-normal sm:text-7xl lg:text-8xl">Ink &amp; Algorithms<br/><span className="text-primary">Media Vault</span></h1><p className="mt-7 max-w-3xl text-base leading-7 text-muted-foreground">Photography, plotting runs, and calibration records from the low-cost standalone 2D CNC pen plotter designed and built by Elijah Ben Tayebwa and Derek Muyanja at School of Tomorrow, Uganda — ordered by historic creation sequence from the Version 1 prototype to the competition build.</p></div>
          <div className="border-l-2 border-primary pl-5"><Button variant="dark" className="w-full sm:w-auto"><Download size={15}/> Download Jury Media Kit</Button><p className="mt-3 font-mono text-[10px] uppercase text-muted-foreground">Photos + Report + BOM</p></div>
        </div>
        <div className="flex gap-1 overflow-x-auto py-5" aria-label="Media filters">{filters.map((name) => { const count = name === "All Media" ? media.length : media.filter((item) => item.category === name).length; return <Button key={name} size="sm" variant={filter === name ? "primary" : "ghost"} onClick={() => setFilter(name)} aria-pressed={filter === name}>{name} <span className="opacity-60">[{count}]</span></Button> })}</div>
      </section>

      {videos.length > 0 && <section className="border-y border-border bg-card py-12"><div className="mx-auto max-w-[1440px] px-5 lg:px-10"><SectionTitle icon={<Activity size={18}/>} eyebrow="Plotting run captures" title="Featured Plotting & Calibration Runs" tail="G-CODE // microSD SOURCE"/><div className="mt-7 grid gap-px bg-border md:grid-cols-2">{videos.map((item) => <MediaCard key={item.id} item={item} onOpen={setSelected}/>)}</div></div></section>}

      <section className="bg-console text-console-foreground"><div className="mx-auto grid max-w-[1440px] gap-px bg-background lg:grid-cols-[1.35fr_repeat(3,1fr)]"><div className="bg-console p-7"><div className="flex items-center gap-3"><Gauge className="text-signal"/><div><h2 className="font-semibold">Machine Motion Specification</h2><p className="mt-1 text-sm opacity-60">As documented in the accompanying engineering report.</p></div></div></div>{[["MICROSTEPS / REV","3,200","1/16 STEP"],["STEP PULSE","400","µS DELAY"],["WORK AREA","99×224","MM"]].map(([label,value,unit]) => <div key={label} className="bg-console p-7 font-mono"><p className="text-[10px] opacity-55">{label}</p><p className="mt-2 text-3xl font-bold text-signal">{value} <span className="text-xs opacity-70">{unit}</span></p></div>)}</div></section>

      {photos.length > 0 && <section className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10"><SectionTitle icon={<Grid3X3 size={18}/>} eyebrow="Hardware component archive" title="Interactive Photo Vault" tail="CLICK ASSET TO INSPECT"/><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{photos.map((item) => <PhotoCard key={item.id} item={item} onOpen={setSelected}/>)}</div></section>}

      <section className="border-y border-border bg-signal-soft"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:px-10"><div><p className="font-mono text-xs font-bold uppercase text-primary">// Rig capture protocol</p><h2 className="mt-3 text-3xl font-bold">Documented Build Fidelity</h2><p className="mt-5 leading-7 text-muted-foreground">Every capture in this vault corresponds to a stage of the six-stage construction process recorded in the engineering report — from hand sketches and the priced parts list, through the Version 1 prototype and its calibration tests, to the Version 2 rebuild presented at competition.</p><div className="mt-6 border-l-2 border-primary pl-4 font-mono text-xs leading-6"><strong>ACCURACY TARGET:</strong><br/><span className="text-muted-foreground">A commanded 100 mm line must measure between 99 and 101 mm on paper</span></div></div><AuditTable/></div></section>

      <footer className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-8 font-mono text-[10px] uppercase text-muted-foreground sm:flex-row sm:justify-between lg:px-10"><span>INK & ALGORITHMS MEDIA ARCHIVE // AASC ENGINEERING PROJECT</span><span>SCHOOL OF TOMORROW, UGANDA // SEPTEMBER 2026</span></footer>
      {selected && <Inspector item={selected} onClose={() => setSelected(null)}/>} 
    </main>
  );
}

function SectionTitle({ icon, eyebrow, title, tail }: { icon: React.ReactNode; eyebrow: string; title: string; tail: string }) { return <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-2 flex items-center gap-2 font-mono text-[10px] font-bold uppercase text-primary">{icon}{eyebrow}</p><h2 className="text-2xl font-bold sm:text-3xl">{title}</h2></div><span className="font-mono text-[10px] text-muted-foreground">{tail}</span></div> }

function MediaCard({ item, onOpen }: { item: MediaItem; onOpen: (item: MediaItem) => void }) { return <article className="group bg-card"><button className="block w-full text-left" onClick={() => onOpen(item)} aria-label={`Open ${item.title}`}><div className="scanlines relative aspect-[16/9] overflow-hidden bg-muted"><img src={item.image} alt={item.title} className="size-full object-cover grayscale-[35%] transition duration-500 group-hover:scale-[1.025] group-hover:grayscale-0"/><div className="absolute inset-0 bg-console/10"/><span className="absolute left-5 top-5 bg-primary px-2 py-1 font-mono text-[10px] font-bold text-primary-foreground">{item.id}</span><span className="absolute right-5 top-5 bg-console px-2 py-1 font-mono text-[10px] text-console-foreground">{item.duration}</span><span className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-signal bg-console/90 text-signal transition-transform group-hover:scale-110"><Play size={22} fill="currentColor"/></span></div><div className="p-6"><p className="font-mono text-[10px] font-bold uppercase text-primary">{item.kicker}</p><h3 className="mt-2 text-xl font-bold leading-tight">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p><div className="mt-5 flex flex-wrap gap-4 border-t border-border pt-4 font-mono text-[10px] uppercase"><span>{item.meta}</span><span>{item.metric}</span></div></div></button></article> }

function PhotoCard({ item, onOpen }: { item: MediaItem; onOpen: (item: MediaItem) => void }) { return <article className="group border border-border bg-card"><button className="w-full text-left" onClick={() => onOpen(item)} aria-label={`Inspect ${item.title}`}><div className="relative aspect-[4/3] overflow-hidden bg-muted"><img src={item.image} alt={item.title} className="size-full object-cover transition duration-500 group-hover:scale-[1.04]"/><span className="absolute left-3 top-3 bg-console px-2 py-1 font-mono text-[10px] text-console-foreground">[{item.id}]</span><span className="absolute bottom-3 right-3 flex size-9 items-center justify-center bg-primary text-primary-foreground"><ZoomIn size={16}/></span></div><div className="p-5"><div className="flex items-center justify-between font-mono text-[10px] uppercase text-muted-foreground"><span>{item.meta}</span><span>{item.metric}</span></div><p className="mt-4 font-mono text-[10px] font-bold uppercase text-primary">{item.kicker}</p><h3 className="mt-2 text-lg font-bold leading-tight">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p></div></button></article> }

function AuditTable() { const rows = [["STAGE_01","Sketches & Parts Pricing","Priced before commit","Done"],["STAGE_02","V1 Prototype Assembly","First letters plotted","Done"],["STAGE_03","Calibration Line Test","99–101 mm window","Verified"],["STAGE_04","V2 Rebuild After Transit Break","Bolted, minimal glue","Done"]]; return <div><div className="mb-3 flex items-center justify-between"><h3 className="font-mono text-xs font-bold uppercase">Build Stage Audit Matrix</h3><span className="font-mono text-[10px] text-primary">SIX-STAGE PROCESS</span></div><div className="overflow-x-auto border border-border bg-card"><table className="w-full min-w-[560px] text-left font-mono text-xs"><thead className="bg-console text-console-foreground"><tr>{["Stage","Milestone","Criterion","Status"].map((h) => <th key={h} className="p-3">{h}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row[0]} className="border-t border-border">{row.map((cell,i) => <td key={cell} className={`p-3 ${i === 0 ? "font-bold text-primary" : ""}`}>{cell}{i === 3 && <span className="ml-2 text-primary">PASS</span>}</td>)}</tr>)}</tbody></table></div></div> }

function Inspector({ item, onClose }: { item: MediaItem; onClose: () => void }) {
  return <div className="fixed inset-0 z-50 overflow-y-auto bg-console/90 p-3 backdrop-blur-sm sm:p-8" role="dialog" aria-modal="true" aria-label={`${item.title} inspection`} onMouseDown={(e) => e.target === e.currentTarget && onClose()}><div className="mx-auto max-w-6xl border border-signal/40 bg-console text-console-foreground shadow-2xl"><div className="flex items-center justify-between border-b border-console-foreground/20 p-4"><div className="flex items-center gap-2 font-mono text-xs uppercase"><ImageIcon size={16} className="text-signal"/>{item.type === "video" ? "Bench Video Player" : "High-Res Component Photo"}<span className="text-signal">{item.id}</span></div><Button variant="ghost" size="icon" onClick={onClose} aria-label="Close inspection"><X size={18}/></Button></div><div className="grid lg:grid-cols-[1fr_300px]"><div><div className="scanlines relative aspect-video bg-background">{item.type === "video" && item.video ? <video key={item.video} src={item.video} poster={item.image} controls autoPlay playsInline className="size-full object-contain"/> : <img src={item.image} alt={item.title} className="size-full object-contain"/>}</div></div><aside className="border-t border-console-foreground/20 p-6 lg:border-l lg:border-t-0"><p className="font-mono text-[10px] uppercase text-signal">Firmware command set</p><h2 className="mt-3 text-xl font-bold">{item.title}</h2><p className="mt-4 text-sm leading-6 opacity-65">{item.description}</p><dl className="mt-7 space-y-4 border-y border-console-foreground/20 py-5 font-mono text-xs"><div><dt className="opacity-45">PEN LIFT SERVO</dt><dd className="mt-1 text-signal">SG90 · UP 90° / DOWN 38°</dd></div><div><dt className="opacity-45">MOTION RESOLUTION</dt><dd className="mt-1">80–100 µsteps/mm</dd></div><div><dt className="opacity-45">MACHINE COST</dt><dd className="mt-1">UGX 570,700</dd></div></dl><div className="mt-5 space-y-2 font-mono text-[10px] text-signal"><p>// G-CODE COMMAND SET</p><p>&gt; G0 / G1 — MOVE TO X,Y</p><p>&gt; G28 — RETURN HOME</p><p>&gt; M3 / M5 — PEN DOWN / UP</p></div><div className="mt-7 flex items-center gap-2 border-t border-console-foreground/20 pt-5 font-mono text-[10px] opacity-50"><SlidersHorizontal size={14}/>{item.metric}<Ruler className="ml-auto" size={14}/><BatteryCharging size={14}/></div></aside></div></div></div>;
}
