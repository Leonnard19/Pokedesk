import Link from 'next/link';

interface Props {
  text: string;
}

export function Header({ text }: Props) {
  return (
    <div className="flex flex-col h-36 items-center justify-between bg-indigo-400 border-b border-indigo-900">
      <span className="font-extrabold text-slate-800 text-3xl text-center mt-4">
        Pokémon Team Builder
      </span>
      <div className="bar h-[2px] w-[90%] bg-slate-900" />
      <Link className="cursor-pointer" passHref href={text === 'TEAMS' ? '/teams' : '/'}>
        <h1 className="py-1 px-4 mb-2 rounded-md hover:text-slate-600 border border-indigo-900 hover:border-indigo-700 text-slate-700 font-extrabold text-xl">
          {text}
        </h1>
      </Link>
    </div>
  );
}
