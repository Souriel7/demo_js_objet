<?php

// new PDO

// select * from produit INNER JOIN categorie on produit.idCategorie=categorie.idCategorie

// $produits = $stmt->fetchAll(PDO::FETCH_ASSOC);

$produits = [
    [
        "idProduit" => 1,
        "nom" => "Rhum truc",
        "prix" => 200,
        "categorie" => [
            "idCategorie" => 1,
            "nomCategorie" => "Rhum"
        ]
    ],
    [
        "idProduit" => 2,
        "nom" => "Rhum machin",
        "prix" => 100,
        "categorie" => [
            "idCategorie" => 1,
            "nomCategorie" => "Rhum"
        ]
    ],
    [
        "idProduit" => 3,
        "nom" => "Sucre bidule",
        "prix" => 500,
        "categorie" => [
            "idCategorie" => 2,
            "nomCategorie" => "Sucre"
        ]
    ]
];

echo json_encode($produits);
