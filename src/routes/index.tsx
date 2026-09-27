import { createFileRoute } from "@tanstack/react-router";
import {
  Activity, Archive, BatteryCharging, Camera, ChevronRight, CirclePause, Download,
  Gauge, Grid3X3, Image as ImageIcon, Maximize, Pause, Play, RotateCcw, Ruler,
  SlidersHorizontal, Volume2, X, ZoomIn,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "../components/ui/button";

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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mechatronic Media Vault — RIG Archive" },
      { name: "description", content: "Verified runtime recordings, hardware photography, and kinematics data from the CoreXY drafting engine." },
      { property: "og:title", content: "Mechatronic Media Vault — RIG Archive" },
      { property: "og:description", content: "Verified runtime recordings, hardware photography, and kinematics data from the CoreXY drafting engine." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MediaVault,
});

type MediaItem = {
  id: string; type: "video" | "photo"; category: string; image: string; kicker: string;
  title: string; description: string; meta: string; metric: string; duration?: string;
};

const media: MediaItem[] = [
  { id: "VID-01", type: "video", category: "Live Plotting Videos", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYVMyjnFPhNPsUoDOpBpnM4Jn66Ydc_Jmdt4wOchGGDPe39cxfUAel0v5KKTyUx901v8UQz7Pj34jwF0MEhd8tmxIRiIqMBhkZ7Zcq6nz83gx8EfL7YDq6aQgum3FK1kcEOg60iy-kMsQ_n6SgnQn3QKT9KtDXxBLXFBfMEnYv6xNsRYhiak_kNB1gdpQTEytGMmd7fvkMlF-UxuDJlcn67L8DihcK18ovR0r5P5NIW-biTHDPHUOgHzuYjjsmeKes5wQ", kicker: "Pen modulation · Run #1049", title: "Plotter In Action: Live Portrait Vector Drawing", description: "Real-time G-code line interpolation and pen pressure modulation as the wooden carriage renders a continuous-line portrait.", meta: "Feedrate: 150mm/s", metric: "0.5mm Gel", duration: "02:45" },
  { id: "VID-02", type: "video", category: "Workshop & Assembly", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiFEs1_8V5yyYs5kVcyBvHaQeahzD5oxPkCAMBCVRq2pX-qsuwwQbqZLIFxtgoi12XEJr5qZ8APmyLKAoVgvitF_sHXZgvfB9O_XOKcJAU-lyb1oCLifHE9dzGHnuduVMO0jztF0bXCbyYsuxECG2GCsF62QQZvVMs64IMZNJiQlVWt1wLy49Th3wvVnu3ZIyR3vSBFx4z5N--V7jjJPCoc2EN5apc_faG8UqtT3dadiRLepVS0mUOOO6MbnzP3LsgSRY", kicker: "Workshop assembly · Station B-04", title: "Workshop Assembly & Calibration Session", description: "Full fabrication bench review featuring battery wiring, linear bearing alignment, and handmade gantry assembly.", meta: "12V Lead-Acid", metric: "M8 Lead Screws", duration: "04:12" },
  { id: "VID-03", type: "video", category: "Sample Plot Outputs", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPSgjGEfUrAhxEJR_pk0mK7TUmCGMX5_zKATiuNsr6HEYLDb9YQhhM8oQxho1obFqBJPSkg3KILJQ6N49qHKSHEIEaV54M6Rx9WuJ9TkI4yFusvIBEGPbR1ajQLlI-dE0W8usi9_gU2pLwiywqV6T7OR5midcNxLpJfJjvEQ_GN2UMw5YJ8PZxH0TleHyvzF1hsiohWzum0XIjrDGLuraPsXypJ_Aw7Jl8znzYp9nntQQTkA_53PERZZpl5PtZcDrtsmg", kicker: "Vector lettering · Hershey kernel", title: "First Lettering Test: Mechanical Homing & Font Vectors", description: "High-precision verification of single-stroke type synthesis and zero backlash on rapid axis reversals.", meta: "Stroke kern: 1.2mm", metric: "Microstep: 1/16", duration: "01:15" },
  { id: "VID-04", type: "video", category: "Live Plotting Videos", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAcdeazncTPmwJ3coizySecfDM_3MdH43vMVmJxJ6HuA7gmmQryvg3zmhZHIPSoPWDuVnrzyva5WGBEG5AmHh-PSc00Lph2Kwjj6N_u2XucWbeTdSC9VFKYpQ4WIurWMmOFD42QcdTqAhjfGuG56AoUB25UTurfiK6qtibPWFTGJzGvT8vO5Qvz24flmxXkKVA9-vGuXT_IelRDZgjJ8t-LJmPdQK0M80kgRS6eiUk7uoMO2pX1Em60MKi63OlWKlkDg8", kicker: "Dual-axis motion · Free-run test", title: "Initial X-Y Gantry Calibration Run", description: "Engineering stress testing on sliding rails with perpendicular orthogonality and carriage motion checks.", meta: "Orthogonality: 89.98°", metric: "GT2 Timing Belts", duration: "03:30" },
  { id: "PHOTO-01", type: "photo", category: "Workshop & Assembly", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTsYnm3oFk8chw9sRm9d12qF7ZsD70Vj2ScCn-rwLV8N6-29nCtLYKwdWnJWaljKnI6abb_zxDHPqNB-PkWnQsOTVsqpIuTQ5-J2WKfvacDw50RaGWJUyVVOeJMG8a_EnYVvLvq-eBhTVwlF8PkhRrO7usF-tuyT9KVzKiUodLZI4bM2-vt5iHMQ1KNSPlEmBNfuVwoeOTUu_tfiKeH6Y8OIFtbh7hczwApHiUniFlXgZ2SzsVwIJMKbWyiIbC37N0NK8", kicker: "Wooden gantry & chassis", title: "Finalized CNC Rig with Laser-Etched Wooden Base", description: "Precision-routed support frame designed for low vibration transfer and modular linear-guide integration.", meta: "Base Assembly", metric: "V2.4 Final" },
  { id: "PHOTO-02", type: "photo", category: "Electronic Benchwork", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5plGFvzxTYjJCdo-1YwRCZQBu9TJA9jKQhpKjqxruycm96ILoEMxQRIMoxt86-7AdV2H8Efi5avzhKt2WvSpMARfml9qZrT0nUlO-Cbx9wX-0pAZF2uwe13W6dBn3tXOeTpt8Rd1RZwJvg9tW5bYXziupYuMwvNFQRYKt_rcCejVh51AjfkxrZp4PMsSQUSYcPS-nED8jVJjgSeUswIEWDQsruifJyQKLtlKAuSf-1j8pUYKmjaD__BajMEcFf2Tcp5Q", kicker: "User interface // HMI", title: "Control Console: Display, SD-Slot & Action Buttons", description: "Dedicated panel providing feedrate override, coordinate zeroing, and direct SD file queuing.", meta: "16×2 Interface", metric: "Offline Capable" },
  { id: "PHOTO-03", type: "photo", category: "Electronic Benchwork", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvBe6O_xYo5NOus2hfcL37mbRspzBDXfjCf77OPu9sMP1GNCPx3tU0yhBzay6dwP0KZywAjKDE1A5ScZ_UsXuN3War-NkXRjrnR1Tmhd-nvRdqC69zj1EyONbDwFCb2E46LaE2ivhENyKpfy8BzHlA_F4uihxixEcp9dySgxQv9Bp5Y0MlqQNc7Ee8Nz24R68-DzKw2xqsCL9fuuzZE5K6o3VkpsRnrO32hY20cScXM8B5_60sA-tttoxvRNdGaI-8d1M", kicker: "Logic proto // Proto-01", title: "Breadboard Prototyping & LCD Telemetry Status", description: "Hardware-in-the-loop testing confirming signal integrity and display refresh before PCB routing.", meta: "Logic Testing", metric: "5V / 3.3V Bus" },
  { id: "PHOTO-04", type: "photo", category: "Electronic Benchwork", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPwiS2ZiNYGRt2tj3KHSLgaxW3jURWIWDrsT3-wDmJlao36xsxb-zhlDzzEnE_IvpXUXrb3Pu3p4WpQ6hPwYffpQlpP92X2GK7sxiJLl_c5owyGr4jPL5MwTHWyPJmNlr9j-oFCgjji47eOHfegqtCRk7jEIVM8PrWbqKW7ho7Twz_2ID9WAFtF1QDhw9s0wFCOnaOo4UwX24LpVkv4dLb-Ng70xbuNmITnOKHI9qG-opQra9b9-bZeE14Nfd_eQo5UB8", kicker: "Power electronics", title: "Arduino CNC Shield & A4988 Driver Harness", description: "Thermally tuned drivers configured for smooth low-speed line draws at 1/16 micro-stepping.", meta: "Driver Subsystem", metric: "1.2A Peak / Coil" },
  { id: "PHOTO-05", type: "photo", category: "Workshop & Assembly", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-zfRvO8qZ5YippsfuzGg_T5xoHhg6sWeIrePIBrhO53kFXDutizGjTBz-POvjtvP0-YnHGas5XpTx0FkQ4KUhuVSjD7TmnoiyubjL9RoYXG16BHMXkTnh0Z-Y8ZHkRRLxbW47fbhTXFtK6vfvUtJAEQ66siHI96VoP0Hb4l6_dVgpLGzyQPxTMzuKvm1nN1d59RVtUGaa-GFtqINAhud4EbYtyXOh5kiI26JMhNtAxrBpg5UHWPi23HD7HPiPh_B7mXw", kicker: "Mechanical transmission", title: "Dual Smooth Rods & Lead Screw Drive Mechanism", description: "Twin optical-grade guide rods with self-aligning bearings eliminate cantilever deflection.", meta: "Lead Screw Guide", metric: "Pitch: 2.0mm" },
  { id: "PHOTO-06", type: "photo", category: "Electronic Benchwork", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgqq4RA1UdpZox_jzfd4h4BlZFsk6nzLGVo4Myab2SbTNHV3Dk-xjFW3NK1QtTkS5gVN_dcTzqevM9T8WVeJfx0RWvaVpbcaZr_TTrEaoXhvyvY9dKA7nTn1KR2-4ucCYqB4vyxTVoAcJCKgcwa4dgOfEM2ejR_3_QFPdPmd-r3a6pHkrVhjJP3_D6Z8DJNQnbFRUFbOxQa05dGXnuarZKqVReFID2QwS5maDGLqto56xmANYXeHN0hUV93SjFRjxsuww", kicker: "Power & logic wiring", title: "Control Box Wiring & Motherboard Bench Testing", description: "System harness integration with clean cable dressing and opto-isolated endstop switches.", meta: "Bench Enclosure", metric: "EMC Compliant" },
];

const filters = ["All Media", "Live Plotting Videos", "Workshop & Assembly", "Electronic Benchwork", "Sample Plot Outputs"];

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
            <span>RIG // DOC-LOG</span><ChevronRight size={12}/><span>Gallery & Media Archive</span><ChevronRight size={12}/><strong className="text-foreground">Hardware V2.4</strong>
          </div>
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase"><span className="size-2 animate-pulse rounded-full bg-primary"/><span>Feed: Verified Jury Assets</span><span className="border-l border-border pl-3">Total Objects: 10</span></div>
        </div>
      </header>

      <section className="mx-auto max-w-[1440px] px-5 pb-8 pt-12 lg:px-10 lg:pt-20">
        <div className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div><p className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase text-primary"><Camera size={16}/> Lab documentation & field recordings</p><h1 className="max-w-4xl text-5xl font-bold leading-[0.94] tracking-normal sm:text-7xl lg:text-8xl">Mechatronic<br/><span className="text-primary">Media Vault</span></h1><p className="mt-7 max-w-3xl text-base leading-7 text-muted-foreground">High-fidelity photojournalism, bench verification clips, and motion kinematics captures recorded during the build and calibration cycles of the CoreXY drafting engine.</p></div>
          <div className="border-l-2 border-primary pl-5"><Button variant="dark" className="w-full sm:w-auto"><Download size={15}/> Download Jury Media Kit</Button><p className="mt-3 font-mono text-[10px] uppercase text-muted-foreground">482 MB // 4K B-roll + BOM</p></div>
        </div>
        <div className="flex gap-1 overflow-x-auto py-5" aria-label="Media filters">{filters.map((name) => { const count = name === "All Media" ? media.length : media.filter((item) => item.category === name).length; return <Button key={name} size="sm" variant={filter === name ? "primary" : "ghost"} onClick={() => setFilter(name)} aria-pressed={filter === name}>{name} <span className="opacity-60">[{count}]</span></Button> })}</div>
      </section>

      {videos.length > 0 && <section className="border-y border-border bg-card py-12"><div className="mx-auto max-w-[1440px] px-5 lg:px-10"><SectionTitle icon={<Activity size={18}/>} eyebrow="Video stream photogrammetry" title="Featured Runtime Bench Recordings" tail="SYNC FREQ: 60Hz 1080P"/><div className="mt-7 grid gap-px bg-border md:grid-cols-2">{videos.map((item) => <MediaCard key={item.id} item={item} onOpen={setSelected}/>)}</div></div></section>}

      <section className="bg-console text-console-foreground"><div className="mx-auto grid max-w-[1440px] gap-px bg-background lg:grid-cols-[1.35fr_repeat(3,1fr)]"><div className="bg-console p-7"><div className="flex items-center gap-3"><Gauge className="text-signal"/><div><h2 className="font-semibold">Live Bench Kinematics Telemetry</h2><p className="mt-1 text-sm opacity-60">Optical encoder feedback synced at 100Hz.</p></div></div></div>{[["MAX VELOCITY","250.0","MM/S"],["REPEATABILITY","±0.045","MM"],["PEN PRESSURE","0.85","N DYN"]].map(([label,value,unit]) => <div key={label} className="bg-console p-7 font-mono"><p className="text-[10px] opacity-55">{label}</p><p className="mt-2 text-3xl font-bold text-signal">{value} <span className="text-xs opacity-70">{unit}</span></p></div>)}</div></section>

      {photos.length > 0 && <section className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10"><SectionTitle icon={<Grid3X3 size={18}/>} eyebrow="Hardware component archive" title="Interactive Photo Vault" tail="CLICK ASSET TO INSPECT"/><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{photos.map((item) => <PhotoCard key={item.id} item={item} onOpen={setSelected}/>)}</div></section>}

      <section className="border-y border-border bg-signal-soft"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:px-10"><div><p className="font-mono text-xs font-bold uppercase text-primary">// Rig capture protocol</p><h2 className="mt-3 text-3xl font-bold">Photographic & Telemetric Fidelity</h2><p className="mt-5 leading-7 text-muted-foreground">All high-speed video frames were captured with a calibrated 240fps macro optical camera at 1/1000s shutter speed to eliminate motion blur when tracking the pen carriage.</p><div className="mt-6 border-l-2 border-primary pl-4 font-mono text-xs leading-6"><strong>CALIBRATION STANDARD:</strong><br/><span className="text-muted-foreground">ISO 10360-2 Coordinate Measuring Machine Verification Baseline</span></div></div><AuditTable/></div></section>

      <footer className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-8 font-mono text-[10px] uppercase text-muted-foreground sm:flex-row sm:justify-between lg:px-10"><span>RIG MEDIA ARCHIVE // DOCUMENTATION V2.4</span><span>CERN-OHL-W // VERIFIED CAPTURE LOG</span></footer>
      {selected && <Inspector item={selected} onClose={() => setSelected(null)}/>} 
    </main>
  );
}

function SectionTitle({ icon, eyebrow, title, tail }: { icon: React.ReactNode; eyebrow: string; title: string; tail: string }) { return <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-2 flex items-center gap-2 font-mono text-[10px] font-bold uppercase text-primary">{icon}{eyebrow}</p><h2 className="text-2xl font-bold sm:text-3xl">{title}</h2></div><span className="font-mono text-[10px] text-muted-foreground">{tail}</span></div> }

function MediaCard({ item, onOpen }: { item: MediaItem; onOpen: (item: MediaItem) => void }) { return <article className="group bg-card"><button className="block w-full text-left" onClick={() => onOpen(item)} aria-label={`Open ${item.title}`}><div className="scanlines relative aspect-[16/9] overflow-hidden bg-muted"><img src={item.image} alt={item.title} className="size-full object-cover grayscale-[35%] transition duration-500 group-hover:scale-[1.025] group-hover:grayscale-0"/><div className="absolute inset-0 bg-console/10"/><span className="absolute left-5 top-5 bg-primary px-2 py-1 font-mono text-[10px] font-bold text-primary-foreground">{item.id}</span><span className="absolute right-5 top-5 bg-console px-2 py-1 font-mono text-[10px] text-console-foreground">{item.duration} MIN</span><span className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-signal bg-console/90 text-signal transition-transform group-hover:scale-110"><Play size={22} fill="currentColor"/></span></div><div className="p-6"><p className="font-mono text-[10px] font-bold uppercase text-primary">{item.kicker}</p><h3 className="mt-2 text-xl font-bold leading-tight">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p><div className="mt-5 flex flex-wrap gap-4 border-t border-border pt-4 font-mono text-[10px] uppercase"><span>{item.meta}</span><span>{item.metric}</span></div></div></button></article> }

function PhotoCard({ item, onOpen }: { item: MediaItem; onOpen: (item: MediaItem) => void }) { return <article className="group border border-border bg-card"><button className="w-full text-left" onClick={() => onOpen(item)} aria-label={`Inspect ${item.title}`}><div className="relative aspect-[4/3] overflow-hidden bg-muted"><img src={item.image} alt={item.title} className="size-full object-cover transition duration-500 group-hover:scale-[1.04]"/><span className="absolute left-3 top-3 bg-console px-2 py-1 font-mono text-[10px] text-console-foreground">[{item.id}]</span><span className="absolute bottom-3 right-3 flex size-9 items-center justify-center bg-primary text-primary-foreground"><ZoomIn size={16}/></span></div><div className="p-5"><div className="flex items-center justify-between font-mono text-[10px] uppercase text-muted-foreground"><span>{item.meta}</span><span>{item.metric}</span></div><p className="mt-4 font-mono text-[10px] font-bold uppercase text-primary">{item.kicker}</p><h3 className="mt-2 text-lg font-bold leading-tight">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p></div></button></article> }

function AuditTable() { const rows = [["RUN_01","Pen Tip Deflection","0.021 mm","< 0.05 mm"],["RUN_02","Stepper Thermal Rise","+14.2 °C","< 40.0 °C"],["RUN_03","Optical Homing Delta","±0.008 mm","< 0.02 mm"],["RUN_04","Servo Lift Cycle Time","42 ms","< 50 ms"]]; return <div><div className="mb-3 flex items-center justify-between"><h3 className="font-mono text-xs font-bold uppercase">Kinematics & Capture Audit Matrix</h3><span className="font-mono text-[10px] text-primary">SESSION 24-B</span></div><div className="overflow-x-auto border border-border bg-card"><table className="w-full min-w-[560px] text-left font-mono text-xs"><thead className="bg-console text-console-foreground"><tr>{["Run ID","Parameter","Measured","Tolerance"].map((h) => <th key={h} className="p-3">{h}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row[0]} className="border-t border-border">{row.map((cell,i) => <td key={cell} className={`p-3 ${i === 0 ? "font-bold text-primary" : ""}`}>{cell}{i === 3 && <span className="ml-2 text-primary">PASS</span>}</td>)}</tr>)}</tbody></table></div></div> }

function Inspector({ item, onClose }: { item: MediaItem; onClose: () => void }) {
  const [playing, setPlaying] = useState(false);
  return <div className="fixed inset-0 z-50 overflow-y-auto bg-console/90 p-3 backdrop-blur-sm sm:p-8" role="dialog" aria-modal="true" aria-label={`${item.title} inspection`} onMouseDown={(e) => e.target === e.currentTarget && onClose()}><div className="mx-auto max-w-6xl border border-signal/40 bg-console text-console-foreground shadow-2xl"><div className="flex items-center justify-between border-b border-console-foreground/20 p-4"><div className="flex items-center gap-2 font-mono text-xs uppercase"><ImageIcon size={16} className="text-signal"/>{item.type === "video" ? "Bench Video Player" : "High-Res Component Photo"}<span className="text-signal">{item.id}</span></div><Button variant="ghost" size="icon" onClick={onClose} aria-label="Close inspection"><X size={18}/></Button></div><div className="grid lg:grid-cols-[1fr_300px]"><div><div className="scanlines relative aspect-video bg-background"><img src={item.image} alt={item.title} className="size-full object-contain"/>{item.type === "video" && <Button variant="primary" size="icon" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" onClick={() => setPlaying(!playing)} aria-label={playing ? "Pause recording" : "Play recording"}>{playing ? <Pause/> : <Play/>}</Button>}</div>{item.type === "video" && <div className="border-t border-console-foreground/20 p-4"><div className="h-1 bg-console-foreground/20"><div className={`h-full bg-signal transition-all duration-1000 ${playing ? "w-2/3" : "w-1/2"}`}/></div><div className="mt-4 flex items-center gap-2"><Button variant="ghost" size="icon" aria-label={playing ? "Pause" : "Play"} onClick={() => setPlaying(!playing)}>{playing ? <CirclePause size={17}/> : <Play size={17}/>}</Button><Button variant="ghost" size="icon" aria-label="Replay ten seconds"><RotateCcw size={17}/></Button><span className="font-mono text-xs">01:28 / {item.duration}</span><span className="ml-auto font-mono text-xs">1.0×</span><Button variant="ghost" size="icon" aria-label="Volume"><Volume2 size={17}/></Button><Button variant="ghost" size="icon" aria-label="Fullscreen"><Maximize size={17}/></Button></div></div>}</div><aside className="border-t border-console-foreground/20 p-6 lg:border-l lg:border-t-0"><p className="font-mono text-[10px] uppercase text-signal">Sync telemetry // 100Hz log</p><h2 className="mt-3 text-xl font-bold">{item.title}</h2><p className="mt-4 text-sm leading-6 opacity-65">{item.description}</p><dl className="mt-7 space-y-4 border-y border-console-foreground/20 py-5 font-mono text-xs"><div><dt className="opacity-45">TARGET COMPONENT</dt><dd className="mt-1 text-signal">{item.id}_SERVO_HEAD</dd></div><div><dt className="opacity-45">COMMAND FEEDRATE</dt><dd className="mt-1">250 mm/s</dd></div><div><dt className="opacity-45">MAX ACCELERATION</dt><dd className="mt-1">18.4 mm/s²</dd></div></dl><div className="mt-5 space-y-2 font-mono text-[10px] text-signal"><p>// RECENT INTERPOLATIONS</p><p>&gt; G01 X42.8 Y99.1 Z-0.5</p><p>&gt; G00 Z2.0 (RAPID UP)</p><p>&gt; M03 S255 (PEN DOWN)</p></div><div className="mt-7 flex items-center gap-2 border-t border-console-foreground/20 pt-5 font-mono text-[10px] opacity-50"><SlidersHorizontal size={14}/>{item.metric}<Ruler className="ml-auto" size={14}/><BatteryCharging size={14}/></div></aside></div></div></div>;
}