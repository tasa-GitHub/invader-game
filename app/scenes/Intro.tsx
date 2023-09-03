export default function Intro({ onClickStart }: { onClickStart: () => void }) {
  return (
    <div className="text-center">
      <h1 className="text-2xl from-neutral-950">Invader Game</h1>
      <button className="border border-black" onClick={onClickStart}>
        START
      </button>
    </div>
  );
}
