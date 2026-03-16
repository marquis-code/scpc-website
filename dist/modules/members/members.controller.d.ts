import { MembersService } from './members.service';
export declare class MembersController {
    private readonly membersService;
    constructor(membersService: MembersService);
    create(createMemberDto: any): Promise<import("./schemas/member.schema").MemberDocument>;
    findAll(): Promise<import("./schemas/member.schema").MemberDocument[]>;
    findOne(id: string): Promise<import("./schemas/member.schema").MemberDocument>;
    update(id: string, updateMemberDto: any): Promise<import("./schemas/member.schema").MemberDocument>;
    remove(id: string): Promise<any>;
}
