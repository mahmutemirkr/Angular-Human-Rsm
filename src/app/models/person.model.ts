export class Person{
    id: number | undefined;
    name: string = "";
    surname: string = "";
    age: number = 0;
    gender: string = "";
    educationStatus: string = "";
    province: string = "";
    district: string = "";
    militaryStatus: string = "";
    language: string = "";
    programmingLanguage: string = "";
    hobbies: string = "";
    certificates: string = "";
    createTime: Date = new Date();

    constructor(id?: number, name: string = "", surname: string = ""){
        this.id = id;
        this.name = name;
        this.surname = surname;
    }

}