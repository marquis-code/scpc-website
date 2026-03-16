import { Document } from 'mongoose';
export type EnquiryDocument = Enquiry & Document;
export declare class Enquiry {
    fullName: string;
    email: string;
    subject: string;
    message: string;
    status: string;
    adminNotes: string;
}
export declare const EnquirySchema: import("mongoose").Schema<Enquiry, import("mongoose").Model<Enquiry, any, any, any, (Document<unknown, any, Enquiry, any, import("mongoose").DefaultSchemaOptions> & Enquiry & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Enquiry, any, import("mongoose").DefaultSchemaOptions> & Enquiry & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, Enquiry>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Enquiry, Document<unknown, {}, Enquiry, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Enquiry & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    fullName?: import("mongoose").SchemaDefinitionProperty<string, Enquiry, Document<unknown, {}, Enquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Enquiry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, Enquiry, Document<unknown, {}, Enquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Enquiry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    subject?: import("mongoose").SchemaDefinitionProperty<string, Enquiry, Document<unknown, {}, Enquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Enquiry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    message?: import("mongoose").SchemaDefinitionProperty<string, Enquiry, Document<unknown, {}, Enquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Enquiry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, Enquiry, Document<unknown, {}, Enquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Enquiry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    adminNotes?: import("mongoose").SchemaDefinitionProperty<string, Enquiry, Document<unknown, {}, Enquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Enquiry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Enquiry>;
