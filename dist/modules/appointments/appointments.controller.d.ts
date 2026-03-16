import { AppointmentsService } from './appointments.service';
export declare class AppointmentsController {
    private readonly appointmentsService;
    constructor(appointmentsService: AppointmentsService);
    create(createAppointmentDto: any): Promise<import("./schemas/appointment.schema").AppointmentDocument>;
    findAll(): Promise<import("./schemas/appointment.schema").AppointmentDocument[]>;
    findOne(id: string): Promise<import("./schemas/appointment.schema").AppointmentDocument>;
    update(id: string, updateAppointmentDto: any): Promise<import("./schemas/appointment.schema").AppointmentDocument>;
    remove(id: string): Promise<any>;
}
