import type { ScheduleCard } from "../../schema/market/scheduleCard";
import type { ENUM_PROJECT } from "../../schema/market/project";

export const PATH_SCHEDULE_CARD = "/qqlx/schedule/card";
export type postScheduleCardDto = { schema: ScheduleCard; corpId?: string };
export type postScheduleCardRes = null;

export type getScheduleCardDto = { scope: ENUM_PROJECT };
export type getScheduleCardRes = ScheduleCard[];

export type patchScheduleCardDto = { schema: ScheduleCard };
export type patchScheduleCardRes = null;

export type deleteScheduleCardDto = { cardId: string };
export type deleteScheduleCardRes = null;
