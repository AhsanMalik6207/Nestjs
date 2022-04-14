import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('quiz')
export class Quiz extends BaseEntity{
    @PrimaryGeneratedColumn({
        comment: "the quiz unique identifier",
    })
    id:number;

    @Column({
        type:"varchar",
    })
    title:string;

    @Column({
        type:"text",
    })
    description:string;

    @Column({
        type:'boolean',
        default:1
    })
    isActive: boolean;

    
}