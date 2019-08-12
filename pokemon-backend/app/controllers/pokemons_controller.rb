class PokemonsController < ApplicationController

    def index
        pokemons = Pokemon.all
        
        render json: pokemons.to_json(pokemon_options)
    end

    def show
        pokemon = Pokemon.find(params[:id])
        render json: pokemon.to_json(pokemon_options)
    end

    def create
    end

    def delete
    end

    private

    def pokemon_params
        params.require(:pokemon).permit(:nickname, :species, :trainer)
    end

    def pokemon_options
        {:include =>  {
            :trainer => {:only => [:name]}
        },
        :except => [:updated_at, :created_at, :trainer_id]}
    end

end
