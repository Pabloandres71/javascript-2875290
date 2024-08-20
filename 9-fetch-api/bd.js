
let videoJuegos = [
    {
        id: 1,
        nombre: 'The Legend of Zelda: Breath of the Wild',
        año: 2017,
        genero: 'Aventura',
        consolas: 'play',
        creador: 'Nintendo',
        edad_recomendada: 'E 10+', // Todos los públicos mayores de 10 años
        image: 'https://upload.wikimedia.org/wikipedia/vi/thumb/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg/220px-The_Legend_of_Zelda_Breath_of_the_Wild.jpg'
    }, 
    {
        id: 2,
        nombre: 'The Witcher 3: Wild Hunt',
        año: 2015,
        genero: 'RPG',
        creador: 'CD Projekt Red',
        edad_recomendada: 'M',  // Madura, recomendado para mayores de 17 años
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9zuzamQqBNjNDMEd6-BB65U4s7QEKz_FRSA&s'
    },
    {
        id: 3,
        nombre: 'Minecraft',
        año: 2011,
        genero: 'Sandbox',
        creador: 'Mojang Studios',
        edad_recomendada: 'E 10+',  // Todos los públicos mayores de 10 años
        image: 'https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/AK248E/cdb841c8fc5d46f08c0a8824d6e9e5d8.jpg/f/minecraft.jpg'
    },
    {
        id: 4,
        nombre: 'Red Dead Redemption 2',
        año: 2018,
        genero: 'Acción/Aventura',
        creador: 'Rockstar Games',
        edad_recomendada: 'M',  // Madura, recomendado para mayores de 17 años
        image: 'https://m.media-amazon.com/images/I/71R2612fgmL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        id: 5,
        nombre: 'Overwatch',
        año: 2016,
        genero: 'Shooter en primera persona',
        creador: 'Blizzard Entertainment',
        edad_recomendada: 'T',  // Adolescente, recomendado para mayores de 13 años
        image: 'https://m.media-amazon.com/images/I/714wARifwaL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        id: 6,
        nombre: 'Dark Souls III',
        año: 2016,
        genero: 'RPG de acción',
        creador: 'FromSoftware',
        edad_recomendada: 'M',  // Madura, recomendado para mayores de 17 años
        image: 'https://m.media-amazon.com/images/I/714wARifwaL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        id: 7,
        nombre: 'Grand Theft Auto V',
        año: 2013,
        genero: 'Acción/Aventura',
        creador: 'Rockstar Games',
        edad_recomendada: 'M',  // Madura, recomendado para mayores de 17 años
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfdZII4BK_IXkizji07uoDjjsZLT643nNVgQt7y-YvlTZxStt9Rc0QkW9afsksV2IW-o&usqp=CAU'
    },
    {
        id: 8,
        nombre: 'Hades',
        año: 2020,
        genero: 'Rogue-like/RPG',
        creador: 'Supergiant Games',
        edad_recomendada: 'M',  // Madura, recomendado para mayores de 17 años
        image: 'https://static.wikia.nocookie.net/hades/images/a/a0/Hades_Pack_Art.png/revision/latest?cb=20210328173729&path-prefix=es'
    },
    {
        id: 9,
        nombre: 'Animal Crossing: New Horizons',
        año: 2020,
        genero: 'Simulación social',
        creador: 'Nintendo',
        edad_recomendada: 'E',  // Todos los públicos
        image: 'https://static-it.gamestop.it/images/products/294147/3max.jpg'
    },
    {
        id: 10,
        nombre: 'Celeste',
        año: 2018,
        genero: 'Plataformas',
        creador: 'Maddy Makes Games',
        edad_recomendada: "T",  // Adolescente, recomendado para mayores de 13 años
        image: 'https://atomix.vg/review-celeste/celeste-review/'
    },
    {
        id: 11,
        nombre: 'Sekiro: Shadows Die Twice',
        año: 2019,
        genero: 'Acción/Aventura',
        creador: 'FromSoftware',
        edad_recomendada: 'M',  // Madura, recomendado para mayores de 17 años
        image: 'https://gamestorecolombia.com/files/images/productos/1658273730-sekiro-shadows-die-twice-edicion-juego-del-ano-xbox-one-0.jpg'
    },
    {
        id: 12,
        nombre: 'Fall Guys: Ultimate Knockout',
        año: 2020,
        genero: 'Battle Royale',
        creador: 'Mediatonic',
        edad_recomendada: 'E 10+',  // Todos los públicos mayores de 10 años
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiU-AI5So8ESjX5yJ1BEYBMRcofhnaZOihGVf8fYdLwgPGW9r5iA2TG2KLKBH85CzAnbRXGoWo_YZ5W-OkCZNxBSaRoWNtc6mmLS6CZZCAEpqWxw8Asf4IU5qCFpeIQqa81GkdUjka59uFFdxMJJ3mqpILvsDHQOvczevZlfcHKLJhwPJRiSEK63PO7/s16000/juego-fall-guys-ultimate-knockout.jpg'
    },
    {
        id: 13,
        nombre: 'Death Stranding',
        año: 2019,
        genero: 'Acción/Aventura',
        creador: 'Kojima Productions',
        edad_recomendada: 'M',  // Madura, recomendado para mayores de 17 años
        image: 'https://i.blogs.es/23a327/death-stranding/840_560.jpeg'
    },
    {
        id: 14,
        nombre: 'Doom Eternal',
        año: 2020,
        genero: 'Shooter en primera persona',
        creador: 'id Software',
        edad_recomendada: 'M',  // Madura, recomendado para mayores de 17 años
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsjV0lkTN9tLXh1O6V-6AjDMigyfrTauUPmNGag1zdLDPZA-YgsOmdE0IAtLTv3AvrRM4&usqp=CAU'
    },
    {
        id: 15,
        nombre: 'Persona 5 Royal',
        año: 2019,
        genero: 'RPG',
        creador: 'Atlus',
        edad_recomendada: 'M',  // Madura, recomendado para mayores de 17 años
        image: 'https://cdn.mobygames.com/covers/8842019-persona-5-royal-playstation-4-front-cover.jpg'
    },
    {
        id: 16,
        nombre: 'Control',
        año: 2019,
        genero: 'Acción/Aventura',
        creador: 'Remedy Entertainment',
        edad_recomendada: 'M',  // Madura, recomendado para mayores de 17 años
        image: 'https://static.wikia.nocookie.net/videojuego/images/c/cb/Control_portada.jpg/revision/latest?cb=20231209020253'
    },
    {
        id: 17,
        nombre: 'The Elder Scrolls V: Skyrim',
        año: 2011,
        genero: 'RPG',
        creador: 'Bethesda Game Studios',
        edad_recomendada: 'M',  // Madura, recomendado para mayores de 17 años
        image: 'https://cdn.cdkeys.com/500x706/media/catalog/product/v/s/vsdada.jpg'
    },
    {
        id: 18,
        nombre: 'Mass Effect 2',
        año: 2010,
        genero: 'RPG',
        creador: 'BioWare',
        edad_recomendada: 'M',  // Madura, recomendado para mayores de 17 años
        image: 'https://www.gamingdragons.com/images/game_img/me2n.jpg'
    },
    {
        id: 19,
        nombre: 'Rocket League',
        año: 2015,
        genero: 'Deportes / Acción',
        creador: 'Psyonix',
        edad_recomendada: 'E',  // Todos los públicos
        image: 'https://static.wikia.nocookie.net/playstation5617/images/3/37/RL.png/revision/latest?cb=20220103224603&path-prefix=es'
    },
    {
        id: 20,
        nombre: 'Hollow Knight',
        año: 2017,
        genero: 'Metroidvania',
        creador: 'Team Cherry',
        edad_recomendada: 'T',  // Adolescente, recomendado para mayores de 13 años
        image: 'https://pics.filmaffinity.com/Hollow_Knight-986585901-large.jpg'
    },
    {
        id: 21,
        nombr: 'Among Us',
        añ: 2018,
        gener: 'Party/Multijugador',
        creado: 'InnerSloth',
        edad_recomendad: 'E 10+',  // Todos los públicos mayores de 10 años
        image: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/software/switch/70010000036098/desc/fba63c09f4dd41c841f23474840c8f5fe4d5378aae37a94ff39adfffa7ef0c11'
    },
    {
        id: 22,
        nombre: 'Final Fantasy VII Remake',
        año: 2020,
        genero: 'RPG',
        creador: 'Square Enix',
        edad_recomendada: 'T',  // Adolescente, recomendado para mayores de 13 años
        image: 'https://xsgamer.co/cdn/shop/products/Final-fantasy-7-remake-1_500x.jpg?v=1656150994'
    },
    {
        id: 23,
        nombre: 'Genshin Impact',
        año: 2020,
        genero: 'RPG de acción',
        creador: 'miHoYo',
        edad_recomendada: 'T',  // Adolescente, recomendado para mayores de 13 años
        image: 'https://cdn-bgp.bluestacks.com/BGP/latam/gametiles_com.miHoYo.GenshinImpact.jpg'
    },
    {
        id: 24,
        nombre: 'The Last of Us Part II',
        año: 2020,
        genero: 'Acción/Aventura',
        creador: 'Naughty Dog',
        edad_recomendada: 'M',  // Madura, recomendado para mayores de 17 años
        image: 'https://media.vandal.net/m/44223/the-last-of-us-part-ii-20199271734386_1.jpg'
    },
    {
        id: 25,
        nombre: 'Monster Hunter: World',
        año: 2018,
        genero: 'Acción/RPG',
        creador: 'Capcom',
        edad_recomendada: 'T',  // Adolescente, recomendado para mayores de 13 años
        image: 'https://media.vandal.net/m/49146/monster-hunter-world-2018128121611_1.jpg'
    },
    {
        id: 26,
        nombre: 'Assassins Creed Valhalla',
        año: 2020,
        genero: 'Acción/Aventura',
        creador: 'Ubisoft',
        edad_recomendada: 'M',  // Madura, recomendado para mayores de 17 años
        image: 'https://http2.mlstatic.com/D_NQ_NP_956627-MLA46477993263_062021-O.webp'
    },
    {
        id: 27,
        nombre: 'Dying Light',
        año: 2015,
        genero: 'Acción/Aventura/Zombis',
        creador: 'Techland',
        edad_recomendada: 'M',  // Madura, recomendado para mayores de 17 años
        image: 'https://http2.mlstatic.com/D_NQ_NP_829412-MLA45732886194_042021-O.webp'
    },
    {
        id: 28,
        nombre: 'Far Cry 5',
        año: 2018,
        genero: 'Acción/Aventura',
        creador: 'bisoft',
        edad_recomendada: 'M',  // Madura, recomendado para mayores de 17 años
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHpnPvt_fZ-JfS3UExjqVNr0DXsdVM73Ya3g&s'
    },
    {
        id: 29,
        nombre: 'Spider-Man',
        año: 2018,
        genero: 'Acción/Aventura',
        creador: 'Insomniac Games',
        edad_recomendada: 'T',  // Adolescente, recomendado para mayores de 13 años
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjMvd_MWtAf-ymwJZNkJ_wb3IfT1jND13FGnLCByJELBUD6-cwKwElfQptn-Mx_DcCaFU&usqp=CAU'
    },
    {
        id: 30,
        nombre: 'Nier: Automata',
        año: 2017,
        genero: 'RPG de acción',
        creador: 'PlatinumGames',
        edad_recomendada: 'M',  // Madura, recomendado para mayores de 17 años
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_jZUTxrcd3onOSf3G4HrUa433E6b-ZBpV-orSQr2ai_CArjydgt62EXE4n-dulgJQLw&usqp=CAU'
    }
]


