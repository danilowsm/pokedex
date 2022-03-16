const btnBusca = document.querySelector('#btn-busca')

btnBusca.onclick = () => {
    const pokemonName = document.querySelector('#pokemon-name').value


    if (!pokemonName) {
        alert('O nome ou número do Pokémon ou é obrigatório')
    }

    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    )


        .then(response => {

            const dados = response.data

            let cardPokemon = document.querySelector('#main-container')
            let avatar = document.querySelector('#avatar')
            let nomeTipo = document.querySelector('#nome-tipo')
            let altura = document.querySelector('#altura')
            let peso = document.querySelector('#peso')
            let numeroId = document.querySelector('#numero-id')
            let linkPerfil = document.querySelector('#link-perfil')


            cardPokemon.style.display = 'block'
            avatar.src = dados.sprites.other["official-artwork"].front_default
            nomeTipo.innerText = `${dados.name} Pokémon Type ${dados.types[0].type.name}`
            altura.innerText = `Height: ${dados.height} m`
            peso.innerText = `Weight: ${dados.weight / 10} kg`
            numeroId.innerText = `nº${dados.id}`
            linkPerfil.href = `https://api.pokemon.com/br/pokedex/${pokemonName}`
            console.log(dados)
})



    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`
    )
        //https://pokeapi.co/api/v2/pokemon-species/   link descrição pokemon

        .then(response => {

            const dados = response.data

            let bio = document.querySelector('#bio')

            bio.innerText = dados.flavor_text_entries[Math.floor(Math.random() * 22)].flavor_text
            console.log(dados)
})




}




