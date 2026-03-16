import { FormsService } from './forms.service';
export declare class FormsController {
    private readonly formsService;
    constructor(formsService: FormsService);
    create(createFormDto: any): Promise<import("./schemas/form.schema").DynamicFormDocument>;
    findAll(): Promise<import("./schemas/form.schema").DynamicFormDocument[]>;
    findOne(id: string): Promise<import("./schemas/form.schema").DynamicFormDocument>;
    submit(formId: string, submissionData: any): Promise<import("./schemas/form.schema").FormResponse>;
    getResponses(formId: string): Promise<import("./schemas/form.schema").FormResponse[]>;
}
