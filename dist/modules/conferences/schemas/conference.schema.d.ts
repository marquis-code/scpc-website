import { Document } from 'mongoose';
export type ConferenceDocument = Conference & Document;
export declare class Conference {
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    location: string;
    venue: string;
    bannerImage: string;
    status: string;
    pricing: {
        label: string;
        amount: number;
        description?: string;
    }[];
    registrationOpen: boolean;
    abstractSubmissionOpen: boolean;
}
export declare const ConferenceSchema: import("mongoose").Schema<Conference, import("mongoose").Model<Conference, any, any, any, (Document<unknown, any, Conference, any, import("mongoose").DefaultSchemaOptions> & Conference & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Conference, any, import("mongoose").DefaultSchemaOptions> & Conference & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, Conference>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Conference, Document<unknown, {}, Conference, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Conference & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, Conference, Document<unknown, {}, Conference, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conference & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, Conference, Document<unknown, {}, Conference, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conference & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    startDate?: import("mongoose").SchemaDefinitionProperty<Date, Conference, Document<unknown, {}, Conference, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conference & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    endDate?: import("mongoose").SchemaDefinitionProperty<Date, Conference, Document<unknown, {}, Conference, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conference & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    location?: import("mongoose").SchemaDefinitionProperty<string, Conference, Document<unknown, {}, Conference, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conference & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    venue?: import("mongoose").SchemaDefinitionProperty<string, Conference, Document<unknown, {}, Conference, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conference & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    bannerImage?: import("mongoose").SchemaDefinitionProperty<string, Conference, Document<unknown, {}, Conference, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conference & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, Conference, Document<unknown, {}, Conference, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conference & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    pricing?: import("mongoose").SchemaDefinitionProperty<{
        label: string;
        amount: number;
        description?: string;
    }[], Conference, Document<unknown, {}, Conference, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conference & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    registrationOpen?: import("mongoose").SchemaDefinitionProperty<boolean, Conference, Document<unknown, {}, Conference, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conference & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    abstractSubmissionOpen?: import("mongoose").SchemaDefinitionProperty<boolean, Conference, Document<unknown, {}, Conference, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conference & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Conference>;
