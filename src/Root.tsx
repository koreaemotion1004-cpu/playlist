import "./index.css";
import { Composition } from "remotion";
import { Playlist } from "./Playlist";
import { FullPlaylist } from "./FullPlaylist";

const FPS = 30;

const tracks: { file: string; duration: number }[] = [
  { file: "Afternoon-in-Blue.mp3", duration: 187.68 },
  { file: "Fog-on-the-Harbor.mp3", duration: 193.0 },
  { file: "Half-a-Croissant-and-Miles-Davis.mp3", duration: 191.88 },
  { file: "Nobody-Rushes-Here.mp3", duration: 171.24 },
  { file: "Same-Table-Different-Story.mp3", duration: 189.0 },
  { file: "Someone-Left-the-Piano-On.mp3", duration: 187.28 },
  { file: "The-Barista-Knows-My-Order.mp3", duration: 172.36 },
  { file: "Thursdays-Taste-Like-Cardamom.mp3", duration: 183.36 },
  { file: "Velvet-Underground.mp3", duration: 176.76 },
  { file: "When-the-Trumpet-Finds-the-Rain.mp3", duration: 178.52 },
  // 260408
  { file: "260408/The-Man-Who-Tips-in-Coins.mp3", duration: 177.28 },
  { file: "260408/After-the-Last-Set.mp3", duration: 182.08 },
  { file: "260408/Black-and-White-Photography.mp3", duration: 380.32 },
  { file: "260408/The-Umbrella-by-the-Door.mp3", duration: 178.72 },
  { file: "260408/Wednesday-Is-Underrated.mp3", duration: 154.88 },
  { file: "260408/Conversations-I-Didnt-Have.mp3", duration: 181.32 },
  { file: "260408/The-Chandelier-That-Never-Works.mp3", duration: 187.16 },
  { file: "260408/The-Playlist-Nobody-Skips.mp3", duration: 166.72 },
  { file: "260408/Sugar-on-the-Saucer.mp3", duration: 160.76 },
  { file: "260408/I-Came-Here-to-Write-and-Didnt.mp3", duration: 184.84 },
  // 260409
  { file: "260409/The-Regulars-Know.mp3", duration: 131.56 },
  { file: "260409/Four-OClock-Feeling.mp3", duration: 182.44 },
  { file: "260409/A-Little-Bit-of-Paris.mp3", duration: 177.60 },
  { file: "260409/The-Quiet-Table-for-One.mp3", duration: 214.76 },
  { file: "260409/The-Smell-of-Ground-Coffee.mp3", duration: 197.16 },
  { file: "260409/Borrowed-Afternoon.mp3", duration: 191.48 },
  { file: "260409/The-Last-Croissant.mp3", duration: 183.72 },
  { file: "260409/Something-in-the-Minor-Key.mp3", duration: 193.96 },
  { file: "260409/The-Cafe-That-Saved-My-Thursday.mp3", duration: 184.80 },
  { file: "260409/Just-Before-Closing.mp3", duration: 194.44 },
  // 260414
  { file: "260414/Before-the-City-Wakes.mp3", duration: 191.36 },
  { file: "260414/The-Jazz-That-Followed-Me-Home.mp3", duration: 188.40 },
  { file: "260414/The-Menu-Nobody-Reads.mp3", duration: 153.00 },
  { file: "260414/A-Saxophone-in-the-Stairwell.mp3", duration: 134.72 },
  { file: "260414/Honey-in-the-Espresso.mp3", duration: 147.68 },
  { file: "260414/Nobody-Knows-the-Pianists-Name.mp3", duration: 182.80 },
  { file: "260414/The-Long-Way-Home.mp3", duration: 201.80 },
  { file: "260414/Bitter-First-Sweet-After.mp3", duration: 190.00 },
  { file: "260414/The-Table-With-the-Wobbly-Leg.mp3", duration: 167.72 },
  { file: "260414/The-Last-Song-of-Summer.mp3", duration: 206.32 },
  // 260415
  { file: "260415/The-Morning-Belongs-to-No-One.mp3", duration: 174.72 },
  { file: "260415/The-Record-on-the-Shelf.mp3", duration: 189.80 },
  { file: "260415/Three-Americanos-Deep.mp3", duration: 177.40 },
  { file: "260415/The-Afternoon-the-Clock-Stopped.mp3", duration: 179.48 },
  { file: "260415/Lemon-in-the-Water.mp3", duration: 125.64 },
  { file: "260415/The-Open-Mic-Nobody-Signed-Up-For.mp3", duration: 163.60 },
  { file: "260415/The-Coldest-Seat-in-the-Warmest-Cafe.mp3", duration: 187.56 },
  { file: "260415/Something-French-About-the-Evening.mp3", duration: 170.48 },
  { file: "260415/The-First-Cold-Day-of-Autumn.mp3", duration: 187.64 },
  { file: "260415/Whatever-This-Is-Keep-It.mp3", duration: 172.96 },
  // 260416
  { file: "260416/The-Matchbox-on-the-Counter.mp3", duration: 151.84 },
  { file: "260416/The-Clock-That-Runs-on-Jazz.mp3", duration: 181.52 },
  { file: "260416/Cream-Sinks-Slow.mp3", duration: 164.56 },
  { file: "260416/The-Receipt-I-Kept.mp3", duration: 193.76 },
  { file: "260416/The-Ceiling-Fan-Knows-Everything.mp3", duration: 194.40 },
  { file: "260416/She-Reads-the-Same-Page-Twice.mp3", duration: 203.28 },
  { file: "260416/The-Bell-Above-the-Door.mp3", duration: 184.88 },
  { file: "260416/Candle-Wax-and-Coltrane.mp3", duration: 155.52 },
  { file: "260416/The-Stranger-Sat-Too-Close.mp3", duration: 173.84 },
  { file: "260416/The-Last-Song-Always-Wins.mp3", duration: 189.88 },
  // 260417 (Vol.13 Noir)
  { file: "260417/Her-Perfume-Stayed.mp3", duration: 209.84 },
  { file: "260417/A-Stranger-in-the-Corner-Booth.mp3", duration: 191.64 },
  { file: "260417/Rain-on-the-Back-Door.mp3", duration: 157.92 },
  { file: "260417/Whiskey-Without-Ice.mp3", duration: 147.68 },
  { file: "260417/The-Velvet-Rope-at-Midnight.mp3", duration: 204.12 },
  { file: "260417/Two-Olives-One-Sigh.mp3", duration: 193.00 },
  { file: "260417/The-Record-That-Wouldnt-End.mp3", duration: 181.24 },
  { file: "260417/She-Wore-a-Silver-Lighter.mp3", duration: 212.64 },
  { file: "260417/Blue-Smoke-and-Gardenia.mp3", duration: 194.48 },
  { file: "260417/Last-Call-at-Riverside.mp3", duration: 199.60 },
  // 260424 (Vol.14 Cafe Jazz Kissa)
  { file: "260424/Steam-from-a-Cup-at-Midnight.mp3", duration: 138.00 },
  { file: "260424/Last-Table-by-the-Window.mp3", duration: 149.76 },
  { file: "260424/The-Baristas-Quiet-Nod.mp3", duration: 184.32 },
  { file: "260424/A-Song-Between-Refills.mp3", duration: 167.12 },
  { file: "260424/Rain-Taps-the-Cafe-Door.mp3", duration: 157.64 },
  { file: "260424/Warm-Lamp-Empty-Chair.mp3", duration: 144.04 },
  { file: "260424/Pages-Turn-Slowly-Tonight.mp3", duration: 132.88 },
  { file: "260424/Cinnamon-in-the-Air.mp3", duration: 148.36 },
  { file: "260424/The-Old-Jukebox-Hums-On.mp3", duration: 143.24 },
  { file: "260424/One-More-Cup-Before-Closing.mp3", duration: 147.16 },
  // 260429 (Vol.15 Cafe Jazz Kissa)
  { file: "260429/The-Coffee-Knows-My-Name.mp3", duration: 181.48 },
  { file: "260429/Two-Spoons-of-Sugar-Quiet.mp3", duration: 159.40 },
  { file: "260429/Pages-Beside-the-Window.mp3", duration: 168.84 },
  { file: "260429/The-Clock-Forgot-to-Hurry.mp3", duration: 213.68 },
  { file: "260429/Smoke-Curls-Above-the-Cup.mp3", duration: 174.80 },
  { file: "260429/The-Rain-Came-in-for-Coffee.mp3", duration: 174.32 },
  { file: "260429/A-Letter-Half-Written-Through.mp3", duration: 141.12 },
  { file: "260429/Cinnamon-in-the-Air.mp3", duration: 148.20 },
  { file: "260429/The-Old-Jukebox-Hums-Low.mp3", duration: 182.32 },
  { file: "260429/The-Last-Light-Holds-the-Room.mp3", duration: 165.00 },
  // 260512 cafe-vol18
  { file: "260512/cafe-vol18/Keys-in-the-Door.mp3", duration: 181.584 },
  { file: "260512/cafe-vol18/First-Cup-Still-Hot.mp3", duration: 125.712 },
  { file: "260512/cafe-vol18/The-Regulars-Chair.mp3", duration: 153.312 },
  { file: "260512/cafe-vol18/Second-Pour.mp3", duration: 156.312 },
  { file: "260512/cafe-vol18/The-Booth-in-the-Back.mp3", duration: 145.344 },
  { file: "260512/cafe-vol18/Rain-Finds-the-Roof.mp3", duration: 157.2 },
  { file: "260512/cafe-vol18/Afternoon-Becomes-Evening.mp3", duration: 154.944 },
  { file: "260512/cafe-vol18/The-Lamp-by-the-Window.mp3", duration: 174.504 },
  { file: "260512/cafe-vol18/The-Door-Doesnt-Lock-Loud.mp3", duration: 159.624 },
  { file: "260512/cafe-vol18/Last-Light-on-the-Counter.mp3", duration: 157.032 },
  // 260512 (Soul Funk Vol.07 — final render)
  { file: "260512/You-Already-Carry-It.mp3", duration: 219.48 },
  { file: "260512/Nothing-Needs-Naming.mp3", duration: 189.72 },
  { file: "260512/You-Dont-Have-to-Reach.mp3", duration: 203.16 },
  { file: "260512/It-Found-You-First.mp3", duration: 195.84 },
  { file: "260512/No-Need-to-Hold-On.mp3", duration: 220.92 },
  { file: "260512/You-Dont-Have-to-Wait.mp3", duration: 215.784 },
  { file: "260512/You-Already-Heard-It.mp3", duration: 194.952 },
  { file: "260512/No-Need-to-Speak.mp3", duration: 192.48 },
  { file: "260512/It-Was-Always-Yours.mp3", duration: 229.872 },
  { file: "260512/You-Already-Belong.mp3", duration: 190.824 },
  // 260507 (Soul Funk Vol.07)
  { file: "260507/You-Already-Carry-It.mp3", duration: 211.64 },
  { file: "260507/Nothing-Needs-Naming.mp3", duration: 202.52 },
  { file: "260507/You-Dont-Have-to-Reach.mp3", duration: 219.32 },
  { file: "260507/It-Found-You-First.mp3", duration: 209.84 },
  { file: "260507/No-Need-to-Hold-On.mp3", duration: 207.4 },
  { file: "260507/No-Need-to-Hold.mp3", duration: 186.36 },
  { file: "260507/You-Already-Felt-It.mp3", duration: 204.56 },
  { file: "260507/It-Was-Always-in-the-Bass.mp3", duration: 192.48 },
  { file: "260507/You-Already-Found-It.mp3", duration: 223.4 },
  { file: "260507/No-Need-to-Move.mp3", duration: 219.48 },
  // 260602 (Lo-fi R&B x Jazztronica Vol.01)
  { file: "260602/01-Wasting-My-20s.mp3", duration: 132.44 },
  { file: "260602/02-Still-Water.mp3", duration: 124.92 },
  { file: "260602/03-Aint-Mine.mp3", duration: 122.48 },
  { file: "260602/04-Amber-Hour.mp3", duration: 137.48 },
  { file: "260602/05-Love-Me-On-Purpose.mp3", duration: 159.96 },
  { file: "260602/06-Low-Light.mp3", duration: 118.12 },
  { file: "260602/07-Talking-Reckless.mp3", duration: 156.32 },
  { file: "260602/08-Soft-Static.mp3", duration: 168.44 },
  { file: "260602/09-You-Lost-Me-Slow.mp3", duration: 142.80 },
  { file: "260602/10-Heavy-Peace.mp3", duration: 147.88 },
  // 260605 (Lo-fi R&B x Jazztronica Vol.02)
  { file: "260605/01-Fine-Is-Pulling-Overtime.mp3", duration: 120.32 },
  { file: "260605/02-3AM.mp3", duration: 157.24 },
  { file: "260605/03-Missing-You-In-The-Room.mp3", duration: 181.20 },
  { file: "260605/04-First-Cold-Snap.mp3", duration: 142.56 },
  { file: "260605/05-Wrote-And-Deleted.mp3", duration: 213.76 },
  { file: "260605/06-Vacancy.mp3", duration: 183.76 },
  { file: "260605/07-You-Got-Up-First.mp3", duration: 292.04 },
  { file: "260605/08-Cloudy-No-Rain.mp3", duration: 184.32 },
  { file: "260605/09-Now-I-See-The-Start.mp3", duration: 239.84 },
  { file: "260605/10-Everything-Fades-Slowly.mp3", duration: 158.24 },
  // 260608 (Jazztronica DJ Okawari/FreeTEMPO/DAISHI DANCE)
  { file: "260608/01-Paper-Boats.mp3", duration: 164.72 },
  { file: "260608/02-Letter-In-Blue.mp3", duration: 154.48 },
  { file: "260608/03-Morning-Tide.mp3", duration: 229.04 },
  { file: "260608/04-Sun-Drift.mp3", duration: 193.32 },
  { file: "260608/05-First-Light-Rising.mp3", duration: 184.40 },
  { file: "260608/06-Skyline-Bloom.mp3", duration: 179.80 },
  { file: "260608/07-Golden-Descent.mp3", duration: 169.68 },
  { file: "260608/08-Evening-Haze.mp3", duration: 219.60 },
  { file: "260608/09-Quiet-Compass.mp3", duration: 174.00 },
  { file: "260608/10-Last-Page.mp3", duration: 479.40 },
  // jazztronica-vol01
  { file: "jazztronica-vol01/01-Morning-Feather.mp3", duration: 479.40 },
  { file: "jazztronica-vol01/02-Asahi.mp3", duration: 165.76 },
  { file: "jazztronica-vol01/03-Tide-Turning.mp3", duration: 142.36 },
  { file: "jazztronica-vol01/04-Drift-Along.mp3", duration: 139.52 },
  { file: "jazztronica-vol01/05-Golden-Avenue.mp3", duration: 188.40 },
  { file: "jazztronica-vol01/06-Joyful-Skyline.mp3", duration: 218.48 },
  { file: "jazztronica-vol01/07-Dusk-Couleur.mp3", duration: 199.12 },
  { file: "jazztronica-vol01/08-Sweet-Sunset-Revue.mp3", duration: 134.68 },
  { file: "jazztronica-vol01/09-Counting-Streetlights.mp3", duration: 133.96 },
  { file: "jazztronica-vol01/10-Last-Feather.mp3", duration: 136.28 },
];

