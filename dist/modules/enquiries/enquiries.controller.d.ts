import { EnquiriesService } from './enquiries.service';
export declare class EnquiriesController {
    private readonly enquiriesService;
    constructor(enquiriesService: EnquiriesService);
    create(createEnquiryDto: any): Promise<import("./schemas/enquiry.schema").EnquiryDocument>;
    findAll(): Promise<import("./schemas/enquiry.schema").EnquiryDocument[]>;
    findOne(id: string): Promise<import("./schemas/enquiry.schema").EnquiryDocument>;
    update(id: string, updateEnquiryDto: any): Promise<import("./schemas/enquiry.schema").EnquiryDocument>;
    remove(id: string): Promise<any>;
}
