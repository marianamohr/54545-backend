const restrictedCategories = ["desativado", "NA", "cartao", "xablau"];

const ApprovedBrand = ["Adidas"];

const productList = [
  { id: 1, nome: "Tenis", marca: "Adidas", categoria: "caminhada" },
  { id: 2, nome: "Tenis", marca: "Nike", categoria: "corrida" },
  { id: 3, nome: "Tenis", marca: "Puma", categoria: "NA" },
  { id: 1, nome: "Camiseta", marca: "Adidas", categoria: "Manga Curta" },
];


const filtredList = productList.filter(
  (item) => !restrictedValues.includes(item.categoria) && ApprovedBrand.includes(item.marca)
);


console.log(filtredList);
