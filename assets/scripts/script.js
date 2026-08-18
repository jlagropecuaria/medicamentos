// ================== CONFIGURAÇÃO ==================
const whatsappNumero = "5535910021310";

// ================== LISTA DE PRODUTOS (uma const por planilha) ==================
const produtosRacoes = [
  {
    nome: "Salt Pet 15KG (Carne e Frango) Cão Adulto - Raças Médias e Grandes",
    preco: "R$50,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_691267-MLA99880308289_112025-F.webp",
  },
  {
    nome: "Cold Dog 15KG (Carne) Cão Adulto - Raças Médias e Grandes",
    preco: "R$50,00",
    imagem: "assets/img/coltdog.png",
  },
  {
    nome: "PapaTudo 15KG (Carne) Cão Adulto - Raças Médias e Grandes",
    preco: "R$60,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_811624-MLA106064668975_012026-F.webp",
  },
  {
    nome: "FiuCão 15KG (Carne) Cão Adulto - Raças Médias e Grandes",
    preco: "R$75,00",
    imagem:
      "https://inproveter.gestor909.com.br/fotos/p_23_20200624_104125_1.jpg",
  },
  {
    nome: "Begacão Premium 15KG (Carne) Cão Adulto - Raças Médias e Grandes",
    preco: "R$75,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_894769-MLA99815070161_112025-F.webp",
  },
  {
    nome: "Zorro Premium 15KG (Carne) Cão Adulto - Raças Médias e Grandes",
    preco: "R$90,00 / Granel = 7,99 o Quilo",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_959033-MLA95452501439_102025-F.webp",
  },
  {
    nome: "Magnus Premium 15KG (Carne) Cão Adulto - Raças Médias e Grandes",
    preco: "R$99,00 / Granel = 8,99 o Quilo",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_876876-MLA99821516261_112025-F.webp",
  },
  {
    nome: "Special Dog Premium 15KG (Carne) Cão Adulto - Raças Médias e Grandes",
    preco: "R$110,00 / Granel = 10,00 o Quilo",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_864071-MLA111186605366_052026-F.webp",
  },
  {
    nome: "Qualis Premium Superior 15KG (Carne e Arroz) Cão Adulto - Raças Médias e Grandes",
    preco: "R$120,00 / Granel = 10,00 o Quilo",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/587393/qualis_feed_cao_ad_rmg_15kg_3303_1_a071702c39e6c5e13a122d9327bdf1ce.jpg",
  },
  {
    nome: "Cão Brother 15KG (Frango, Arroz e Vegetais) Cão Adulto - Raças Médias e Grandes",
    preco: "R$150,00",
    imagem:
      "https://agrotela.com.br/wp-content/uploads/2025/10/Captura-de-tela-2025-10-05-230253.png",
  },
  {
    nome: "Magnus Premium 15KG (Carne e Frango)  Cães Raças Pequenas",
    preco: "R$99,00 / Granel = 8,99 o Quilo",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_880313-MLA114066651098_072026-F.webp",
  },
  {
    nome: "Special Dog Premium 15KG Especial (Frango)  Cães Raças Pequenas",
    preco: "R$160,00 / Granel = 14,90 o Quilo",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_665454-MLA99351147590_112025-F.webp",
  },
  {
    nome: "Qualis Premium Superior 10,1KG (Carne e Arroz)  Cães Raças Pequenas",
    preco: "R$95,00 / Granel = 12,50 o Quilo",
    imagem:
      "https://cdn.awsli.com.br/600x700/2485/2485118/produto/372456921/imagem-4-jpg-aix9coa9z0.jpeg",
  },
  {
    nome: "Zorro Premium 10,1KG (Carne)  Cães Raças Pequenas",
    preco: "R$85,00 / Granel = 10,00 o Quilo",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_848027-MLB105649734799_012026-F-racao-zorro-premium-adulto-raca-pequena-10kg.webp",
  },
  {
    nome: "Cão Brother 10,1KG (Frango, Arroz e Vegetais)  Cães Raças Pequenas",
    preco: "R$120,00",
    imagem:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQDIt8UcUunITL1mfdtqJdpJnawifCirIgwL1XWJlTHdt5G87gwJGTFCV18N57OU4v7pL5or8PioQlUgcKpjLstXbNtnx6risJ-C3pHvX6-9On2AJ-ayBoMaA",
  },
  {
    nome: "Zorro Premium 10,1KG (Carne) Cão Filhote",
    preco: "R$85,00 / Granel = 10,00 o Quilo",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_763743-MLB111342867865_052026-F-racao-premium-zorro-filhote-todas-as-racas-10kg.webp",
  },
  {
    nome: "Qualis Premium Superior 10,1KG (Carne e Arroz) Cão Filhote",
    preco: "R$90,00 / Granel = 12,90 o Quilo",
    imagem:
      "https://down-br.img.susercontent.com/file/br-11134207-820m6-mnyme2hv2tc020",
  },
  {
    nome: "Cão Sênior +7 Premium Superior 10,1KG (Carne e Arroz) Cão Sênior",
    preco: "R$95,00 / Granel = 12,00 o Quilo",
    imagem:
      "https://cdn.awsli.com.br/600x700/2485/2485118/produto/372456789/imagem-2-jpg-f5nsc5adc3.jpeg",
  },
  {
    nome: "FiuGat 10,1KG Mix de Sabores (Gatos)",
    preco: "R$80,00 / Granel = 8,99 o Quilo",
    imagem:
      "https://cdn.awsli.com.br/600x700/2485/2485118/produto/372451006/123602_1-lqv2sffcdb.jpg",
  },
  {
    nome: "FiuGat 20KG Mix de Sabores (Gatos)",
    preco: "R$150,00 / Granel = 8,99 o Quilo",
    imagem:
      "https://cdn.awsli.com.br/600x700/2485/2485118/produto/372451006/123602_1-lqv2sffcdb.jpg",
  },
  {
    nome: "FiuGat 10,1KG Mix de Sabores (Com Corante) (Gatos)",
    preco: "R$80,00 / Granel = 8,99 o Quilo",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqF1lGG33MNj1hyCLVZ4KJipRBOLC3Up5Zp1Dm_gaNDxH1qs8PJUOq_4w&s=10",
  },
  {
    nome: "FiuGat 20KG Mix de Sabores (Com Corante) (Gatos)",
    preco: "R$150,00 / Granel = 8,99 o Quilo",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqF1lGG33MNj1hyCLVZ4KJipRBOLC3Up5Zp1Dm_gaNDxH1qs8PJUOq_4w&s=10",
  },
  {
    nome: "Zorro Cat Premium 10,1KG (Carne) (Gatos)",
    preco: "R$90,00 / Granel = 10,00 o Quilo",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_763321-MLB111342868927_052026-F.webp",
  },
  {
    nome: "Zorro Cat Premium 20KG (Carne) (Gatos)",
    preco: "R$170,00 / Granel = 10,00 o Quilo",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_763321-MLB111342868927_052026-F.webp",
  },
  {
    nome: "Qualis Premium Superior 10,1KG (Carne e Arroz) (Gato Adulto e Filhote)",
    preco: "R$120,00 / Granel = 15,00 o Quilo",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/587393/qualis_feed_gato_ad_e_fil_10kg_3347_1_ed835ffe047d4c8ec6ab7be820444b3e.jpg",
  },
  {
    nome: "Qualis Premium Superior 10,1KG (Carne e Arroz) (Gato Castrado)",
    preco: "R$120,00 / Granel = 15,00 o Quilo",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/587393/qualis_feed_gato_cast_10kg_3349_1_6be65e9a80ca6e4398f61d21cd3f7c64.jpg",
  },
  {
    nome: "Special Cat Premium 10,1KG (Frango) (Gato Castrado)",
    preco: "R$140,00 / Granel = 15,00 o Quilo",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_866832-MLU72826916011_112023-F.webp",
  },
  {
    nome: "Special Cat Premium 20KG (Frango) (Gato Castrado)",
    preco: "R$270,00 / Granel = 15,00 o Quilo",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_866832-MLU72826916011_112023-F.webp",
  },
  {
    nome: "Zorro Cat Premium 10,1KG (Carne) (Gato Filhote)",
    preco: "R$90,00 / Granel = 10,00 o Quilo",
    imagem:
      "https://http2.mlstatic.com/D_Q_NP_885295-MLB110405786594_052026-O.webp",
  },
  {
    nome: "Cat Brother 10,1KG (Salmão , Arroz e Polpa de Beterraba) (Gato Adulto e Filhote)",
    preco: "R$170,00 / Granel = 18,00 o Quilo",
    imagem:
      "https://cdn.awsli.com.br/2500x2500/2485/2485118/produto/372461313/487704_1-deur87xh21.jpg",
  },
  {
    nome: "Cat Brother 10,1KG (Salmão , Arroz e Polpa de Beterraba) (Gato Castrado)",
    preco: "R$170,00 / Granel = 18,00 o Quilo",
    imagem:
      "https://cdn.awsli.com.br/2500x2500/252/252373/produto/385671114/5-olhrsm0lu2.png",
  },
  {
    nome: "Ração Vaca Leiteira 24% 40kg",
    preco: "R$120,00",
    imagem: "https://qualis.gestor909.com.br/fotos/p_30_20220919_181841_1.jpg",
  },
  {
    nome: "Ração Cavalo 11% 40kg",
    preco: "R$120,00 / Granel = 3,99 o Quilo",
    imagem: "https://qualis.gestor909.com.br/fotos/p_41_20220912_203028_1.jpg",
  },
  {
    nome: "Ração Leitão 20kg",
    preco: "R$89,00",
    imagem: "https://qualis.gestor909.com.br/fotos/p_31_20220919_195853_1.jpg",
  },
  {
    nome: "FUBÁ 40KG",
    preco: "R$79,00 / Granel = 2,99 o Quilo",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0I2HXWclJBr_RsVIH6z0GJC-jpfmqhYMU5rPIzuR5A&s",
  },
  {
    nome: "Quirelão 40KG",
    preco: "R$79,00 / Granel = 2,99 o Quilo",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0I2HXWclJBr_RsVIH6z0GJC-jpfmqhYMU5rPIzuR5A&s",
  },
  {
    nome: "Quirela Fina 25KG",
    preco: "R$59,00 / Granel = 2,99 o Quilo",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0I2HXWclJBr_RsVIH6z0GJC-jpfmqhYMU5rPIzuR5A&s",
  },
  {
    nome: "Farelo de Trigo 40KG",
    preco: "R$79,00 / Granel = 3,99 o Quilo",
    imagem:
      "https://belarina.com.br/wp-content/uploads/2021/05/FARELO-BELARINA-40KG-RF.png",
  },
  {
    nome: "Milho 50KG",
    preco: "R$85,00 / Granel = 2,50 o Quilo",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0I2HXWclJBr_RsVIH6z0GJC-jpfmqhYMU5rPIzuR5A&s",
  },
  {
    nome: "Sal Proteinado Bovisal 25KG",
    preco: "R$99,00",
    imagem: "https://qualis.gestor909.com.br/fotos/p_58_20220916_185315_1.jpg",
  },
  {
    nome: "Sal Comum 25KG",
    preco: "R$29,00",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUkOsckW1nKSGCH5V90t17G7ERp4WUwCUKLXOP6gvQSQ&s=10",
  },
  {
    nome: "Sal Cocheira Phós 80 Proteinado 10KG (Equinos)",
    preco: "R$80,00",
    imagem: "https://qualis.gestor909.com.br/fotos/p_14_20220912_201554_1.jpg",
  },
  {
    nome: "Saco Silagem",
    preco: "R$18,00",
    imagem:
      "https://cdn.awsli.com.br/800x800/1027/1027618/produto/136138834/saco-de-silagem-colorido-iocksh.jpg",
  },
  {
    nome: "Ração Peixe 25KG 28%",
    preco: "R$99,00 / Granel = 5,99 o Quilo",
    imagem: "https://qualis.gestor909.com.br/fotos/p_11_20220913_180917_1.jpg",
  },
  {
    nome: "Ração Peixe 25KG 32%",
    preco: "R$120,00 / Granel = 5,99 o Quilo",
    imagem: "https://qualis.gestor909.com.br/fotos/p_11_20220913_180917_1.jpg",
  },
  {
    nome: "Ração Peixe Beta",
    preco: "R$10,00",
    imagem: "https://m.media-amazon.com/images/I/91WXRzn+i3L.jpg",
  },
  {
    nome: "Ração Peixe Nutriflakes",
    preco: "R$10,00",
    imagem: "https://images.petz.com.br/fotos/1595509131040.jpg",
  },
  {
    nome: "Isca para Pesca Massas Rocha TILAPIA 500g Chocotone",
    preco: "R$20,00",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYME1PNw7y6oP6mXNon9ev48juu_OsrJEDhMakjkxAAAxeL8qU0CENvMw&s=10",
  },
  {
    nome: "Isca para Pesca Massas Rocha TILAPIA 500g P40",
    preco: "R$20,00",
    imagem:
      "https://cdn.awsli.com.br/800x800/1597/1597697/produto/118214258/6862b8a962.jpg",
  },
  {
    nome: "Ração Pintinho 20KG",
    preco: "R$70,00",
    imagem: "https://qualis.gestor909.com.br/fotos/p_72_20220912_163122_1.jpg",
  },
  {
    nome: "Ração Pintinho 5KG",
    preco: "R$20,00",
    imagem: "https://qualis.gestor909.com.br/fotos/p_72_20220912_163122_1.jpg",
  },
  {
    nome: "Ração Frango 20KG",
    preco: "R$70,00",
    imagem: "https://qualis.gestor909.com.br/fotos/p_16_20220912_162250_1.jpg",
  },
  {
    nome: "Ração Frango 5KG",
    preco: "R$20,00",
    imagem: "https://qualis.gestor909.com.br/fotos/p_16_20220912_162250_1.jpg",
  },
  {
    nome: "Ração Botadeira 20KG",
    preco: "R$70,00",
    imagem: "https://qualis.gestor909.com.br/fotos/p_39_20220912_160441_1.jpg",
  },
  {
    nome: "Ração Botadeira 5KG",
    preco: "R$20,00",
    imagem: "https://qualis.gestor909.com.br/fotos/p_39_20220912_160441_1.jpg",
  },
  {
    nome: "Ração Codorna 20KG",
    preco: "R$70,00",
    imagem: "https://qualis.gestor909.com.br/fotos/p_46_20220912_174204_1.jpg",
  },
  {
    nome: "Ração Codorna 5KG",
    preco: "R$20,00",
    imagem: "https://qualis.gestor909.com.br/fotos/p_46_20220912_174204_1.jpg",
  },
  {
    nome: "Ração Coelho 20KG",
    preco: "R$70,00",
    imagem: "https://qualis.gestor909.com.br/fotos/p_94_20220915_204623_1.jpg",
  },
  {
    nome: "Ração Coelho 5KG",
    preco: "R$20,00",
    imagem: "https://qualis.gestor909.com.br/fotos/p_94_20220915_204623_1.jpg",
  },
  {
    nome: "Alpiste o Quilograma",
    preco: "R$12,00",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JSl2nugRp7J7jlTqkBCLUf-jBBZGWSgpKDDcZrPcZQ&s=10",
  },
  {
    nome: "Mistura Canário o Quilograma",
    preco: "R$14,90",
    imagem:
      "https://www.racoespassaroforte.com.br/wp-content/uploads/2021/10/Foto-Produto-Mistura-Canario.jpg",
  },
  {
    nome: "Vitamina Amarela o Quilograma",
    preco: "R$15,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_808989-MLA99884657221_112025-O.webp",
  },
  {
    nome: "Farinhada Branca com Mel o Quilograma",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_835798-MLB46628744651_072021-O.webp",
  },
  {
    nome: "HB 23 Farinhada Branca para Canários o Quilograma",
    preco: "R$30,00",
    imagem:
      "https://minasnutri.com/wp-content/uploads/2024/06/Farinhada-branca-700g.jpg",
  },
  {
    nome: "HB 16 Pro Life Farinhada para Umedecer o Quilograma",
    preco: "R$30,00",
    imagem:
      "https://minasnutri.com/wp-content/uploads/2024/06/HB16-Pro-Life-5kg.jpg",
  },
  {
    nome: "Canto Nativo Mamão o Quilograma (Picharro)",
    preco: "R$25,00",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbpHT8KTcOMCl8wCDYv_PN0kD74GSz5KbRtXAbqOgZ6A&s=10",
  },
  {
    nome: "Saporito o Quilograma (Picharro)",
    preco: "R$25,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/1075852/saporito_mix_c_frutas_500g_1447_1_2076ced392a0b94a24f96b88e9b34a7d.jpg",
  },
  {
    nome: "Painço o Quilograma",
    preco: "R$10,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/248016/sementes_de_painco_caixa_3_kg_1563_1_771ee2ff4647cb86b0cecdb22fca3a43.jpg",
  },
  {
    nome: "Níger o Quilograma",
    preco: "R$20,00",
    imagem:
      "https://www.nutribird.com.br/site/wp-content/uploads/2019/12/n%C3%ADger.jpg",
  },
  {
    nome: "Vitamina de Banana o Quilograma (Picharro , Sabiá ,Passo Preto e Tiriva)",
    preco: "R$30,00",
    imagem:
      "https://zooline.com.br/uploads/produto_fotos/20181116171709_nativos_5kg.png",
  },
  {
    nome: "Mistura para Calopsita",
    preco: "R$12,90",
    imagem:
      "https://amepettatix.vtexassets.com/arquivos/ids/191286/7898329492339--2-.jpg?v=638670145165000000",
  },
  {
    nome: "Girassol Graudo o Quilograma",
    preco: "R$15,00",
    imagem:
      "https://www.agrosete.com.br/wp-content/uploads/2023/11/semente-de-girassol-para-calopsita.jpg",
  },
  {
    nome: "Girassol o Quilograma",
    preco: "R$15,00",
    imagem:
      "https://a-static.mlcdn.com.br/800x600/semente-13-e-5-kg-girassol-pequeno-para-passaros-papagaio-limpo-miudo-prime/magaprimer/9fbf6396247f11ed901f4201ac185019/3eb3e974bf2d8eef8631dcf72c8ffaaa.jpeg",
  },
  {
    nome: "Ração Fluffy Roe",
    preco: "R$20,00",
    imagem:
      "https://dcdn-us.mitiendanube.com/stores/006/687/615/products/a3c127821a3f95691a7a04b96014fa44-35c40f87e4b570fcb517620151722048-480-0.webp",
  },
  {
    nome: "Ração FunnyBunny 500g",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_672489-MLB76634451669_052024-F-racao-coelho-e-roedores-funny-bunny-delicias-da-horta-18kg.webp",
  },
  {
    nome: "Ração Papagaio 500g",
    preco: "R$12,00",
    imagem:
      "https://www.racoespicapau.com.br/uploads/produtos/produto_6a0d0d509b6445.74856924.webp",
  },
  {
    nome: "Coleirinha 500g",
    preco: "R$10,00",
    imagem:
      "https://www.racoespicapau.com.br/uploads/produtos/produto_6a0cb533cd30b6.36702924.webp",
  },
  {
    nome: "Calopsita 500g",
    preco: "R$10,00",
    imagem:
      "https://www.racoespicapau.com.br/uploads/produtos/produto_6a0cad1be99933.40613082.webp",
  },
  {
    nome: "Canário 500g",
    preco: "R$12,00",
    imagem:
      "https://www.racoespicapau.com.br/uploads/produtos/produto_6a1627cdab1859.48693363.webp",
  },
  {
    nome: "Hamster 500g",
    preco: "R$15,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_988850-MLB82002725211_012025-O.webp",
  },
  {
    nome: "Molho para Ração Carne 250g",
    preco: "R$10,00",
    imagem:
      "https://http2.mlstatic.com/D_Q_NP_753140-MLB93488487753_092025-L-molho-para-raco-seca-pet-saboroso-cia-do-pet-250-gr.webp",
  },
  {
    nome: "Patê de Peixe 280g",
    preco: "R$10,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_667582-MLB108800521106_032026-O.webp",
  },
  {
    nome: "Patê de Frango 280g Cão Adulto",
    preco: "R$10,00",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0s2fBZvtfjzq46bcVnxtA727C-0eOJMUeIZONsbwxOQ&s",
  },
  {
    nome: "Patê de Frango 280g Cão Filhote",
    preco: "R$10,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_680945-MLB108800534574_032026-O.webp",
  },
  {
    nome: "Friskies Frango ao Molho 85g",
    preco: "R$5,00",
    imagem:
      "https://purina.com.br/sites/default/files/styles/webp/public/2023-07/HERO_FRANGO_05.png.webp?itok=JzkDkqvz",
  },
  {
    nome: "Friskies Carne ao Molho 85g",
    preco: "R$5,00",
    imagem:
      "https://purina.com.br/sites/default/files/styles/webp/public/2023-07/HERO_ATUM_ATUM02.png.webp?itok=BV3hMRP2",
  },
  {
    nome: "Friskies Filhotes Carne ao Molho 85g",
    preco: "R$5,00",
    imagem:
      "https://purina.com.br/sites/default/files/styles/webp/public/2023-07/HERO_SALMAO_WET_03.png.webp?itok=tqrCM6GJ",
  },
  {
    nome: "Friskies Salmão ao Molho 85g",
    preco: "R$5,00",
    imagem:
      "https://purina.com.br/sites/default/files/styles/webp/public/2023-07/HERO_SALMAO_WET.png.webp?itok=gFbG-TnE",
  },
  {
    nome: "Dog Chow Filhotes Carne,Cenoura,Maçã e Leite 85g",
    preco: "R$5,00",
    imagem:
      "https://purina.com.br/sites/default/files/styles/webp/public/2026-05/112616045_DOGCHOWFILHOTESCARNE-LEITE15x85gBR_Frente.png.webp?itok=InSc3B7A",
  },
  {
    nome: "Dog Chow Todos os Tamanhos Carne 100g",
    preco: "R$5,00",
    imagem:
      "https://purina.com.br/sites/default/files/styles/webp/public/2024-01/1.jpg.webp?itok=1wcojUbF",
  },
  {
    nome: "Dog Chow Filhotes Todos os Tamanhos Carne 100g",
    preco: "R$5,00",
    imagem:
      "https://purina.com.br/sites/default/files/styles/webp/public/2024-01/1_5.jpg.webp?itok=XRXyr5on",
  },
  {
    nome: "Dog Chow Adultos Minis e Pequenos Frango 100g",
    preco: "R$5,00",
    imagem:
      "https://purina.com.br/sites/default/files/styles/webp/public/2024-01/1_3.jpg.webp?itok=4Z7qVs6u",
  },
  {
    nome: "Dog Chow Adultos Minis e Pequenos Carne 100g",
    preco: "R$5,00",
    imagem:
      "https://purina.com.br/sites/default/files/styles/webp/public/2024-01/1_2.jpg.webp?itok=6li5Zd_9",
  },
  {
    nome: "Qualis Bifinho Carne 60g",
    preco: "R$5,00",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLAH-bgWkfmgtMeyTKtHGeL5-kcQufE-oUVKKM42z4ew&s=10",
  },
  {
    nome: "Bifinhos Doogs 50g",
    preco: "R$5,00",
    imagem: "https://doogspet.com/wp-content/uploads/bifinho-carne-50g.png",
  },
  {
    nome: "Biscoito Canino PetDog Crock 250g",
    preco: "R$15,00",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYjnD-slGidYncT89bIGD3ln0GQ6RT1HEHsAAE2WvXXQ&s",
  },
  {
    nome: "Biscoito Canino PetDog Crock Filhotes 250g",
    preco: "R$15,00",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xrirmWs9P1ZWBAzvokRbTW28OkCJbcpFTEJLZAMasg&s=10",
  },
  {
    nome: "Biscoito Canino PetDog Crock Mini 250g",
    preco: "R$15,00",
    imagem:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRrThleBJVGTEUQ6V54CK1-bMMSvEd-14VeBASv7CtiC13-EzfTRm0-XHpocD24NvEM1fU_DW4FIjWRNcFr6LoxwB2fx1ZGINWofRZ-EStbMK-hOxFWyvX4LZOpgpZFr90JGrDl4w&usqp=CAc",
  },
  {
    nome: "ChuChups Creamy 15g (1 unidade)",
    preco: "R$5,00",
    imagem:
      "https://m.media-amazon.com/images/I/61A1uvF95LL._AC_UF350,350_QL80_.jpg",
  },
];

