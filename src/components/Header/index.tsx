import Link from 'next/link';

interface Props {
  text: string;
}

export function Header({ text }: Props) {
  return (
    <div className="flex flex-col h-32 items-center justify-end bg-indigo-400">
      <span className="mb-6 font-extrabold text-slate-800 text-3xl">Pokémon Team Builder</span>
      <div className="h-[2px] w-[90%] bg-slate-900" />
      <Link
        className="cursor-pointer text-slate-700 font-extrabold text-xl"
        passHref
        href={text === 'TEAMS' ? '/teams' : '/'}
      >
        <h1 className="py-2">{text}</h1>
      </Link>
    </div>
  );
}
