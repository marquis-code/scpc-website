import { Document, Types } from 'mongoose';
export type AbstractDocument = Abstract & Document;
export declare class Abstract {
    title: string;
    content: string;
    authorName: string;
    authorEmail: string;
    conference: Types.ObjectId;
    status: string;
    reviewerNotes: string;
    presentationType: string;
}
export declare const AbstractSchema: import("mongoose").Schema<Abstract, import("mongoose").Model<Abstract, any, any, any, (Document<unknown, any, Abstract, any, import("mongoose").DefaultSchemaOptions> & Abstract & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Abstract, any, import("mongoose").DefaultSchemaOptions> & Abstract & {
    _id: Types.ObjectId;
} & {
    __v: number;
}), any, Abstract>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Abstract, Document<unknown, {}, Abstract, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Abstract & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, Abstract, Document<unknown, {}, Abstract, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Abstract & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    content?: import("mongoose").SchemaDefinitionProperty<string, Abstract, Document<unknown, {}, Abstract, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Abstract & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    authorName?: import("mongoose").SchemaDefinitionProperty<string, Abstract, Document<unknown, {}, Abstract, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Abstract & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    authorEmail?: import("mongoose").SchemaDefinitionProperty<string, Abstract, Document<unknown, {}, Abstract, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Abstract & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    conference?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Abstract, Document<unknown, {}, Abstract, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Abstract & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, Abstract, Document<unknown, {}, Abstract, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Abstract & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    reviewerNotes?: import("mongoose").SchemaDefinitionProperty<string, Abstract, Document<unknown, {}, Abstract, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Abstract & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    presentationType?: import("mongoose").SchemaDefinitionProperty<string, Abstract, Document<unknown, {}, Abstract, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Abstract & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Abstract>;
