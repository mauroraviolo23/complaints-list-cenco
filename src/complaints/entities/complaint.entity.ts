import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'complaint' })
@ObjectType()
export class Complaint {

  @Field( () => ID )
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  // If we wanted to work with UUID to identify complaints. Please note that more modifications would be needed 
  // @Field( () => ID )
  // @PrimaryGeneratedColumn('uuid')
  // id: string;

  @Field( () => String )
  @Column()
  title: string;

  @Field( () => String )
  @Column()
  description: string;

  @Field( () => String )
  @Column()
  details: string;

  @Field( () => Boolean )
  @Column()
  solved: boolean;

  @Field( () => User )
  @ManyToOne(() => User, (user) => user.complaints, { nullable: false, lazy: true })
  @Index('userId-index')
  user: User;

}
