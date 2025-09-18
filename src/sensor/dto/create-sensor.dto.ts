export class CreateSensorDto {
    uuid: string;
    sensorId: string; // Internal id from device if avalaibe    
    userId: string;// From keycloak instance
    metadata: string;
    updatedAt: string;
    createdAt: string;
}
