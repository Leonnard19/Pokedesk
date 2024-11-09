import Image from 'next/image';
import { TypePokemon } from '../../types';
import { useSelectedPokemons } from '../../context/useSelectedPokemons';
import { TopPokeballSVG } from './TopPokeballSVG';
import { BottomPokeballSVG } from './BottomPokeballSVG';
import { pokemonColorsRelation } from '../../utils';

interface PokeballProps {
  pokemon: TypePokemon;
  onSelectPokemon?: () => void;
  customStyle?: string;
}

export const Pokeball = ({ pokemon, onSelectPokemon }: PokeballProps) => {
  const highlightedPokemons = useSelectedPokemons(state => state.highlightedPokemons);

  return (
    <div
      className="flex items-center justify-center cursor-pointer"
      onClick={() => onSelectPokemon && onSelectPokemon()}
    >
      <div className="space-y-1 w-[70px] h-auto">
        <TopPokeballSVG fill={pokemonColorsRelation[pokemon.element1]} />
        <BottomPokeballSVG fill={pokemonColorsRelation[pokemon.element2 || 'none']} />
      </div>

      {pokemon ? (
        <div className="absolute">
          <Image
            src={pokemon.image}
            alt="img"
            width={0}
            height={0}
            className={`w-[70px] h-auto ${
              highlightedPokemons.includes(pokemon.id) ? 'filter grayscale brightness-50' : ''
            }`}
            unoptimized
            draggable={false}
          />
        </div>
      ) : null}
    </div>
  );
};
