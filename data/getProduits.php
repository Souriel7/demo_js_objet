<?php

// new PDO

// select * from produit

// $produits = $stmt->fetchAll(PDO::FETCH_ASSOC);

$produits = [
    [
        "idProduit" => 1,
        "nom" => "Rhum truc<script>alert('Rami is here !!')</script>",
        "prix" => 200
    ],
    [
        "idProduit" => 2,
        "nom" => "Rhum machin",
        "prix" => 100
    ],
    [
        "idProduit" => 3,
        "nom" => "Rhum bidule",
        "prix" => 500
    ]
];

echo json_encode($produits);
