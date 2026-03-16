import { ConferencesService } from './conferences.service';
export declare class ConferencesController {
    private readonly conferencesService;
    constructor(conferencesService: ConferencesService);
    create(createConferenceDto: any): Promise<import("./schemas/conference.schema").ConferenceDocument>;
    findAll(): Promise<import("./schemas/conference.schema").ConferenceDocument[]>;
    findOne(id: string): Promise<import("./schemas/conference.schema").ConferenceDocument>;
    update(id: string, updateConferenceDto: any): Promise<import("./schemas/conference.schema").ConferenceDocument>;
    remove(id: string): Promise<any>;
}
