import { Document } from 'mongoose';
export type DynamicFormDocument = DynamicForm & Document;
export declare class DynamicForm {
    title: string;
    description: string;
    fields: {
        name: string;
        label: string;
        type: 'text' | 'number' | 'email' | 'select' | 'radio' | 'checkbox' | 'date' | 'textarea';
        required: boolean;
        options?: {
            label: string;
            value: string;
        }[];
        placeholder?: string;
    }[];
    isActive: boolean;
    createdBy: string;
}
export declare const DynamicFormSchema: import("mongoose").Schema<DynamicForm, import("mongoose").Model<DynamicForm, any, any, any, (Document<unknown, any, DynamicForm, any, import("mongoose").DefaultSchemaOptions> & DynamicForm & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, DynamicForm, any, import("mongoose").DefaultSchemaOptions> & DynamicForm & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, DynamicForm>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, DynamicForm, Document<unknown, {}, DynamicForm, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<DynamicForm & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, DynamicForm, Document<unknown, {}, DynamicForm, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DynamicForm & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, DynamicForm, Document<unknown, {}, DynamicForm, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DynamicForm & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    fields?: import("mongoose").SchemaDefinitionProperty<{
        name: string;
        label: string;
        type: "text" | "number" | "email" | "select" | "radio" | "checkbox" | "date" | "textarea";
        required: boolean;
        options?: {
            label: string;
            value: string;
        }[];
        placeholder?: string;
    }[], DynamicForm, Document<unknown, {}, DynamicForm, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DynamicForm & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, DynamicForm, Document<unknown, {}, DynamicForm, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DynamicForm & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdBy?: import("mongoose").SchemaDefinitionProperty<string, DynamicForm, Document<unknown, {}, DynamicForm, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DynamicForm & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, DynamicForm>;
export declare class FormResponse {
    formId: string;
    data: Record<string, any>;
    submittedBy: string;
}
export declare const FormResponseSchema: import("mongoose").Schema<FormResponse, import("mongoose").Model<FormResponse, any, any, any, (Document<unknown, any, FormResponse, any, import("mongoose").DefaultSchemaOptions> & FormResponse & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, FormResponse, any, import("mongoose").DefaultSchemaOptions> & FormResponse & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, FormResponse>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FormResponse, Document<unknown, {}, FormResponse, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<FormResponse & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    formId?: import("mongoose").SchemaDefinitionProperty<string, FormResponse, Document<unknown, {}, FormResponse, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<FormResponse & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    data?: import("mongoose").SchemaDefinitionProperty<Record<string, any>, FormResponse, Document<unknown, {}, FormResponse, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<FormResponse & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    submittedBy?: import("mongoose").SchemaDefinitionProperty<string, FormResponse, Document<unknown, {}, FormResponse, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<FormResponse & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, FormResponse>;