const produtosRemedios = [
  {
    nome: "NexGard Spectra 2 a 3,5kg (1 Tablete)",
    preco: "R$90,00 Cada",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_890358-MLA97217364353_112025-F.webp",
  },
  {
    nome: "NexGard 2 a 4 KG (1 Tablete)",
    preco: "R$90,00 Cada",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_651638-MLA99936930683_112025-F.webp",
  },
  {
    nome: "NexGard 4,1 a 10 KG (1 Tablete)",
    preco: "R$99,00 Cada",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_896126-MLB101896944573_122025-F-nexgard-41-a-10-kg--caixa-com-3-comprimidos.webp",
  },
  {
    nome: "NexGard 10,1 a 25 KG (1 Tablete)",
    preco: "R$120,00 Cada",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_861686-MLB101286864686_122025-F-nexgard-101-a-25-kg--caixa-com-3-comprimidos.webp",
  },
  {
    nome: "NexGard 25,1 a 50 KG (1 Tablete)",
    preco: "R$140,00 Cada",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_631012-MLA100018783777_122025-F.webp",
  },
  {
    nome: "Credeli 1,3 a 2,5 KG (1 Tablete)",
    preco: "R$75,00 Cada",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_622203-MLA108421454749_032026-F.webp",
  },
  {
    nome: "Credeli 2,5 a 5,5 KG (1 Tablete)",
    preco: "R$80,00 Cada",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_660832-MLB92301472338_092025-F-antipulgas-e-carrapatos-credeli-caes-de-25-a-55-kg-1-comp.webp",
  },
  {
    nome: "Credeli 5,5 a 11,0 KG (1 Tablete)",
    preco: "R$90,00 Cada",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_697248-MLB92893344799_092025-F-antipulgas-e-carrapatos-credeli-caes-de-55-a-11-kg--1-comp.webp",
  },
  {
    nome: "Credeli 11,0 a 22,0 KG (1 Tablete)",
    preco: "R$110,00 Cada",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_699338-MLB92316335550_092025-F-antipulgas-e-carrapatos-credeli-caes-de-11-a-22-kg--1-comp.webp",
  },
  {
    nome: "Credeli 22,0 a 45,0 KG (1 Tablete)",
    preco: "R$130,00 Cada",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_659843-MLA98917015338_112025-F.webp",
  },
  {
    nome: "Capstar 11,5 a 57,0 KG (1 Tablete)",
    preco: "R$40,00 Cada",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_876628-MLA114065946211_072026-F.webp",
  },
  {
    nome: "Capstar 1,0 a 11,4 KG (1 Tablete)",
    preco: "R$30,00 Cada",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_698400-MLB82795385571_022025-F-pode-passar-mata-bicheira-em-cachorro-capstar-01114kg-1-cp.webp",
  },
  {
    nome: "Calciobiox 100 ML",
    preco: "R$30,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_745277-MLA99373359288_112025-F.webp",
  },
  {
    nome: "FloraFarm Pet 14g",
    preco: "R$40,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_812343-MLB113670820805_062026-F.webp",
  },
  {
    nome: "Gentamasti L Vacas Lactantes 10 G",
    preco: "R$15,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_610924-MLA99973035047_112025-F.webp",
  },
  {
    nome: "Gentamasti L Vaca Seca 10 G",
    preco: "R$15,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_663508-MLA99520639740_112025-F.webp",
  },
  {
    nome: "Triatox 200 ML",
    preco: "R$60,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_807637-MLA99853980627_112025-F.webp",
  },
  {
    nome: "Biodex",
    preco: "R$30,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_708409-MLA99440126942_112025-F.webp",
  },
  {
    nome: "Con Front Plus 02 a 10 KG",
    preco: "R$30,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_929066-MLA99610330528_122025-F.webp",
  },
  {
    nome: "Deltametrina Coleira Antipulga Cães Grabdes 25 g",
    preco: "R$30,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_821750-MLA99602228072_122025-F.webp",
  },
  {
    nome: "Deltametrina Coleira Antipulga Cães Pequenos/Médios 19 g",
    preco: "R$30,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_622375-MLA100052365301_122025-F.webp",
  },
  {
    nome: "Ec-pet Puron Cães Acima De 40kg",
    preco: "R$50,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_755439-MLA100080963319_122025-F.webp",
  },
  {
    nome: "Déxium Dexametasona C/ 20 Comprimidos",
    preco: "R$30,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_720557-MLA108852757116_032026-F.webp",
  },
  {
    nome: "Colírio Ucbvet 15 Ml Para Cães E Gatos",
    preco: "R$50,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_963773-MLB110887380631_042026-F-colirio-ucbvet-15-ml-para-caes-e-gatos.webp",
  },
  {
    nome: "Pipi Natu Dog",
    preco: "R$15,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_675847-MLU74528924192_022024-F.webp",
  },
  {
    nome: "Sulfamicina Oral Ibasa Para Aves 20ml",
    preco: "R$25,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_811652-MLA99358422316_112025-F.webp",
  },
  {
    nome: "Anticion 1ml Anticoncepcional",
    preco: "R$10,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_694790-MLA115268511679_072026-F.webp",
  },
  {
    nome: "Soro Antiofídico 50ml",
    preco: "R$120,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_999366-MLA108422571445_032026-F.webp",
  },
  {
    nome: "Soro Antitetânico Lema Injex Cavalo 5ml",
    preco: "R$30,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_620834-MLA100070953077_122025-F.webp",
  },
  {
    nome: "Vitagold Potenciado 50ml",
    preco: "R$30,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_871514-MLB77756959576_072024-F-suplemento-vitaminico-caes-gatos-vitagold-potenciado-50ml.webp",
  },
  {
    nome: "Proverme 28 g",
    preco: "R$10,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_626838-MLB76133885535_052024-F-proverme-28g-kit-com-05-unidades.webp",
  },
  {
    nome: "Seringa Veterinária Esterilizável 25ml Atóxica Clean",
    preco: "R$15,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_881164-MLU72188815123_102023-F.webp",
  },
  {
    nome: "Terracam Plus Oxitetraciclina Base Agener União 50ml",
    preco: "R$45,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_846100-MLA100102934635_122025-F.webp",
  },
  {
    nome: "Terracam Spray Cicatrizante 125ml Agener União",
    preco: "R$45,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_717897-MLA99614586494_122025-F.webp",
  },
  {
    nome: "Terramicina Pó Com Antigerm 77 100g Solúvel Zoetis",
    preco: "R$45,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_702686-MLB99598211348_122025-F-kit-2-terramicina-po-com-antigerm-77-100g-soluvel-zoetis.webp",
  },
  {
    nome: "Terramicina La 50ml - Zoetis",
    preco: "R$40,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_782629-MLB112207866686_062026-F-terramicina-la-50ml--zoetis.webp",
  },
  {
    nome: "Trissulfin Pó 50 g",
    preco: "R$15,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_681070-MLB103355054102_012026-F-trissulfin-po-50-gr.webp",
  },
  {
    nome: "IverClin Gold Ivermectina 12mg",
    preco: "R$20,00",
    imagem:
      "https://agropetweb.com.br/wp-content/uploads/2021/07/IverClin-Gold-Ivermectina-12mg.jpg",
  },
  {
    nome: "IverClin Gold Ivermectina 6mg",
    preco: "R$20,00",
    imagem:
      "https://agropetweb.com.br/wp-content/uploads/2021/07/IverClin-Gold-Ivermectina-6mg.jpg",
  },
  {
    nome: "IverClin Gold Ivermectina 3mg",
    preco: "R$20,00",
    imagem:
      "https://agropetweb.com.br/wp-content/uploads/2021/07/IverClin-Gold-Ivermectina-3mg.jpg",
  },
  {
    nome: "IverClin Gold Ivermectina 1mg",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_943349-MLB109514355050_042026-F-iverclin-gold-ivermectina-1mg-para-caes-e-gatos-48-comprimid.webp",
  },
  {
    nome: "Bio Line 100ml Fipronil Antipulgas E Carrapatos Caes Gatos",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_893130-MLA108419858149_032026-F.webp",
  },
  {
    nome: "Espanta Repele Pombos Morcegos Passaro Formiga 280ml",
    preco: "R$80,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_825659-MLA99895013343_112025-F.webp",
  },
  {
    nome: "Tanicid 200gr Indubras Contra Bicheira, Pulgas E Carrapatos",
    preco: "R$40,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_696784-MLA100081674639_122025-F.webp",
  },
  {
    nome: "Vermífugo Natu Verm Comprimido Para Cães e Gatos",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_754111-MLA99446002946_112025-F.webp",
  },
  {
    nome: "Vermífugo Equino Equivet Gold 6,42g vetbras Pasta Oral Para Cavalos",
    preco: "R$18,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_637930-MLA100084396799_122025-F.webp",
  },
  {
    nome: "Lema Inibidex 1ml Anticoncepcional (dose Única)",
    preco: "R$8,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_832965-MLB111191557753_052026-F-lema-inibidex-1ml-anticoncepcional-dose-unica-caes-e-gatos.webp",
  },
  {
    nome: "Suplemento Horsefil M.o Gel Turbo 2 Seringas 34g Equinos",
    preco: "R$60,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_924647-MLB110280649029_042026-F.webp",
  },
  {
    nome: "Equest Vermífugo Para Equinos 12,2g - Zoetis",
    preco: "R$69,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_785152-MLA114547818925_072026-F.webp",
  },
  {
    nome: "Suplemento Líquido Cálcio 250mL Bovinos Equinos Caprinos ValléeCálcio",
    preco: "R$40,00",
    imagem:
      "https://bassopancotte.com.br/imagem/produto/id/357/width/570/height/570/index/0?h=2da582bd44e69cc8ec4eb12bbaf63c8e1331223e",
  },
  {
    nome: "Anti Pulgas Alpha Ciper 20ml",
    preco: "R$7,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_956808-MLA96659874023_102025-F.webp",
  },
  {
    nome: "Butox 20ml",
    preco: "R$8,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_933416-MLA99957345645_112025-F.webp",
  },
  {
    nome: "Bioxan Vitamina B1 Líquida Valle 500 ML Para Animais Adultos",
    preco: "R$45,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_900692-MLB108958110933_032026-F.webp",
  },
  {
    nome: "Stop Antidiarreico Sachê 10g",
    preco: "R$10,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_725186-MLB113805234941_062026-F.webp",
  },
  {
    nome: "Potenay 10ML Zoets Revigorante Vitaminico",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_973456-MLA114343330919_072026-F.webp",
  },
  {
    nome: "Suplemento Potemin B12 Vetbras 120ml Vitaminas para Animais",
    preco: "R$30,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_869253-MLA99360340202_112025-F.webp",
  },
  {
    nome: "Mata Bicheira Larvicida Cidental 250ml - Bimeda",
    preco: "R$30,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_854375-MLB92381078476_092025-F.webp",
  },
  {
    nome: "Mata Bicheira Fort Dodge Zoetis 500ml",
    preco: "R$30,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_711438-MLA99598076714_122025-F.webp",
  },
  {
    nome: "Mata Bicheira Prata Spray Aerocid Total 500ml Agener União",
    preco: "R$25,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_858555-MLB81959470911_012025-F-mata-bicheira-prata-spray-aerocid-total-500ml-agener-uniao.webp",
  },
  {
    nome: "Creolina Concentrada 50mL Desinfetante Germicida",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_863031-MLB110893463557_042026-F.webp",
  },
  {
    nome: "Meloxifarm Vet Farmos 1mg Anti-inflamatório Cães e Gatos",
    preco: "R$30,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_925986-MLA99391003092_112025-F.webp",
  },
  {
    nome: "Meloxifarm Vet Farmos 2mg Anti-inflamatório Cães e Gatos",
    preco: "R$30,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_940645-MLB75588350582_042024-F-meloxifarm-20-mg--tira-dor--contra-mordidas-e-feridas.webp",
  },
  {
    nome: "Enronew 50mg Cães e Gatos",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_853730-MLA99925976173_112025-F.webp",
  },
  {
    nome: "Enronew 150mg Cães e Gatos",
    preco: "R$50,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_697629-MLA99918410627_112025-F.webp",
  },
  {
    nome: "Meloxiworld 0,5mg Anti-inflamatório",
    preco: "R$30,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_972037-MLB92376670495_092025-F-meloxiworld-05mg-antiinflamatorio-dores-febre---world.webp",
  },
  {
    nome: "Cefaworld 150 Mg Cães E Gatos",
    preco: "R$50,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_659676-MLA100043930911_122025-F.webp",
  },
  {
    nome: "Doxinew 50mg",
    preco: "R$50,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_744175-MLA99358554718_112025-F.webp",
  },
  {
    nome: "Doxinew 100mg",
    preco: "R$50,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_820915-MLA99400057242_112025-F.webp",
  },
  {
    nome: "Doxinew 200mg",
    preco: "R$50,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_633690-MLA99842259169_112025-F.webp",
  },
  {
    nome: "Triclorsil (neguvon) Pó Sachê 20gr Vansil",
    preco: "R$15,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_947361-MLB92290199049_092025-F-triclorsil-neguvon-po-sache-20gr-vansil.webp",
  },
  {
    nome: "Pro Bezerro Seringa 5ml",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_844717-MLB91134995303_082025-F.webp",
  },
  {
    nome: "Biotrin Vet Canto 20ml",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_662944-MLA100065245243_122025-F.webp",
  },
  {
    nome: "Biotrin Vet Cálcio B12 20ml",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_742497-MLB93820225133_092025-F-biotrin-vet-calcio-b12-20ml-vetbras.webp",
  },
  {
    nome: "Biotrin Vet 100 PS 20ml",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_701742-MLA103122866441_122025-F.webp",
  },
  {
    nome: "Avicil Muda - Suplemento Mineral E Vitamínico - 15 Ml",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_662902-MLB73237150357_122023-F-avicil-muda--suplemento-mineral-e-vitaminico--15-ml.webp",
  },
  {
    nome: "Vitagold Potenciado Frasco 20ml",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_902881-MLA99442316380_112025-F.webp",
  },
  {
    nome: "Vermífugos Para Aves Gogo Sanagogo 20ml",
    preco: "R$25,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_928433-MLA98896170897_112025-F-vermifugos-para-aves-gogo-sanagogo-20ml.webp",
  },
  {
    nome: "Ocitocina 50ml",
    preco: "R$10,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_697941-MLA99949850223_112025-F.webp",
  },
  {
    nome: "Penfort Reforçado",
    preco: "R$45,00",
    imagem:
      "https://www.ourofinosaudeanimal.com/media/uploads/produtos/2023/FR_Penfort_Reforcado_Novo.png",
  },
  {
    nome: "Penfort Ppu 50ml Ouro Fino Antibiotico",
    preco: "R$55,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_871007-MLB89881319286_082025-F-penfort-ppu-50ml-ouro-fino-antibiotico--original.webp",
  },
  {
    nome: "Agrosil PPU Vansil 50ml Antibiótico Injetável",
    preco: "R$75,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_610598-MLA99450021032_112025-F.webp",
  },
  {
    nome: "Corta Curso 50ml Ourofino",
    preco: "R$60,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_838404-MLB110510139343_042026-F.webp",
  },
  {
    nome: "Tribrissen 15 ML - Virbac",
    preco: "R$30,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_827214-MLA99897118637_112025-F.webp",
  },
  {
    nome: "Trissulfin Ourofino Antimicrobiano Injetável 50ml",
    preco: "R$55,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_883210-MLA99627215946_122025-F-trissulfin-ourofino-antimicrobiano-injetavel-50ml.webp",
  },
  {
    nome: "Monovin K Suplemento Coagulante Anti-hemorrágico 20mL",
    preco: "R$40,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_881229-MLA108014753867_032026-F.webp",
  },
  {
    nome: "Mercepton Injetavel 20ml - Bravet",
    preco: "R$30,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_823484-MLA109716259318_042026-F-v-mercepton-injetavel-20ml--bravet.webp",
  },
  {
    nome: "Tyladen 50 Ml - Antibiótico E Antimicrobiano - Ceva",
    preco: "R$50,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_820732-MLB97238476783_112025-F-tyladen-50-ml--antibiotico-e-antimicrobiano--ceva.webp",
  },
  {
    nome: "Cortvet 10mL -UCB | Inflamações, reumatismo, luxações e tendinites",
    preco: "R$20,00",
    imagem:
      "https://io.convertiez.com.br/m/lojaagropecuaria/shop/products/images/958/medium/cortvet-10-ml_182043.jpg",
  },
  {
    nome: "Verrudel 20ml",
    preco: "R$25,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/953490/verrudel_20ml_6245_1_c50e9e9f90f37caa2d8133e3468d47c2.jpg",
  },
  {
    nome: "Antitóxico Jofatox Injetável 20 mL",
    preco: "R$20,00",
    imagem:
      "https://bassopancotte.com.br/imagem/produto/id/2537/width/570/height/570/index/0?h=8985d4cb91945829f8ef5b06e0deceefe98a0e5d",
  },
  {
    nome: "Óleo Canforado UCB 20ml Uso Veterinário Animal",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_754688-MLA100110627243_122025-F.webp",
  },
  {
    nome: "Sincrocio 4ml Ourofino",
    preco: "R$50,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_908545-MLB108407843257_032026-F-sincrocio-4ml-ourofino.webp",
  },
  {
    nome: "D500 50ml Zoetis Analgésico Inj. P/ Equinos, Bovinos, Suínos",
    preco: "R$45,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_938147-MLB106420685621_022026-F-d500-50ml-zoetis-analgesico-inj-p-equinos-bovinos-suinos.webp",
  },
  {
    nome: "Dectomax Zoetis Injetável Frasco 50ml",
    preco: "R$60,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_763138-MLA100075157567_122025-F.webp",
  },
  {
    nome: "Ferron B12 50 Ml Vitamina E Ferro",
    preco: "R$25,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_884601-MLB89840127360_082025-F.webp",
  },
  {
    nome: "Colosso Pulverização De Ambiente Ourofino 100ml",
    preco: "R$40,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_614626-MLB79376156612_092024-F.webp",
  },
  {
    nome: "DEXA CALBOS 50mL",
    preco: "R$30,00",
    imagem: "https://calbos.com.br/wp-content/uploads/2023/08/dexa-2-1.png",
  },
  {
    nome: "DEXA CALBOS 10mL",
    preco: "R$20,00",
    imagem: "https://calbos.com.br/wp-content/uploads/2023/08/dexa-2-1.png",
  },
  {
    nome: "Dexametasona Calbos 10mL - Anti-inflamatório",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_980069-MLA105502962107_012026-F-dexametason-calbos-10m--antiinflamatorio.webp",
  },
  {
    nome: "Vit Ade Calbos Suplemento E Estimulante Vitamínico 50 mL",
    preco: "R$25,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_893324-MLB89597023322_082025-F-vit-ade-calbos-suplemento-e-estimulante-vitaminico-50-ml.webp",
  },
  {
    nome: "Phenodral Tônico Estimulante Ampola 15ml - Ucbvet",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_844806-MLB90768744793_082025-F-phenodral-tonico-estimulante-ampola-15ml--ucbvet.webp",
  },
  {
    nome: "Ripercol L Vermífugo Bovino Injetável 100mL Zoetis",
    preco: "R$50,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_950211-MLA99599295328_122025-F.webp",
  },
  {
    nome: "Tintura De Iodo 10% 100 mL",
    preco: "R$50,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_980425-MLB52873122027_122022-F-tintura-de-iodo-10-100-ml.webp",
  },
  {
    nome: "Ivomec Injetável 50ml",
    preco: "R$45,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_678482-MLB112493700008_062026-F.webp",
  },
  {
    nome: "Agrovet Plus 50 mL Grandesolução Injetável",
    preco: "R$75,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_986643-MLB108474286596_032026-F-agrovet-plus-50-ml-grandesolucao-injetavel-veterinaria.webp",
  },
  {
    nome: "CEF 50mg/ml SUS Injeção 30ml",
    preco: "R$50,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_663196-MLA99456769610_112025-F.webp",
  },
  {
    nome: "Sulfaprim Bravet C/ 10 Comprimidos",
    preco: "R$60,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_679633-MLB45564423029_042021-F-sulfaprim-bravet-c-10-comprimidos.webp",
  },
  {
    nome: "Cort-trat Sm 20cp",
    preco: "R$25,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_996991-MLB86526269616_062025-F.webp",
  },
  {
    nome: "Bioxan Vallee 500 mL",
    preco: "R$45,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_900692-MLB108958110933_032026-F.webp",
  },
  {
    nome: "Otodermin 20mL Bravet",
    preco: "R$60,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_705766-MLA84975122991_052025-F-otodermin-20ml-bravet-caes-e-gatos-tratamento-otites.webp",
  },
  {
    nome: "Chemitril Oral 10% - 10mL",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_610621-MLB106531985342_022026-F-chemitril-oral-10--10ml.webp",
  },
  {
    nome: "Dexium 10 mL Solução Injetável",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_943799-MLB103614718082_012026-F-dexium-10-ml-solucao-injetavel.webp",
  },
  {
    nome: "Glicocil Suplemento Vitamínico Mineral Aminoácido",
    preco: "R$25,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_858008-MLB110325100205_042026-F-glicocil-suplemento-vitaminico-mineral-aminoacido-caes-gatos.webp",
  },
  {
    nome: "Glicovet Gold 30ml Suplemento Vitamínico",
    preco: "R$25,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_743954-MLA99999495520_122025-F.webp",
  },
  {
    nome: "Tussedan 100ml",
    preco: "R$70,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_695054-MLB84415502594_052025-F-qual-o-melhor-remedio-para-tosse-de-caes-tussedan-100ml.webp",
  },
  {
    nome: "Matacura Antisséptico 90g",
    preco: "R$15,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_852058-MLB112994305787_062026-F-kit-sabonetes-matacura-antipulgas-80g--mais-antisseptico-90g.webp",
  },
  {
    nome: "Matacura Sarnicida e Antipulgas 80g",
    preco: "R$15,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_971253-MLB90293960166_082025-F.webp",
  },
  {
    nome: "Pomada Cicatrizante Saralogo 30 g",
    preco: "R$30,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_767243-MLB49560649955_042022-F-pomada-cicatrizante-saralogo-para-caes-e-gatos-30-gramas.webp",
  },
  {
    nome: "Ectonil Pour On Carrapaticida Pulverização Mosquicida 1L",
    preco: "R$50,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_631452-MLA94945653696_102025-F.webp",
  },
  {
    nome: "Poderoso Kelldrin 30mL",
    preco: "R$25,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_644371-MLB112639009204_062026-F.webp",
  },
  {
    nome: "Kelldrin Sc 25 Mata Baratas Aranhas Escorpiões 30mL",
    preco: "R$18,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_656016-MLA99395514626_112025-F.webp",
  },
  {
    nome: "K-othrine Sc 25 Envu 30mL",
    preco: "R$18,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_688294-MLA99358468720_112025-F.webp",
  },
  {
    nome: "Formilix 100% Eficaz Contra Formiga Carrapatos Pulgas Barata",
    preco: "R$40,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_715449-MLA99883960203_112025-F.webp",
  },
  {
    nome: "Formiline 500 mL",
    preco: "R$35,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_769817-MLB108905614108_032026-F.webp",
  },
  {
    nome: "Seringa 5mL com agulha",
    preco: "R$1,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_764215-MLA92283299012_092025-F.webp",
  },
  {
    nome: "Seringa 20mL com agulha",
    preco: "R$5,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_636268-MLA79648126853_092024-F.webp",
  },
  {
    nome: "Soro Ringer com Lactato 1000 mL",
    preco: "R$25,00",
    imagem:
      "https://acdn-us.mitiendanube.com/stores/001/945/313/products/design-sem-nome-2025-04-08t164440-484-a75ff429387823d96e17441414858531-1024-1024.webp",
  },
  {
    nome: "Ratokill Soft Bait sachê 10g Insetimax",
    preco: "R$2,00",
    imagem:
      "https://img.irroba.com.br/fit-in/600x600/filters:format(webp):fill(fff):quality(80)/agroeioa/catalog/2021052517-ratokill-soft-bait.jpg",
  },
  {
    nome: "Raticida Pik-Rato Girassol 25 g",
    preco: "R$2,00",
    imagem:
      "https://cdn.petbontrato.com.br/cache/catalog/HIMG465190-650x650.JPG",
  },
  {
    nome: "Raticida Pik-Rato 25 g",
    preco: "R$2,00",
    imagem: "https://cdn.ciadopet.net/cache/catalog/HIMG18527-650x650.JPG",
  },
  {
    nome: "Raticida Granulado Kellmat 25 g",
    preco: "R$3,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_974164-MLB96512963284_112025-O.webp",
  },
  {
    nome: "Klerat Mata Ratos Granulado 25 g",
    preco: "R$3,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_968386-MLU74367059376_022024-O.webp",
  },
  {
    nome: "Klerat Parafinado (Bloco de 20g)",
    preco: "R$3,00",
    imagem: "https://tdppragas.com.br/wp-content/uploads/2019/10/klerat.jpg",
  },
  {
    nome: "Cola Rato Ratoeira Adesiva",
    preco: "R$7,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_827182-MLB113892542598_072026-F.webp",
  },
  {
    nome: "Veneno Talfon Top 1 Kg",
    preco: "R$39,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_898336-MLB92249600154_092025-F-veneno-carrapato-estrela-talfon-top-1-kg.webp",
  },
  {
    nome: "Veneno Talfon Top 100 g",
    preco: "R$10,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_996288-MLA99903551315_112025-F.webp",
  },
  {
    nome: "Lesmicida 50 g",
    preco: "R$10,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/1446277/isca_lesma_pikapau_50g_1_20260622164058_d3845aec422c.jpeg",
  },
  {
    nome: "Matt Pulgões 5x10g",
    preco: "R$15,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_713860-MLB73706506165_122023-F-controle-de-pulgoes-cochonilha-em-hortas-flores-e-afins.webp",
  },
  {
    nome: "Pó Antipulgas Kelldrin 250g Para Pulgas Carrapatos E Piolhos",
    preco: "R$10,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_822795-MLA96417811423_102025-F.webp",
  },
  {
    nome: "Iscanill Formicida Isca Granulada (50 gramas)",
    preco: "R$2,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_814167-MLB115252756171_072026-F.webp",
  },
  {
    nome: "Tecnocell Formicel 10g",
    preco: "R$15,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_758127-MLA110846702553_042026-F.webp",
  },
];

