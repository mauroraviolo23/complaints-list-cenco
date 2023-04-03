import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Complaint } from 'src/complaints/entities/complaint.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users'})
@ObjectType()
export class User {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field( () => String )
  @Column()
  fullName: string;

  @Field( () => String )
  @Column({ unique: true})
  email: string;

  @Column()
  password: string;

  @Field( () => [String] )
  @Column({
    type: 'text',
    array: true,
    default: ['user']
  })
  roles: string[];

  @Field( () => Boolean )
  @Column({
    type: 'boolean',
    default: true
  })
  isActive: boolean;

  @Field( () => User, { nullable: true })
  @ManyToOne( () => User, (user) => user.lastUpdatedBy, { nullable: true, lazy: true })
  @JoinColumn({ name: 'lastUpdatedBy' })
  lastUpdatedBy?: User;

  @Field( () => [Complaint], { nullable: true })
  @OneToMany( () => Complaint, (complaint) => complaint.user, { lazy: true })
  complaints: Complaint[];
}
