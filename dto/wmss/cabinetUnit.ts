import { MongodbPage, MongodbPageRes, MongodbSort } from "../../utils/database";

import type { Cabinet } from "../../schema/wmss/cabinet";
import type { CabinetUnit } from "../../schema/wmss/cabinetUnit";

export const PATH_CABINET_UNIT = "/qqlx/wmss/cabinet/unit";
export type postCabinetUnitDto = { cabinet: Cabinet; excels: CabinetUnit[] };
export type postCabinetUnitRes = null;

export type CabinetUnitJoined = CabinetUnit & {
	joinCabinet: Cabinet;
};
export type getCabinetUnitDto = {
	sortKey?: string;
	sortValue?: MongodbSort;

	page: MongodbPage;
	search: CabinetUnit;
};
export type getCabinetUnitRes = MongodbPageRes<CabinetUnitJoined>;

export type patchCabinetUnitDto = { excels: CabinetUnit[] };
export type patchCabinetUnitRes = null;

export type deleteCabinetUnitDto = { cabinetUnitId: string };
export type deleteCabinetUnitRes = null;
