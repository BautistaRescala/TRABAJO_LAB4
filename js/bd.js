const sillas = [
    {
        "id": 1,
        "name": "Madera baja",
        "image": "https://i.postimg.cc/J72Tcjjc/comedor-madera-baja.png",
        "type": "Comedor",
        "info": "Silla de madera baja con felpa."
    },
    {
        "id": 2,
        "name": "Silla Comoda",
        "image": "https://i.postimg.cc/9QGJhSKJ/comedor-madera-comoda.png",
        "type": "Comedor",
        "info": "Silla de madera cómoda."
    },
    {
        "id": 3,
        "name": "Común",
        "image": "https://i.postimg.cc/8c2m8Bb2/comedor-madera-comun.png",
        "type": "Comedor",
        "info": "Silla común de madera."
    },
    {
        "id": 4,
        "name": "Silla-Elegante",
        "image": "https://i.postimg.cc/wBgFT2dH/comedor-madera-elegante.png",
        "type": "Comedor",
        "info": "Silla de madera elegante."
    },
    {
        "id": 5,
        "name": "Madera y Felpa",
        "image": "https://i.postimg.cc/4dF1PTHN/comedor-madera-felpa.png",
        "type": "Comedor",
        "info": "Silla de madera con un acolchado."
    },
    {
        "id": 6,
        "name": "Silla moderna de madera",
        "image": "https://i.postimg.cc/CK77Z8F8/comedor-madera-moderna.png",
        "type": "Comedor",
        "info": "Silla de madera moderna."
    },
    {
        "id": 7,
        "name": "Silla de madera pequeña",
        "image": "https://i.postimg.cc/YCcbTknv/comedor-madera-peque-a.png",
        "type": "Comedor",
        "info": "Silla de madera pequeña."
    },
    {
        "id": 8,
        "name": "Silla de madera rústica.",
        "image": "https://i.postimg.cc/j2w4kky6/comedor-madera-rustica.png",
        "type": "Comedor",
        "info": "Silla de madera de estilo rústico."
    },
    {
        "id": 9,
        "name": "Silla Sims",
        "image": "https://i.postimg.cc/85CHLC50/comedor-madera-sims.png",
        "type": "Comedor",
        "info": "Silla típica de los Sims."
    },
    {
        "id": 10,
        "name": "Silla de madera y tela",
        "image": "https://i.postimg.cc/c1vqSxmh/comedor-madera-tela.png",
        "type": "Comedor",
        "info": "Silla de madera refinada y acolchado de tela."
    },


    {
        "id": 11,
        "name": "Silleta de aluminio",
        "image": "https://i.postimg.cc/y6ZfjkjM/jardin-aluminio.png",
        "type": "Jardin",
        "info": "Silleta de aluminio común."
    },
    {
        "id": 12,
        "name": "Chaise metalizado.",
        "image": "https://i.postimg.cc/x10t9gQQ/jardin-chaise1.png",
        "type": "Jardin",
        "info": "Chaise de jardín metalizado."
    },
    {
        "id": 13,
        "name": "Silla columpio de metal",
        "image": "https://i.postimg.cc/65xMmt1y/jardin-colgante-corto.png",
        "type": "Jardin",
        "info": "Silla colgante de metal, tipo columpio."
    },
    {
        "id": 14,
        "name": "Silla sofa columpio de metal",
        "image": "https://i.postimg.cc/sgwKxSfh/jardin-colgante-hierro.png",
        "type": "Jardin",
        "info": "Silla sofa tipo columpio de metal."
    },
    {
        "id": 15,
        "name": "Silla columpio de mimbre",
        "image": "https://i.postimg.cc/q7qw3RgZ/jardin-colgante-mimbre.png",
        "type": "Jardin",
        "info": "Silla tipo columpio de mimbre."
    },
    {
        "id": 16,
        "name": "Banco silla de madera y metal.",
        "image": "https://i.postimg.cc/DyQxVHt5/jardin-largo.png",
        "type": "Jardin",
        "info": "Banco silla de madera y metal para exterior."
    },
    {
        "id": 17,
        "name": "Chaise de madera tipo playa",
        "image": "https://i.postimg.cc/xCbP64vv/jardin-madera-chaise.png",
        "type": "Jardin",
        "info": "Chaise de madera tipo playa para exterior."
    },
    {
        "id": 18,
        "name": "Sofa de mimbre",
        "image": "https://i.postimg.cc/brx9hSFd/jardin-sofa-mimbre.png",
        "type": "Jardin",
        "info": "Sofa de mimbre para exteriores."
    },
    {
        "id": 19,
        "name": "Sillón de madera",
        "image": "https://i.postimg.cc/7LRVMk2P/jardin-madera.png",
        "type": "Jardin",
        "info": "Sillón de madera para jardín."
    },
    {
        "id": 20,
        "name": "Silla de plástico estilo floreado.",
        "image": "https://i.postimg.cc/fynfpfC6/jardin-plastico.png",
        "type": "Jardin",
        "info": "Silla de plástico común con estilo floreado."
    },


    {
        "id": 21,
        "name": "Silla de oficina Basic",
        "image": "https://i.postimg.cc/28Bf4kLy/oficina-comun-basic.png",
        "type": "Oficina",
        "info": "Silla de oficina común básica."
    },
    {
        "id": 22,
        "name": "Silla de oficina Lowcost",
        "image": "https://i.postimg.cc/1tYLq29D/oficina-comun-lowcost.png",
        "type": "Oficina",
        "info": "Silla de oficina lowcost."
    },
    {
        "id": 23,
        "name": "Silla de oficina Medium",
        "image": "https://i.postimg.cc/HncF4zxR/oficina-comun-medium.png",
        "type": "Oficina",
        "info": "Silla de oficina común Medium."
    },
    {
        "id": 24,
        "name": "Silla de oficina Pro",
        "image": "https://i.postimg.cc/cJdyyf9t/oficina-comun-pro.png",
        "type": "Oficina",
        "info": "Silla de oficina Común Pro."
    },
    {
        "id": 25,
        "name": "Silla de oficina Ejec. Basic",
        "image": "https://i.postimg.cc/668QmNGJ/oficina-ejecutive-basic.png",
        "type": "Oficina",
        "info": "Silla de oficina Ejecutive Basic."
    },
    {
        "id": 26,
        "name": "Silla de oficina Ejec. Medium",
        "image": "https://i.postimg.cc/8c29yvf5/oficina-ejecutive-medium.png",
        "type": "Oficina",
        "info": "Silla de oficina Ejecutive Medium."
    },
    {
        "id": 27,
        "name": "Silla de oficina Ejec. Pro",
        "image": "https://i.postimg.cc/K8PSH0Ny/oficina-ejecutive-pro.png",
        "type": "Oficina",
        "info": "Silla de oficina Ejecutive Pro."
    },
    {
        "id": 28,
        "name": "Silla de oficina Ejec. Luxury",
        "image": "https://i.postimg.cc/fLbGkDhw/oficina-ejecutive-luxury.png",
        "type": "Oficina",
        "info": "Silla de oficina Ejecutive Luxury."
    },
    {
        "id": 29,
        "name": "Silla Gamer DX Racer",
        "image": "https://i.postimg.cc/Dz5V2mHj/oficina-gamer-dxblue.png",
        "type": "Oficina",
        "info": "Silla Gamer!! DX Racer Blue."
    },
    {
        "id": 30,
        "name": "Silla Gamer Eleet",
        "image": "https://i.postimg.cc/ZYXqkDr9/oficina-gamer-elegreen.png",
        "type": "Oficina",
        "info": "Silla Gamer!! Eleet Gaming Green."
    },
]