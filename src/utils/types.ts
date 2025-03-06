export interface PokemonType {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

export interface PokemonAbility {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
}

export interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}

export interface Pokemon {
    name: string;
    image: string;
    url: string; // Ensure this is present
    sprites: {
        other: {
            'official-artwork': {
                front_default: string;
            };
        };
    };
    types: PokemonType[];
    abilities: PokemonAbility[];
    stats: PokemonStat[];
}

export const typeGradients: Record<string, string> = {
    grass: 'from-green-200 to-green-800',
    poison: 'from-purple-200 to-purple-800',
    fire: 'from-orange-300 to-red-700',
    flying: 'from-blue-300 to-blue-800',
    water: 'from-blue-300 to-blue-900',
    electric: 'from-yellow-300 to-yellow-700',
    bug: 'from-lime-300 to-green-700',
    normal: 'from-gray-300 to-gray-700',
    ground: 'from-yellow-300 to-yellow-900',
    rock: 'from-gray-600 to-gray-900',
    psychic: 'from-pink-500 to-pink-800',
    ice: 'from-teal-400 to-teal-700',
    dragon: 'from-indigo-400 to-indigo-900',
    dark: 'from-gray-700 to-black',
    steel: 'from-gray-500 to-gray-800',
    fairy: 'from-pink-300 to-pink-700',
};