const produtosAcessorios = [
  {
    nome: "Cone para Cães",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_885530-MLA99614018122_122025-F.webp",
  },
  {
    nome: "Shampoo e Condicionador 6 em 1 KellDrin 500mL",
    preco: "R$20,00",
    imagem: "https://kelldrin.com.br/wp-content/uploads/2020/11/matt.jpg",
  },
  {
    nome: "Shampoo E Condicionador Dog Show 500mL",
    preco: "R$20,00",
    imagem:
      "https://down-br.img.susercontent.com/file/95b8ef5b3338803d5913fb4be76139da@resize_w900_nl.webp",
  },
  {
    nome: "Shampoo & Condicionador Clorexidina 500mL",
    preco: "R$30,00",
    imagem:
      "https://kelldrin.com.br/wp-content/uploads/2020/11/TODOS-OS-PRODUTOS-KELLDRIN-2020-1800x1800px-02-53-300x300.jpg",
  },
  {
    nome: "Shampoo Sarnicida e Antipulgas MATACURA 200mL",
    preco: "R$25,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/752354/shampoo_matacura_sarnicida_e_antipulgas_200ml_3931_1_1a2f8ef9acece5b99abce97e6b9b7089.jpg",
  },
  {
    nome: "Shampoo Neutro MATACURA 200mL",
    preco: "R$20,00",
    imagem: "https://images.petz.com.br/fotos/1601493607855.jpg",
  },
  {
    nome: "Pet Clean Kit Adestrador Pipi Certo + Xixi Não Cães E Gatos",
    preco: "R$25,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_745689-MLB111358114450_052026-F-pet-clean-kit-adestrador-pipi-certo--xixi-nao-caes-e-gatos.webp",
  },
  {
    nome: "Peitoral para Cães",
    preco: "R$50,00",
    imagem: "assets/img/Peitoral.PNG",
  },
  { nome: "Guia para Cães", preco: "R$20,00", imagem: "assets/img/Guia.PNG" },
  {
    nome: "Peitoral PitBull",
    preco: "R$80,00",
    imagem: "assets/img/Peitoral%20PitBull.PNG",
  },
  {
    nome: "Coleira Pit Bull",
    preco: "R$60,00",
    imagem: "assets/img/Coleira%20Pit%20Bull.PNG",
  },
  {
    nome: "Roupinhas Cachorro e Gato Número 0 ao 5 Soft",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_680167-MLB108177244901_032026-F-roupinhas-soft-inverno-cachorro-e-gato-roupas-sortidas.webp",
  },
  {
    nome: "Roupinhas Cachorro e Gato Número 6 ao 7",
    preco: "R$25,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_680167-MLB108177244901_032026-F-roupinhas-soft-inverno-cachorro-e-gato-roupas-sortidas.webp",
  },
  {
    nome: "Roupinhas Cachorro e Gato Número 8 ao 9",
    preco: "R$30,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_680167-MLB108177244901_032026-F-roupinhas-soft-inverno-cachorro-e-gato-roupas-sortidas.webp",
  },
  {
    nome: "Roupinhas Cachorro e Gato Tamanho PP (Pet SU)",
    preco: "R$30,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_668376-MLB108370204493_032026-F-kit-3-roupa-para-cachorro-inverno-pet-quentinha-tam-0-ao-18.webp",
  },
  {
    nome: "Roupinhas Cachorro e Gato Tamanho P (Pet SU)",
    preco: "R$35,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_668376-MLB108370204493_032026-F-kit-3-roupa-para-cachorro-inverno-pet-quentinha-tam-0-ao-18.webp",
  },
  {
    nome: "Roupinhas Cachorro e Gato Tamanho M ao G (Pet SU)",
    preco: "R$40,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_668376-MLB108370204493_032026-F-kit-3-roupa-para-cachorro-inverno-pet-quentinha-tam-0-ao-18.webp",
  },
  {
    nome: "Focinheira Plástica 1 ao 5",
    preco: "R$10,00",
    imagem: "assets/img/Focinheira%20Pl%C3%A1stica%201%20ao%205.PNG",
  },
  {
    nome: "Focinheira de Couro Número 4",
    preco: "R$40,00",
    imagem:
      "https://assets.sistemawbuy.com.br/arquivos/88cca1c274a17df60c0b7f1a6bc3b38e/produtos/652d7ba13c58e/dd1358e613918a58b2ba82c9cc5da76f-652d7ba175113.png",
  },
  {
    nome: "Focinheira de Couro Número 6",
    preco: "R$50,00",
    imagem:
      "https://assets.sistemawbuy.com.br/arquivos/88cca1c274a17df60c0b7f1a6bc3b38e/produtos/652d7ba13c58e/dd1358e613918a58b2ba82c9cc5da76f-652d7ba175113.png",
  },
  {
    nome: "Coleira Forrada Número 1",
    preco: "R$5,00",
    imagem: "assets/img/Coleira%20Forrada.PNG",
  },
  {
    nome: "Coleira Forrada Número 2",
    preco: "R$7,00",
    imagem: "assets/img/Coleira%20Forrada.PNG",
  },
  {
    nome: "Coleira Forrada Número 4",
    preco: "R$10,00",
    imagem: "assets/img/Coleira%20Forrada.PNG",
  },
  {
    nome: "Coleira Forrada Número 5",
    preco: "R$12,00",
    imagem: "assets/img/Coleira%20Forrada.PNG",
  },
  {
    nome: "Coleira Forrada Número 7",
    preco: "R$18,00",
    imagem: "assets/img/Coleira%20Forrada.PNG",
  },
  {
    nome: "Coleira Forrada Número 9",
    preco: "R$25,00",
    imagem: "assets/img/Coleira%20Forrada.PNG",
  },
  {
    nome: "Coleira Forrada Número 10",
    preco: "R$35,00",
    imagem: "assets/img/Coleira%20Forrada.PNG",
  },
  {
    nome: "Guia de Corda com Mola",
    preco: "R$25,00",
    imagem: "assets/img/Guia%20de%20Corda%20com%20Mola.PNG",
  },
  {
    nome: "Guia de Corda sem Mola",
    preco: "R$20,00",
    imagem: "assets/img/Guia%20de%20Corda%20sem%20Mola.PNG",
  },
  {
    nome: "Cartela de Coleira ( 1 Unidade Coleira)",
    preco: "R$10,00",
    imagem: "assets/img/Cartela%20de%20Coleira.PNG",
  },
  {
    nome: "Chicle Bone  (1 Unidade)",
    preco: "R$5,00",
    imagem: "assets/img/Chicle%20Bone.PNG",
  },
  {
    nome: "Bolinha Brinquedo (1 Unidade)",
    preco: "R$5,00",
    imagem: "assets/img/Bolinha%20Brinquedo.PNG",
  },
  {
    nome: "Rasqueadeira Cerdas de Aço",
    preco: "R$20,00",
    imagem: "assets/img/Rasqueadeira%20Cerdas%20de%20A%C3%A7o.PNG",
  },
  {
    nome: "Escova Dupla Cabo Madeira",
    preco: "R$20,00",
    imagem: "assets/img/Escova%20Dupla%20Cabo%20Madeira.PNG",
  },
  {
    nome: "Comedouro Alumínio Pesado 700mL",
    preco: "R$28,00",
    imagem: "assets/img/Comedouro%20Alum%C3%ADnio%20Pesado.PNG",
  },
  {
    nome: "Comedouro Alumínio Pesado 2300mL",
    preco: "R$60,00",
    imagem: "assets/img/Comedouro%20Alum%C3%ADnio%20Pesado.PNG",
  },
  {
    nome: "Comedouro Plástico Básico",
    preco: "R$10,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/1244565/comedouro_e_bebedouro_filhote_antiformiga_200ml_8249_1_5bf03b53ba15c7acfc3865e1d99b63ce.jpg",
  },
  {
    nome: "Comedouro Plástico Grande",
    preco: "R$15,00",
    imagem:
      "https://http2.mlstatic.com/D_Q_NP_2X_854017-MLB100838624031_122025-P.webp",
  },
  {
    nome: "Comedouro Cocker 850 mL",
    preco: "R$10,00",
    imagem: "assets/img/Comedouro%20Coker%20850.PNG",
  },
  {
    nome: "Comedouro Plástico Elevado Gatos Cores150ml",
    preco: "R$15,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/1059813/comedouro_plastico_elevado_gatos_rosa_150ml_33848_1_38520de43df803b38665fbae4b2f7688.png",
  },
  {
    nome: "Cama Retangular Siliconada P",
    preco: "R$80,00",
    imagem: "assets/img/Cama%20Retangular%20Siliconada.PNG",
  },
  {
    nome: "Cama Retangular Siliconada M",
    preco: "R$100,00",
    imagem: "assets/img/Cama%20Retangular%20Siliconada.PNG",
  },
  {
    nome: "Cama Quadrada M",
    preco: "R$80,00",
    imagem:
      "https://cdn.awsli.com.br/2500x2500/2705/2705488/produto/259176146/cama-para-cachorro-quadrada-oxford-vermelho-czqh0stk0t.png",
  },
  {
    nome: "Conjunto Colchonete c/ Ziper N⁰",
    preco: "R$20,00",
    imagem: "assets/img/Conjunto%20Colchonete%20com%20Ziper.PNG",
  },
  {
    nome: "Conjunto Colchonete c/ Ziper N¹",
    preco: "R$25,00",
    imagem: "assets/img/Conjunto%20Colchonete%20com%20Ziper.PNG",
  },
  {
    nome: "Conjunto Colchonete c/ Ziper N²",
    preco: "R$30,00",
    imagem: "assets/img/Conjunto%20Colchonete%20com%20Ziper.PNG",
  },
  {
    nome: "Conjunto Colchonete c/ Ziper N³",
    preco: "R$35,00",
    imagem: "assets/img/Conjunto%20Colchonete%20com%20Ziper.PNG",
  },
  {
    nome: "Conjunto Colchonete c/ Ziper N⁴",
    preco: "R$40,00",
    imagem: "assets/img/Conjunto%20Colchonete%20com%20Ziper.PNG",
  },
  {
    nome: "Conjunto Cama Econômica N⁴",
    preco: "R$40,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_783943-MLB87571744517_072025-F-cama-de-cachorro-cama-pet-e-gato-europa-tamanho-grande.webp",
  },
  {
    nome: "Conjunto Cama Econômica N³",
    preco: "R$35,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_783943-MLB87571744517_072025-F-cama-de-cachorro-cama-pet-e-gato-europa-tamanho-grande.webp",
  },
  {
    nome: "Conjunto Cama Iglu G",
    preco: "R$80,00",
    imagem: "assets/img/Conjunto%20Cama%20Iglu.PNG",
  },
  {
    nome: "Conjunto Cama Iglu M",
    preco: "R$70,00",
    imagem: "assets/img/Conjunto%20Cama%20Iglu.PNG",
  },
  {
    nome: "Casinha Iglu Ecológica N²",
    preco: "R$120,00",
    imagem: "assets/img/Casinha%20Iglu%20Ecol%C3%B3gica.PNG",
  },
  {
    nome: "Casinha Iglu Ecológica N¹",
    preco: "R$90,00",
    imagem: "assets/img/Casinha%20Iglu%20Ecol%C3%B3gica.PNG",
  },
  {
    nome: "Casinha Iglu Ecológica N⁰",
    preco: "R$70,00",
    imagem: "assets/img/Casinha%20Iglu%20Ecol%C3%B3gica.PNG",
  },
  {
    nome: "Tratador Silvester Ecológico",
    preco: "R$50,00",
    imagem: "assets/img/Tratador%20Silvester%20Ecol%C3%B3gico.PNG",
  },
  {
    nome: "Casa Plástica N⁷",
    preco: "R$590,00",
    imagem: "assets/img/Casa%20Pl%C3%A1stica.PNG",
  },
  {
    nome: "Casa Plástica N⁴",
    preco: "R$240,00",
    imagem: "assets/img/Casa%20Pl%C3%A1stica.PNG",
  },
  {
    nome: "Casa Plástica N³",
    preco: "R$150,00",
    imagem: "assets/img/Casa%20Pl%C3%A1stica.PNG",
  },
  {
    nome: "Casa Plástica N²",
    preco: "R$100,00",
    imagem: "assets/img/Casa%20Pl%C3%A1stica.PNG",
  },
  {
    nome: "Transporte para Cães e Gatos N⁵",
    preco: "R$90,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_605297-MLB51523303011_092022-F-kit-03-caixas-de-transporte-caes-e-gatos-n1-n2-n3-promocao.webp",
  },
  {
    nome: "Transporte para Cães e Gatos N¹",
    preco: "R$50,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_605297-MLB51523303011_092022-F-kit-03-caixas-de-transporte-caes-e-gatos-n1-n2-n3-promocao.webp",
  },
  {
    nome: "Ossinhos  1 Unidade",
    preco: "R$1,00",
    imagem: "assets/img/Ossinhos.PNG",
  },
  { nome: "Osso para Cães", preco: "R$5,00", imagem: "assets/img/osso.PNG" },
  {
    nome: "Osso Couro Bovino Pequeno Porte",
    preco: "R$13,00",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqvXZv_UA5pwjCwa3FPx48_KXTnyPf2R8VnGULgJ0rxg&s=10",
  },
  {
    nome: "Osso Couro Bovino Médio Porte",
    preco: "R$17,00",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqvXZv_UA5pwjCwa3FPx48_KXTnyPf2R8VnGULgJ0rxg&s=10",
  },
  {
    nome: "Osso Couro Bovino Grande Porte",
    preco: "R$20,00",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqvXZv_UA5pwjCwa3FPx48_KXTnyPf2R8VnGULgJ0rxg&s=10",
  },
  {
    nome: "PureSnacks Osso Defumado Femur",
    preco: "R$50,00",
    imagem:
      "https://www.petlove.com.br/images/products/304341/product/7898968234260__OSSO_SUINO_IMAGEM_FRONTAL.jpg?1771224524",
  },
  {
    nome: "PureSnacks Osso Defumado Úmero",
    preco: "R$45,00",
    imagem:
      "https://www.petlove.com.br/images/products/304341/product/7898968234260__OSSO_SUINO_IMAGEM_FRONTAL.jpg?1771224524",
  },
  {
    nome: "Pneu Brinquedo Hard Preto Grande",
    preco: "R$30,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_820241-MLB77481550511_072024-F-pneu-brinquedo-hard-preto-mini-8cm.webp",
  },
  {
    nome: "Pneu Brinquedo Hard Preto Médio",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_820241-MLB77481550511_072024-F-pneu-brinquedo-hard-preto-mini-8cm.webp",
  },
  {
    nome: "Pneu Brinquedo Hard Preto Pequeno",
    preco: "R$15,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_820241-MLB77481550511_072024-F-pneu-brinquedo-hard-preto-mini-8cm.webp",
  },
  {
    nome: "Correntes para Cães N⁷",
    preco: "R$10,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/554605/kit_12_pc_corrente_cao_galvanizado_1_20mm_no_7_ws_correntes_80633_1_ff93264981b5ff510f0faad03902dc82.jpg",
  },
  {
    nome: "Correntes para Cães N⁴",
    preco: "R$15,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/554605/kit_12_pc_corrente_cao_galvanizado_1_20mm_no_7_ws_correntes_80633_1_ff93264981b5ff510f0faad03902dc82.jpg",
  },
  {
    nome: "Correntes para Cães N 2/0",
    preco: "R$30,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/554605/kit_12_pc_corrente_cao_galvanizado_1_20mm_no_7_ws_correntes_80633_1_ff93264981b5ff510f0faad03902dc82.jpg",
  },
  {
    nome: "Enforcadeira",
    preco: "R$25,00",
    imagem:
      "https://down-br.img.susercontent.com/file/8e485b6b800f7f5f8cd038a385b44ad3",
  },
  {
    nome: "Gaiola para Hamster",
    preco: "R$50,00",
    imagem:
      "https://www.terradospassaros.com/loja/images/7560_gg.jpg?v=20211005120841",
  },
  {
    nome: "Serragem solta 350g",
    preco: "R$15,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/573283/serragem_forrao_solta_pct_350g_1_20260703165226_5134b44edee5.jpg",
  },
  {
    nome: "Serragem prensada 800g",
    preco: "R$15,00",
    imagem:
      "https://cdn.awsli.com.br/600x450/1577/1577097/produto/283563465/maravalha-prensada-19lc73xmio.png",
  },
  {
    nome: "Feno Solto FMS PET 500g",
    preco: "R$20,00",
    imagem:
      "https://petmania.phbshop.com.br/_core/_uploads/289/2025/05/0009280525178kejb96d.jpg",
  },
  {
    nome: "Comedouro 2 Furos com Gancho M",
    preco: "R$5,00",
    imagem:
      "https://mundodospassaros.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/o/r/orn_192.jpg",
  },
  {
    nome: "Comedouro 2 Furos com Gancho G",
    preco: "R$6,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/815630/90_comedouro_com_gancho_2_furos_cristal_100ml_jel_plast_11275_variacao_1457_2_95136b1f513d0d538cf069c2e07d5234.jpg",
  },
  {
    nome: "Comedouro 2 Furos sem Gancho G",
    preco: "R$6,00",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlasDU9R5KmC4H6XT_fovasb8L3xcRVT0e8g5sw1MEw&s",
  },
  {
    nome: "Comedouro 2 Furos com Poleiro e Gancho P",
    preco: "R$10,00",
    imagem:
      "https://zooline.com.br/uploads/produto_fotos/20230703182958_60.png",
  },
  {
    nome: "Comedouro Meia Lua Para Pássaros",
    preco: "R$4,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_711547-MLB76110500747_042024-F-comedouro-meia-lua-para-passaros--alvorada--40ml.webp",
  },
  {
    nome: "Comedouro Meia Lua Ambar",
    preco: "R$10,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/1326328/comedouro_meia_lua_ambar_60ml_animalplast_2127_1_a00afcd3621228cf35a27b2cf6e27af4.jpg",
  },
  {
    nome: "Comedouro Com Aba Lateral",
    preco: "R$5,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_971391-MLB87186143374_072025-F-kit-6-unidades-comedouro-com-aba-lateral-para-gaiola.webp",
  },
  {
    nome: "Comedouro Alumínio Alça Fixa M",
    preco: "R$10,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/554605/kit_12_pc_comedouro_aluminio_passaro_caneca_grande_com_aba_fuzil_80535_1_8117882692df87e8ce4a833b53c69b34.jpg",
  },
  {
    nome: "Comedouro Alumínio Alça Fixa G",
    preco: "R$10,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/554605/kit_12_pc_comedouro_aluminio_passaro_caneca_grande_com_aba_fuzil_80535_1_8117882692df87e8ce4a833b53c69b34.jpg",
  },
  {
    nome: "Comedouro Alumínio Alça Fixa GG",
    preco: "R$12,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/554605/kit_12_pc_comedouro_aluminio_passaro_caneca_grande_com_aba_fuzil_80535_1_8117882692df87e8ce4a833b53c69b34.jpg",
  },
  {
    nome: "Comedouro Alumínio Borboleta",
    preco: "R$12,00",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiDt0xKAZZ88PhLlRB3q34KAn_bFovBcmA63BsfdnzwuTRPvqPMMhXpQ0&s=10",
  },
  {
    nome: "Porta Vitamina G",
    preco: "R$6,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_635165-MLB78162417660_082024-F-porta-vitamina-cristal-medio-kit-12und-aves-e-passaros.webp",
  },
  {
    nome: "Porta Vitamina M",
    preco: "R$5,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_635165-MLB78162417660_082024-F-porta-vitamina-cristal-medio-kit-12und-aves-e-passaros.webp",
  },
  {
    nome: "Porta Vitamina P",
    preco: "R$3,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_635165-MLB78162417660_082024-F-porta-vitamina-cristal-medio-kit-12und-aves-e-passaros.webp",
  },
  {
    nome: "Porta Vitamina P C/ Poleiro Gaiola Cristal",
    preco: "R$6,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_826435-MLB41717384070_052020-F-kit-12-unidades-porta-vitamina-c-poleiro-gaiola-cristal.webp",
  },
  {
    nome: "Bebedouro Pássaro Medio 95 mL",
    preco: "R$5,00",
    imagem:
      "https://www.terradospassaros.com/loja/images/3319_gg.jpg?v=20221213135158",
  },
  {
    nome: "Bebedouro Pássaro Caçula 60 mL",
    preco: "R$3,00",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNl8023T_8WPjlbnGPs1YNjwhy3J6EKPWQpbl4oUgKOL0ICoT2T2zUbU2q&s=10",
  },
  {
    nome: "Bebedouro Pássaro Grande 200 mL",
    preco: "R$8,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_950803-MLB108500919869_032026-F-bebedouro-grande-200ml-p-sabia-passaro-preto--6-unidades.webp",
  },
  {
    nome: "Bebedouro Pássaro Malha Fina",
    preco: "R$5,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_848250-MLB41572868871_042020-F-kit-30-unidades-bebedouro-original-peq-para-gaiola-malha-fin.webp",
  },
  {
    nome: "Banheira Pássaro Cristal Oval Pequena",
    preco: "R$5,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_970567-MLB42521909295_072020-F-banheira-p-passarinho-aves-oval-cristal-pequena-12-un.webp",
  },
  {
    nome: "Banheira Pássaro Cristal Oval Média",
    preco: "R$5,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_942129-MLB75931962267_042024-O.webp",
  },
  {
    nome: "Banheira Pássaro Cristal Oval Grande",
    preco: "R$10,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/928979/90_banheira_clone_78_oval_cristal_p_01un_c3_95_3265_1_c09f54229934ea85441ead9e183542d8.png",
  },
  {
    nome: "Banheira Grande Com Poleiro E Gancho Média",
    preco: "R$12,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_733886-MLB100668410150_122025-F-banheira-grande-com-poleiro-e-gancho-400ml.webp",
  },
  {
    nome: "Banheira Grande Com Poleiro E Gancho Grande",
    preco: "R$12,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_733886-MLB100668410150_122025-F-banheira-grande-com-poleiro-e-gancho-400ml.webp",
  },
  {
    nome: "Porta Ovo Leitoso",
    preco: "R$1,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_884578-MLB44007305557_112020-F-kit-12-porta-ovo-branco-ornamental--passaros-e-aves.webp",
  },
  {
    nome: "Ninho Juta Canário Roller 10,0 Diam. X G",
    preco: "R$15,00",
    imagem:
      "https://irapurupetcenter.com.br/wp-content/uploads/2021/01/NINHO-JUTA-CANARIO-BELGA.webp",
  },
  {
    nome: "Ninho Juta Canário Roller M",
    preco: "R$15,00",
    imagem:
      "https://irapurupetcenter.com.br/wp-content/uploads/2021/01/NINHO-JUTA-CANARIO-BELGA.webp",
  },
  {
    nome: "Ninho Coleiro Juta",
    preco: "R$8,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/815630/ninho_coleiro_juta_com_bucha_tradicional_8711_1_99e07d66eb95fdd836ad31d53465a461.jpg",
  },
  {
    nome: "Ninho Coleiro Bola - 2 Saídas",
    preco: "R$12,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/815630/ninho_coleiro_bola_2_saidas_6669_1_20220329093140.jpg",
  },
  {
    nome: "Ninho Coleiro Simples",
    preco: "R$10,00",
    imagem:
      "https://anilhascapri.com.br/assets/arquivos/produtos/775db9c58b7a0a00345ac1c0e753dd10.png",
  },
  {
    nome: "Palha para Ninho",
    preco: "R$5,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_963210-MLB111302104018_052026-F-palha-p-ninho-passaros-substrato-de-fibra-de-coco-5-unids.webp",
  },
  {
    nome: "Ninho Comum de Pano",
    preco: "R$5,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/1326328/forro_de_pano_para_ninho_comum_toco_tucano_2265_1_87e9083b5c6fdefc1189a0b629aab6a4.jpg",
  },
  {
    nome: "Ninho para Calopsita",
    preco: "R$30,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_953327-MLB115391938125_072026-F-ninho-p-calopsita--mdf-para-gaiola-viveiros-porta-deslizante.webp",
  },
  {
    nome: "Ninho de Periquito",
    preco: "R$20,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/1326328/ninho_de_madeira_horizontal_para_periquito_australiano_2513_1_4a728a17f0f43c3ff8ecda5b0ea95414.jpg",
  },
  {
    nome: "Transporte de Madeira para Pássaros",
    preco: "R$20,00",
    imagem:
      "https://down-br.img.susercontent.com/file/b8cc7bb78cb3df5d520875c2d24d4c5b",
  },
  {
    nome: "Forro para Gaiola",
    preco: "R$7,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_801039-MLB93644263689_092025-F-kit-12-capa-saia-forro-fundo-de-gaiola-passarinhos.webp",
  },
  {
    nome: "Bebedouros Beija Flores Grande",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_709866-MLA110512779827_042026-F.webp",
  },
  {
    nome: "Bebedouros Beija Flores Pequeno",
    preco: "R$10,00",
    imagem:
      "https://www.injetfour.com.br/produtos/beija-flor-ecologico-simples/foto",
  },
  {
    nome: "KIT Bebedouro e Comedouro Calopsita N3 Rosa",
    preco: "R$16,00",
    imagem:
      "https://cdn.awsli.com.br/300x300/2561/2561564/produto/20977454966db797ee9.jpg",
  },
  {
    nome: "KIT Bebedouro e Comedouro Calopsita N3 Verde",
    preco: "R$16,00",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu9M-kiEa33ONbHiSW9TeIBiNEAPW0cPKjmDp7ruat8g&s=10",
  },
  {
    nome: "Banheira para Calopsita 1Litro",
    preco: "R$24,00",
    imagem:
      "https://dasilvasauro.vtexassets.com/arquivos/ids/157881/ban009-banheira-p-calopsita-1l-01.jpg?v=638037931332170000",
  },
  {
    nome: "Banheira Decorada 450mL",
    preco: "R$13,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_773639-MLA100072970393_122025-F.webp",
  },
  {
    nome: "Comedouro Aves Pequeno",
    preco: "R$15,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_600677-MLB79463404555_092024-F-comedouro-codorna-pintinho-aves-alimentador-automatico-750ml.webp",
  },
  {
    nome: "Comedouro Aves 1.5kg Capacidade",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_697459-MLB73869056566_012024-F-comedouro-aves-frango-codorna-pintinho-15kg-galo-galinheiro.webp",
  },
  {
    nome: "Comedouro Aves 5kg Capacidade",
    preco: "R$30,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_697459-MLB73869056566_012024-F-comedouro-aves-frango-codorna-pintinho-15kg-galo-galinheiro.webp",
  },
  {
    nome: "Bebedouro Ecológico 2L",
    preco: "R$20,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/101757/180_bebedouro_automatico_para_aves_2_litros_1136_1_8a0c96783cc8d1c50189fc2dedb56eee.jpg",
  },
  {
    nome: "Bebedouro 5L Pet",
    preco: "R$30,00",
    imagem: "https://files.terrazoo.com.br/uploads/2017/08/83992015145945.jpg",
  },
  {
    nome: "Ferraduras West Vários Tamanhos",
    preco: "R$45,00",
    imagem: "https://http2.mlstatic.com/D_718137-MLB91309635026_092025-C.jpg",
  },
  {
    nome: "Cravos Unidades",
    preco: "R$0,50",
    imagem:
      "https://cdn.awsli.com.br/300x300/123/123918/produto/3830767/84726e8e98.jpg",
  },
  {
    nome: "Kit Gato 3 Peças: Bandeja, Pá e Comedouro Prático",
    preco: "R$25,00",
    imagem:
      "https://down-br.img.susercontent.com/file/br-11134207-81ztc-mjmszvjza1aa07",
  },
  {
    nome: "Areia Mr Miau Higiênico para Gatos 4KG",
    preco: "R$5,00",
    imagem: "https://m.media-amazon.com/images/I/61A1evSf5uL._AC_SX679_.jpg",
  },
  {
    nome: "Areia Le Cat Sanitária para Gatos 4KG",
    preco: "R$8,00",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE6utPHDd_uzXaqhOCg6AgoE8a5n25ZTlOMwr9bBUsndG10Eboy0Ra89o&s=10",
  },
  {
    nome: "Areia Kets Sanitária para Gatos 4KG",
    preco: "R$10,00",
    imagem: "https://m.media-amazon.com/images/I/71geEuopXUL._AC_SX679_.jpg",
  },
  {
    nome: "Areia Pury Cat Granulado Sanitário para Gatos 4KG",
    preco: "R$8,00",
    imagem:
      "https://down-br.img.susercontent.com/file/sg-11134201-8262q-mjg9r4e7ncw038@resize_w900_nl.webp",
  },
  {
    nome: "Areia Healthy Cat Granulado Higiênico para Gatos 4KG",
    preco: "R$12,00",
    imagem:
      "https://www.passaromix.com.br/wpmix/wp-content/uploads/2020/04/img-20180306-wa0026-10426-97069_std.jpg",
  },
  {
    nome: "Areia Gatíssimo Sanitária Premium Perfumada 4KG",
    preco: "R$15,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_922719-MLB110563544159_042026-F-areia-para-gatos-gatissimo-alfa-pet-4kg.webp",
  },
  {
    nome: "Areia CarePet Premium Granulada de Madeira 2,5KG",
    preco: "R$20,00",
    imagem: "https://images.petz.com.br/fotos/1660658094727.jpg",
  },
  {
    nome: "Areia Ipet Woods Granulado Higiênico De Madeira 2KG",
    preco: "R$12,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_840122-MLA100074812011_122025-F.webp",
  },
  {
    nome: "Areia Higiênica Micro Cristais de Sílica Jambo Pet 1,8 kg",
    preco: "R$40,00",
    imagem:
      "https://cobasi.vteximg.com.br/arquivos/ids/1068838/Areia-Higienica-Micro-Cristais-de-Silica-Jambo-Pet.png?v=638768032360370000",
  },
  {
    nome: "Chapéu de Palha Fina Simples Karanda",
    preco: "R$30,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/652260/chapeu_de_palha_fina_aba_10_caranda_copa_panama_teknoluvas_5838_1_9c3f54bd6a1bf219f6c3e8f00fccc303.jpg",
  },
  {
    nome: "Chapéu de Palha Ponaneiro",
    preco: "R$30,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/1023012/chapeu_de_palha_simples_1073_1_1d21837ac79742ea77c3b2405008acfd.png",
  },
  {
    nome: "Chapéu de Palha Gigantinho",
    preco: "R$30,00",
    imagem: "https://cdn.distribuidoralopes.com.br/produtos/33846/33846.jpg",
  },
  {
    nome: "Chapéu De Palha Festa Junina Com Renda Trancinhas",
    preco: "R$30,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_698859-MLB110420610045_042026-F-chapeu-de-palha-festa-junina-com-renda-rosa-e-trancinhas.webp",
  },
  {
    nome: "Chapéu De Palha Infantil Com Fita Colorida Festa Junina",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_956532-MLB69777713895_062023-F-chapeu-de-palha-infantil-com-fita-colorida-festa-junina.webp",
  },
  {
    nome: "Chapéu Pescador Proteção",
    preco: "R$20,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_921874-MLB102294173505_122025-F-chapeu-pescador-australiano-c-capuz-proteco-solar-de-nuca.webp",
  },
  {
    nome: "Bone Texas Farm Sortidos",
    preco: "R$60,00",
    imagem:
      "https://texasfarmstore.cdn.magazord.com.br/img/2024/12/produto/19779/79598.jpg?ims=fit-in/800x800",
  },
  {
    nome: "Cinto Couro Legítimo Preto",
    preco: "R$40,00",
    imagem:
      "https://cdn.awsli.com.br/2500x2500/2568/2568881/produto/304608856/imagem-do-whatsapp-de-2024-09-09---s--15-03-13_769d294d-hybf6trts9.jpg",
  },
  {
    nome: "Cinto Couro Legítimo Marrom",
    preco: "R$30,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/559497/personalizvel_cinto_de_couro_premium_com_fivela_1_20260805175002_ae8a8c92318b.jpeg",
  },
  {
    nome: "Botina Masculina Country EF Prime Modelo 1",
    preco: "R$139,00",
    imagem: "assets/img/botina%201.jfif",
  },
  {
    nome: "Botina Masculina Country EF Prime Modelo 2",
    preco: "R$139,00",
    imagem: "assets/img/botina%202.jfif",
  },
  {
    nome: "Botina Masculina Country EF Prime Modelo 3",
    preco: "R$139,00",
    imagem: "assets/img/botina%203.jfif",
  },
  {
    nome: "Botina Masculina Country EF Prime Modelo 4",
    preco: "R$139,00",
    imagem: "assets/img/botina%204.jfif",
  },
  {
    nome: "Botina Masculina Country EF Prime Modelo 5",
    preco: "R$139,00",
    imagem: "assets/img/botina%205.jfif",
  },
  {
    nome: "Botina Masculina Country EF Prime Modelo 6",
    preco: "R$139,00",
    imagem: "assets/img/botina%207.jfif",
  },
  {
    nome: "Botina Masculina Country EF Prime Infantil",
    preco: "R$99,00",
    imagem: "assets/img/botina%206.jfif",
  },
  {
    nome: "Botina Masculina Modelo 1",
    preco: "R$89,00",
    imagem: "assets/img/botina%208.jfif",
  },
  {
    nome: "Botina Masculina Modelo 2",
    preco: "R$89,00",
    imagem: "assets/img/botina%209.jfif",
  },
  {
    nome: "Cabresto De Corda Poli Regulável",
    preco: "R$50,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_768133-MLB95625272614_102025-F-kit-4-cabrestos-de-corda-poli-regulavel-12mm-para-cavalos.webp",
  },
  {
    nome: "Manta Baixeiro",
    preco: "R$80,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_766087-MLB95526287870_102025-F-manta-baixeiro-selas-e-arreios-cavalo-mangalarga-reforcado.webp",
  },
  {
    nome: "Viveiro Duplo Standard N15 53 x 118 x 40",
    preco: "R$299,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_801378-MLB115616121943_082026-F-viveiro-grande-gaiola-dupla-periquito-canario-zincado-com-pe.webp",
  },
  {
    nome: "Viveiro Standard N14 53 x 118 x 40 Grande",
    preco: "R$279,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_903215-MLB70222660835_062023-F-gaiola-para-calopsitas-periquitos-viveiro-grande-passaros-g.webp",
  },
  {
    nome: "Viveiro Standard N11 35 x 89 x 24 Pequeno",
    preco: "R$149,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_903215-MLB70222660835_062023-F-gaiola-para-calopsitas-periquitos-viveiro-grande-passaros-g.webp",
  },
  {
    nome: "Linha-Fio De Nylon 100m 0,20mm - Ekilon",
    preco: "R$7,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_891651-MLA99600120782_122025-F.webp",
  },
  {
    nome: "Linha-Fio De Nylon 100m 0,30mm - Ekilon",
    preco: "R$8,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_829537-MLB89191050551_082025-F-fio-de-nylon-100m-030mm-pesca-artesanato.webp",
  },
  {
    nome: "Linha-Fio De Nylon 100m 0,40mm - Ekilon",
    preco: "R$9,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_829537-MLB89191050551_082025-F-fio-de-nylon-100m-030mm-pesca-artesanato.webp",
  },
  {
    nome: "Linha-Fio De Nylon 100m 0,60mm - Ekilon",
    preco: "R$10,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_829537-MLB89191050551_082025-F-fio-de-nylon-100m-030mm-pesca-artesanato.webp",
  },
  {
    nome: "Boia Isopor Pesca Pequena",
    preco: "R$0,50",
    imagem:
      "https://dcdn-us.mitiendanube.com/stores/003/983/415/products/boia-de-isopor-pesca-5ebfc622a6bfec816b17796716937462-1024-1024.webp",
  },
  {
    nome: "Boia Isopor Pesca Média",
    preco: "R$1,00",
    imagem:
      "https://dcdn-us.mitiendanube.com/stores/003/983/415/products/boia-de-isopor-pesca-5ebfc622a6bfec816b17796716937462-1024-1024.webp",
  },
  {
    nome: "Boia Isopor Pesca Grande",
    preco: "R$2,00",
    imagem:
      "https://dcdn-us.mitiendanube.com/stores/003/983/415/products/boia-de-isopor-pesca-5ebfc622a6bfec816b17796716937462-1024-1024.webp",
  },
  {
    nome: "Chumbada de Pesca Mini",
    preco: "R$0,50",
    imagem:
      "https://hpmotonautica.com.br/wp-content/uploads/2023/06/CHUMBADA-OLIVA-NR-4-15-Gm.png",
  },
  {
    nome: "Chumbada de Pesca Pequena",
    preco: "R$1,00",
    imagem:
      "https://hpmotonautica.com.br/wp-content/uploads/2023/06/CHUMBADA-OLIVA-NR-4-15-Gm.png",
  },
  {
    nome: "Chumbada de Pesca Média",
    preco: "R$2,00",
    imagem:
      "https://hpmotonautica.com.br/wp-content/uploads/2023/06/CHUMBADA-OLIVA-NR-4-15-Gm.png",
  },
  {
    nome: "Chumbada de Pesca Grande",
    preco: "R$5,00",
    imagem:
      "https://hpmotonautica.com.br/wp-content/uploads/2023/06/CHUMBADA-OLIVA-NR-4-15-Gm.png",
  },
  {
    nome: "Anzol Marine Tamanhos Variados (1 unidade)",
    preco: "R$0,25",
    imagem:
      "https://cdn.awsli.com.br/800x800/363/363555/produto/13589910/c1192ef31b.jpg",
  },
  {
    nome: "Pacote Anzol Gold Osama Tamanhos Variados",
    preco: "R$5,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/496227/anzol_albatroz_gold_no_1_cartela_c_20_pecas_20071_1_05907fe548c50074fe9da60fc79b8fd4.jpg",
  },
  {
    nome: "Pacote Anzol O Pescador Tamanhos Variados",
    preco: "R$5,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_815649-MLB74214576028_012024-O.webp",
  },
  {
    nome: "Isca Artificial (1 Unidade)",
    preco: "R$16,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/496227/kit_5_iscas_artificiais_cmik_soft_10cm_6gr_11114447_1_111e1dd1908dc89b496d626a8ae4b76b.jpg",
  },
  {
    nome: "Isca Artificial (1 Unidade)",
    preco: "R$15,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/496227/kit_5_iscas_artificiais_cmik_soft_10cm_6gr_11114447_1_111e1dd1908dc89b496d626a8ae4b76b.jpg",
  },
  {
    nome: "Isca Artificial (1 Unidade)",
    preco: "R$12,50",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/496227/kit_5_iscas_artificiais_cmik_soft_10cm_6gr_11114447_1_111e1dd1908dc89b496d626a8ae4b76b.jpg",
  },
  {
    nome: "Vara de Pesca em Bambu",
    preco: "R$15,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/987957/vara_de_pesca_em_bambu_unidade_real_seda_1692807_1_d734fcdc076bec96f079a98ff2f3b32a.png",
  },
  {
    nome: "Qualis Pote 5KG",
    preco: "R$20,00",
    imagem: "assets/img/qualis%20pote.PNG",
  },
  {
    nome: "Aquário de Vidro Retangular",
    preco: "R$60,00",
    imagem: "https://images.petz.com.br/fotos/1452197467308.jpg",
  },
  {
    nome: "Aquário de Vidro Beteira",
    preco: "R$50,00",
    imagem:
      "https://down-br.img.susercontent.com/file/br-11134207-820mg-mq979llldqf5c5@resize_w900_nl.webp",
  },
  {
    nome: "Aquário de Acrílico",
    preco: "R$40,00",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHC60jFnFsBAxaFTH5QjELFP1abA3WzvCC67X6UclIjJuGFjPghC_Qza6S&s=10",
  },
  {
    nome: "Gaiola Madeira com Fibra Número 3",
    preco: "R$120,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_877966-MLU71283428337_082023-O.webp",
  },
  {
    nome: "Gaiola Madeira com Fibra Número 4",
    preco: "R$140,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_877966-MLU71283428337_082023-O.webp",
  },
  {
    nome: "Gaiola Coleiro Número 1",
    preco: "R$100,00",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/1075852/gaiola_standard_coleiro_macho_619_1_488d94cb5b764e703797b61cbd67204a.jpg",
  },
  {
    nome: "Gaiola de Arame Pequena",
    preco: "R$100,00",
    imagem:
      "https://cdn.leroymerlin.com.br/products/gaiola_de_arame_zincado_para_canario_e_passaros_semelhantes_n_1567870012_1c64_600x600.jpg",
  },
  {
    nome: "Gaiola de Arame Grande",
    preco: "R$140,00",
    imagem:
      "https://cdn.leroymerlin.com.br/products/gaiola_de_arame_zincado_para_canario_e_passaros_semelhantes_n_1567870012_1c64_600x600.jpg",
  },
  {
    nome: "Gaiola Pixarro Cocho Lateral",
    preco: "R$199,00",
    imagem: "assets/img/Gaiola%20Pixarro%20Cocho%20Lateral.jfif",
  },
  {
    nome: "Gaiola Voadeira Coleira",
    preco: "R$250,00",
    imagem: "assets/img/Gaiola%20Voadeira%20Coleira.jfif",
  },
  {
    nome: "Gaiola Voadeira Canário",
    preco: "R$240,00",
    imagem: "assets/img/Gaiola%20Voadeira%20Can%C3%A1rio.jfif",
  },
  {
    nome: "Galão Pequeno",
    preco: "R$10,00",
    imagem: "assets/img/Gal%C3%A3o%20Pequeno.jfif",
  },
  {
    nome: "Galão Grande",
    preco: "R$25,00",
    imagem: "assets/img/Gal%C3%A3o%20Grande.jfif",
  },
  {
    nome: "Cocho Cortado Pequeno",
    preco: "R$20,00",
    imagem: "assets/img/Cocho%20Cortado%20Pequeno.jfif",
  },
  {
    nome: "Cocho Cortado Pequeno 2",
    preco: "R$20,00",
    imagem: "assets/img/Cocho%20Cortado%20Pequeno%202.jfif",
  },
  {
    nome: "Cocho Cortado Grande",
    preco: "R$60,00",
    imagem: "assets/img/Cocho%20Cortado%20Grande.jfif",
  },
  {
    nome: "Tambor Modelo 1",
    preco: "R$50,00",
    imagem: "assets/img/Tambor%20Modelo%201.jfif",
  },
  {
    nome: "Tambor Modelo 2",
    preco: "R$75,00",
    imagem: "assets/img/Tambor%20Modelo%202.jfif",
  },
  {
    nome: "Tambor Modelo 3",
    preco: "R$75,00",
    imagem: "assets/img/Tambor%20Modelo%203.jfif",
  },
  {
    nome: "Tambor Modelo 4",
    preco: "R$50,00",
    imagem: "assets/img/Tambor%20Modelo%204.jfif",
  },
  {
    nome: "Tambor Modelo 5",
    preco: "R$80,00",
    imagem: "assets/img/Tambor%20Modelo%205.jfif",
  },
  {
    nome: "Kit Para Abastecimento 1000 Litros",
    preco: "R$600,00",
    imagem: "assets/img/Kit%20Para%20Abastecimento%201000%20Litros.jfif",
  },
  {
    nome: "Kit Mesa Quadrada Preta com 4 Cadeiras",
    preco: "R$299,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_740247-MLA99990680723_112025-F.webp",
  },
  {
    nome: "Aluguel Kit Mesa Quadrada ( Aluguel Diária )",
    preco: "R$15,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_740247-MLA99990680723_112025-F.webp",
  },
  {
    nome: "Mesa Quadrada Preta",
    preco: "R$99,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_985724-MLA97092892229_112025-F.webp",
  },
  {
    nome: "Cadeira Preta",
    preco: "R$59,00",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_624123-MLA97092981469_112025-F.webp",
  },
  {
    nome: "Galão de água 20L",
    preco: "R$10,00",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRARtNqNsykXhKc3pFbD0RD8a_qFDO8BSrOC22Ov9auFys5s7six15kZAmt&s=10",
  },
  {
    nome: "Galão de água 20L para Entrega",
    preco: "R$12,00",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRARtNqNsykXhKc3pFbD0RD8a_qFDO8BSrOC22Ov9auFys5s7six15kZAmt&s=10",
  },
  {
    nome: "Pelúcia Animais (1 Unidade)",
    preco: "R$15,00",
    imagem: "assets/img/Pel%C3%BAcia%20Animais.jfif",
  },
];