const toId = (filename: string) =>
  filename.replace(/\.mp3$/, "").replace(/\//g, "-");

// ============================================================
// Full playlist preview - 1 song test (Honey in the Espresso)
// ============================================================
const TEST_TRACK = {
  file: "260414/Honey-in-the-Espresso.mp3",
  title: "Honey in the Espresso",
  durationSec: 147.68,
};

export const RemotionRoot: React.FC = () => {
  const testBg = "260414/bg/video-1776133215010.mp4";
  const commonProps = {
    backgroundFile: testBg,
    tracks: [TEST_TRACK],
    crossfadeSec: 3,
  };
  const commonComp = {
    component: FullPlaylist,
    width: 1920,
    height: 1080,
    fps: FPS,
    durationInFrames: Math.ceil(TEST_TRACK.durationSec * FPS),
  };

  return (
    <>
      {/* Main preview - Line waveform with bottom-center text */}
      <Composition
        id="Preview-Line"
        {...commonComp}
        defaultProps={{
          ...commonProps,
          waveformStyle: "line" as const,
        }}
      />
      <Composition
        id="Preview-Dots"
        {...commonComp}
        defaultProps={{
          ...commonProps,
          waveformStyle: "dots" as const,
        }}
      />
      <Composition
        id="Preview-VU"
        {...commonComp}
        defaultProps={{
          ...commonProps,
          waveformStyle: "vu" as const,
        }}
      />
      <Composition
        id="Preview-None"
        {...commonComp}
        defaultProps={{
          ...commonProps,
          waveformStyle: "none" as const,
        }}
      />
      <Composition
        id="Preview-Fine"
        {...commonComp}
        defaultProps={{
          ...commonProps,
          waveformStyle: "fine" as const,
        }}
      />

      {/* Individual track compositions with title + track index */}
      {(() => {
        // Group by folder prefix (e.g. "260415/")
        const groups: Record<string, typeof tracks> = {};
        tracks.forEach((t) => {
          const prefix = t.file.includes("/") ? t.file.split("/")[0] : "";
          if (!groups[prefix]) groups[prefix] = [];
          groups[prefix].push(t);
        });

        return Object.values(groups).flatMap((group) =>
          group.map((track, idx) => {
            const title = track.file
              .split("/")
              .pop()!
              .replace(/\.mp3$/, "")
              .replace(/-/g, " ");
            return (
              <Composition
                key={track.file}
                id={toId(track.file)}
                component={Playlist}
                defaultProps={{
                  audioFile: track.file,
                  title,
                  trackIndex: idx + 1,
                  totalTracks: group.length,
                }}
                width={1280}
                height={720}
                fps={FPS}
                durationInFrames={Math.ceil(track.duration * FPS)}
                backgroundColor={null}
              />
            );
          })
        );
      })()}
    </>
  );
};
