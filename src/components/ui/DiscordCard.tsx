import { m as motion } from 'framer-motion';

const DISCORD_ID = '297980597824126976';
const DISCORD_PROFILE_URL = `https://discord.com/users/${DISCORD_ID}`;
const BANNER_URL =
  'https://cdn.discordapp.com/banners/297980597824126976/a_1ff16be57e046e71c4c2ff822ce25262.gif?size=4096';
const AVATAR_URL =
  'https://cdn.discordapp.com/avatars/297980597824126976/a_b5e849f0514eff9c46472ba48d56f760.gif?size=4096';
const DECORATION_URL =
  'https://cdn.discordapp.com/avatar-decoration-presets/a_75348082d14b5097708444fca20a09e0.png?size=4096';
const NAMEPLATE_VIDEO =
  'https://cdn.discordapp.com/assets/collectibles/nameplates/nameplates/twilight/asset.webm';
const NAMEPLATE_POSTER =
  'https://cdn.discordapp.com/assets/collectibles/nameplates/nameplates/twilight/static.png';

export default function DiscordCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-white/5 bg-[#0e1322] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]"
    >
      <a
        href={BANNER_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open banner"
        className="group relative block h-52 cursor-pointer overflow-hidden bg-[#000059] md:h-60"
        style={{
          backgroundImage: `url('${BANNER_URL}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1322] via-[#0e1322]/20 to-transparent" />
      </a>

      <div className="relative px-6 pb-6 pt-4 md:px-8 md:pb-8">
        <a
          href={AVATAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open avatar"
          className="group absolute -top-16 left-6 inline-flex h-[125px] w-[125px] items-center justify-center transition-transform duration-200 hover:scale-105 md:left-8"
        >
          <div className="relative z-[2] rounded-full bg-[#0e1322] p-1 shadow-[0_8px_30px_rgba(0,0,0,0.55)]">
            <img
              src={AVATAR_URL}
              alt="artum669 avatar"
              width={110}
              height={110}
              loading="lazy"
              decoding="async"
              className="block h-[110px] w-[110px] rounded-full object-cover"
            />
          </div>
          <img
            src={DECORATION_URL}
            alt=""
            aria-hidden
            width={125}
            height={125}
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute inset-0 z-[3] h-[125px] w-[125px]"
          />
        </a>

        <div className="flex justify-end">
          <div
            title="House Balance Member"
            className="flex h-9 w-9 items-center justify-center rounded-md bg-[#1c2238]/80 shadow-sm ring-1 ring-white/5"
          >
            <img
              src="/assets/img/nysscexbadge/hypesquadbalance.svg"
              width={22}
              height={22}
              alt="HYPESQUAD_ONLINE_HOUSE_3"
              title="House Balance Member"
            />
          </div>
        </div>

        <div className="mt-3">
          <a
            href={DISCORD_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Add me on Discord"
            className="group inline-block"
          >
            <h3 className="text-3xl font-black tracking-tight text-[#1f8fd6] underline-offset-4 transition group-hover:text-[#3aa6e8] group-hover:underline md:text-4xl">
              artum669
            </h3>
          </a>
          <div className="mt-0.5 text-sm font-semibold text-[#8b95a8]">@artum669</div>
        </div>

        <div className="mt-5 rounded-2xl bg-[#3a3f5a]/55 p-5 shadow-inner ring-1 ring-white/5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <h6 className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a4adc4]/80">
                User ID
              </h6>
              <span className="inline-flex select-all rounded-md bg-[#1c2238] px-2.5 py-1.5 font-mono text-xs font-semibold text-white shadow-sm ring-1 ring-black/30">
                {DISCORD_ID}
              </span>
            </div>
            <div>
              <h6 className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a4adc4]/80">
                Joined At
              </h6>
              <p className="text-sm font-semibold text-white">Sunday, April 2, 2017</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h6 className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a4adc4]/80">
            Active Nameplate
          </h6>

          <div
            className="relative flex h-[70px] w-full items-center overflow-hidden rounded-2xl px-4 shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
            style={{ background: '#11111480' }}
          >
            <video
              src={NAMEPLATE_VIDEO}
              poster={NAMEPLATE_POSTER}
              autoPlay
              loop
              muted
              playsInline
              aria-hidden
              className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
            />
            <div className="relative z-[1] flex w-full items-center gap-3.5">
              <div className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center">
                <img
                  src={AVATAR_URL}
                  alt=""
                  aria-hidden
                  width={44}
                  height={44}
                  loading="lazy"
                  decoding="async"
                  className="h-11 w-11 rounded-full border-2 border-white/40 shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
                />
                <img
                  src={DECORATION_URL}
                  alt=""
                  aria-hidden
                  width={56}
                  height={56}
                  loading="lazy"
                  decoding="async"
                  className="pointer-events-none absolute inset-0 h-14 w-14"
                />
              </div>
              <span
                className="flex-1 truncate text-lg font-black text-white"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.85)' }}
              >
                artum669
              </span>
            </div>
          </div>

          {/* <p className="ms-0.5 mt-2 text-[11px] font-medium text-[#8b95a8]">
            Nameplates Twilight A11y
          </p> */}
        </div>
      </div>
    </motion.div>
  );
}