// const que junta todos os itens das 3 planilhas
const produtosTodos = [
  ...produtosRacoes,
  ...produtosRemedios,
  ...produtosAcessorios,
];

const listasPorCategoria = {
  racoes: produtosRacoes,
  remedios: produtosRemedios,
  acessorios: produtosAcessorios,
  todos: produtosTodos,
};

// ================== RENDERIZAÇÃO ==================
const grid = document.getElementById("grid");
const contador = document.getElementById("contador");
const semResultado = document.getElementById("semResultado");
const imgFallback = "https://via.placeholder.com/220x180.png?text=Sem+Imagem";

let categoriaAtual = "todos";

function renderizar(lista) {
  grid.innerHTML = "";
  contador.textContent = `${lista.length} produto(s) encontrado(s)`;
  semResultado.style.display = lista.length === 0 ? "block" : "none";

  lista.forEach((p) => {
    const msg = encodeURIComponent(
      `Olá! Tenho interesse no produto: ${p.nome} (${p.preco})`,
    );
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <div class="card-img">
          <img src="${p.imagem}" alt="${p.nome}" loading="lazy" onerror="this.src='${imgFallback}'">
        </div>
        <div class="card-body">
          <div class="card-title">${p.nome}</div>
          <div class="card-preco">${p.preco}</div>
          <a class="btn-comprar" href="https://wa.me/${whatsappNumero}?text=${msg}" target="_blank">
            💬 Comprar via WhatsApp
          </a>
        </div>
      `;
    grid.appendChild(card);
  });
}

function aplicarFiltros() {
  const termo = document.getElementById("busca").value.toLowerCase().trim();
  const base = listasPorCategoria[categoriaAtual];
  const filtrados = base.filter((p) => p.nome.toLowerCase().includes(termo));
  renderizar(filtrados);
}

renderizar(listasPorCategoria[categoriaAtual]);

// ================== BUSCA ==================
document.getElementById("busca").addEventListener("input", aplicarFiltros);

// ================== ABAS DE CATEGORIA ==================
const headerEl = document.getElementById("header");
const heroEl = document.getElementById("hero");
const headerTagline = document.getElementById("header-tagline");
const headerWhatsapp = document.getElementById("header-whatsapp");
const headerWhatsappText = document.getElementById("header-whatsapp-text");

const headerPadrao = {
  tagline: "Ração, saúde e acessórios para seus animais",
  whatsappText: "Fale com a loja",
  whatsappHref: `https://wa.me/${whatsappNumero}`,
};

const headerVet = {
  tagline: "Agende sua consulta com o Dr. Vet. Adriano!",
  whatsappText: "Marcar consulta",
  whatsappHref: `https://wa.me/${whatsappNumero}?text=${encodeURIComponent("Olá! Gostaria de agendar uma consulta com o Dr. Vet. Adriano.")}`,
};

function atualizarHeader(categoria) {
  const isRemedios = categoria === "remedios";
  const config = isRemedios ? headerVet : headerPadrao;
  headerEl.classList.toggle("modo-vet", isRemedios);
  heroEl.classList.toggle("modo-vet", isRemedios);
  headerTagline.textContent = config.tagline;
  headerWhatsappText.textContent = config.whatsappText;
  headerWhatsapp.href = config.whatsappHref;
}

document.getElementById("tabs").addEventListener("click", (e) => {
  const btn = e.target.closest(".tab");
  if (!btn) return;
  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.remove("active"));
  btn.classList.add("active");
  categoriaAtual = btn.dataset.cat;
  atualizarHeader(categoriaAtual);
  aplicarFiltros();
});

// ================== BOTÃO VOLTAR AO TOPO ==================
const topoBtn = document.getElementById("topo");
window.addEventListener("scroll", () => {
  topoBtn.classList.toggle("show", window.scrollY > 400);
});
