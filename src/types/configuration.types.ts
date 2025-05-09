import { Configuration } from "@/generated/prisma";

export type ConfigurationType = Omit<Configuration, "id">;
