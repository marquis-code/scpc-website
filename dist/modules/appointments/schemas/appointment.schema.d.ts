import { Document, Types } from 'mongoose';
export type AppointmentDocument = Appointment & Document;
export declare class Appointment {
    fullName: string;
    email: string;
    phoneNumber: string;
    date: Date;
    time: string;
    purpose: string;
    status: string;
    member: Types.ObjectId;
    notes: string;
}
export declare const AppointmentSchema: import("mongoose").Schema<Appointment, import("mongoose").Model<Appointment, any, any, any, (Document<unknown, any, Appointment, any, import("mongoose").DefaultSchemaOptions> & Appointment & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Appointment, any, import("mongoose").DefaultSchemaOptions> & Appointment & {
    _id: Types.ObjectId;
} & {
    __v: number;
}), any, Appointment>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Appointment, Document<unknown, {}, Appointment, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    fullName?: import("mongoose").SchemaDefinitionProperty<string, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    phoneNumber?: import("mongoose").SchemaDefinitionProperty<string, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    date?: import("mongoose").SchemaDefinitionProperty<Date, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    time?: import("mongoose").SchemaDefinitionProperty<string, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    purpose?: import("mongoose").SchemaDefinitionProperty<string, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    member?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    notes?: import("mongoose").SchemaDefinitionProperty<string, Appointment, Document<unknown, {}, Appointment, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Appointment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Appointment>;
