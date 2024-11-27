import Link from 'next/link';

interface Props {
  text: string;
}

export function Header({ text }: Props) {
  return (
    <div className="flex flex-col h-36 items-center justify-between bg-indigo-400 border-b border-indigo-900">
      <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-cyan-900 text-3xl text-center mt-4">
        Pokémon Team Builder
      </span>
      {/* 
      <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-600">
          Hello, I'm{' '}
        </span>
        <br />
      </h1> */}

      <div className="bar h-[2px] w-[90%] bg-slate-900" />
      <Link className="cursor-pointer" passHref href={text === 'Teams' ? '/teams' : '/'}>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-cyan-900 py-1 px-4 mb-2 rounded-md hover:to-red-900 border-b border-indigo-900 hover:border-indigo-700 text-slate-700 font-extrabold text-xl">
          {text}
        </h1>
      </Link>
    </div>
  );
}
