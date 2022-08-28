class Pet {
    id: string;
    name: string;
    city: string;
    address: string;

    constructor(id: string, name:string, city:string, address: string){
        this.id = id;
        this.name = name;
        this.city= city;
        this.address= address;
    }
}

export default Pet;