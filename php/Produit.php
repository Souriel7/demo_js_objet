<?php
class Produit
{
    private $idProduit;
    private $nom;
    private $prix;

    public function __construct($idProduit, $nom, $prix)
    {
        $this->idProduit = $idProduit;
        $this->nom = $nom;
        $this->prix = $prix;
    }

    public function render()
    {
        $html = "<article>";
        $html .= "<h1>" . htmlspecialchars($this->nom) . "</h1>";
        $html .= "<p>" . htmlspecialchars($this->prix) . "</p>";
        $html .= "</article>";
        return $html;
    }
}
