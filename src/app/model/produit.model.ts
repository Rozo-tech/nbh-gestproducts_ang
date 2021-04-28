export class Produit {
    idProduit!: number;
    nomProduit : string | undefined;
    prixProduit!: number;
    dateCreation!: Date;
}

export class User{
    username:string | undefined;
    password: string | undefined;
    roles:string[] | undefined;
}