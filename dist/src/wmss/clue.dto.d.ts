import type { Page, PageRes } from "qqlx-cdk";
import type { Clue } from "./clue.schema";
export declare const PATH_WMSS_CLUE = "/qqlx/wmss/clue";
export type getClueDto = {
    search: Clue;
    page: Page;
};
export type getClueRes = PageRes<Clue>;
