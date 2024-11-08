import Image from 'next/image';
import { useSelectedPokemons } from '../../context/SelectedPokemonsContext';

type TypePokemon = {
  image: string;
  id: number;
  name: string;
};

export function Pokeball({ pokemon }: { pokemon?: TypePokemon }) {
  const { isEditing, setIsEditing } = useSelectedPokemons();
  let url;

  try {
    url = window.location.href;
  } catch (error) {
    url = '';
  }

  function editPokemon() {
    if (window.location.href.includes('teams')) {
      return;
    }
    isEditing ? setIsEditing(undefined) : setIsEditing(pokemon?.id);
  }

  return (
    <div
      className="flex items-center justify-center"
      onClick={editPokemon}
      style={
        !url.includes('teams') && isEditing && isEditing !== pokemon?.id
          ? {
              filter: 'brightness(80%) grayscale(70%)',
            }
          : {}
      }
    >
      <Image
        src="/assets/Pokeball1.svg"
        alt="img"
        width={0}
        height={0}
        className="w-[70px] h-auto"
      />
      {pokemon && (
        <div
          className="absolute"
          style={
            !url.includes('teams') && isEditing && isEditing === pokemon?.id
              ? {
                  filter: `drop-shadow(2px 4px 6px)`,
                }
              : {}
          }
        >
          <Image
            src={pokemon.image}
            alt="img"
            width={0}
            height={0}
            className="w-[70px] h-auto"
            unoptimized
          />
        </div>
      )}
    </div>
  );
}
