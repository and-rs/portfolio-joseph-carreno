import InfoGrid from "@/components/info-grid";

export default function Home() {
  return (
    <div className="flex w-full">
      <div className="flex w-full flex-col gap-8 self-center">
        <div className="background flex flex-col justify-center border-y-2 p-4">
          <span className="max-w-[800px] text-7xl font-medium tracking-tighter">
            Good art is a talent good design is a skill.
          </span>

          <div className="max-w-[800px] text-9xl font-medium tracking-tighter text-secondary">
            Design is a skill.
          </div>
        </div>
        <InfoGrid />
      </div>
    </div>
  );
}
