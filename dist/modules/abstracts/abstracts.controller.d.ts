import { AbstractsService } from './abstracts.service';
export declare class AbstractsController {
    private readonly abstractsService;
    constructor(abstractsService: AbstractsService);
    create(createAbstractDto: any): Promise<import("./schemas/abstract.schema").AbstractDocument>;
    findAll(conferenceId?: string): Promise<import("./schemas/abstract.schema").AbstractDocument[]>;
    update(id: string, updateAbstractDto: any): Promise<import("./schemas/abstract.schema").AbstractDocument>;
}
