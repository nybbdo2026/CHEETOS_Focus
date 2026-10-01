const brands = [
    { name: "cheetos", img: "img/cheetos.png" },
    { name: "doritos", img: "img/doritos.png" }, 
    { name: "fandangos", img:"img/fandangos.png" }, 
    { name: "fofura", img:"img/fofura.png" },
    { name: "gulao", img:"img/gulao.png" },
    { name: "lays", img:"img/lays.png" },
    { name: "pippos", img:"img/pippos.png" },
    { name: "pringles", img:"img/pringles.png" },
    { name: "ruffles", img:"img/ruffles.png" },
    { name: "yokitos", img:"img/yokitos.png" }
  ];

const category = "Salgadinhos"

const attributes = ["Aventura","Impulsividade","Descoberta","Escape","Não convencional","Ousadia","Rebeldia","Destemor","Audácia","Orgulho","Sofisticação","Confiança","Empoderamento","Poderoso","Forte","Exclusividade","Validação","Alegria","Me mimar","Me satisfazer","Indulgência","Relaxamento","Naturalidade","Satisfação","Desejo","Conforto","Disciplina","Razão","Simplicidade","Prático","Pé no chão","Funcional","Esperto","Valor","Consistência","Confiável","Carinho","Proximidade","União","Sentir-se em casa","Aceitação pelos outros","Confiável","Nostalgia","Empolgação","Diversão","Ludicidade","Individualidade","Curiosidade","Estar na moda","Energia","Criatividade","Vibrante"];

const pretest_attributes = [
  "Quente", 
  "Frio", 
  "Perigoso",
  "Refrescante", 
  "Fofo",
  "Macio"
];


const pretest_images = [
  {name: "Cat", img: "pretest_img/pretest_cat.png", correct: ["Fofo", "Macio"]},
  {name: "Fire", img:"pretest_img/pretest_fire.png", correct:["Perigoso", "Quente"]}, 
  {name: "Icecube", img: "pretest_img/pretest_icecube.png", correct:["Frio", "Refrescante"]}
]

const pretest_attributes_multiple = ["Quente", "Frio", "Perigoso", "Refrescante", "Fofo", "Macio", "Viagem", "Empolgação", "Preciso", "Tempo", "Profundo", "Molhado"]

const pretest_images_multiple = [
  {name: "Cat", img: "pretest_img/pretest_cat.png", correct: ["Fofo", "Macio"]},
  {name: "Fire", img:"pretest_img/pretest_fire.png", correct:["Perigoso", "Quente"]}, 
  {name: "Icecube", img: "pretest_img/pretest_icecube.png", correct:["Frio", "Refrescante"]}, 
  {name: "Driving", img: "pretest_img/pretest_driving.png", correct:["Viagem", "Empolgação"]}, 
  {name: "Ocean", img: "pretest_img/pretest_ocean.png", correct:["Profundo", "Molhado"]},
  {name: "Clock", img: "pretest_img/pretest_clock.png", correct:["Preciso", "Tempo"]}
]


const survey_name = "CHEETOS Survey"
