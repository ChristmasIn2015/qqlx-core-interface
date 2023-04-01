import type { MongodbBase, EnumMapOption } from "qqlx-cdk";

export const enum ENUM_CORP_ROLE {
    /** 公司创建者 */
    ROOT = 3000,
    /** 实习生 */
    TRAINEE = 3001,

    /** 采购专员 */
    PURCHASE = 3100,
    /** 销售专员 */
    SALES = 3200,
    /** 仓库专员 */
    WM = 3300,
    /** 财务专员 */
    FINANCE = 3400,

    /** 现场招待 */
    ENTERTAIN = 3500,
    /** 访客 */
    VISITOR = 3600,
}

const MAP_ENUM_CORP_ROLE = new Map<ENUM_CORP_ROLE, EnumMapOption>();
MAP_ENUM_CORP_ROLE.set(ENUM_CORP_ROLE.ROOT, { value: ENUM_CORP_ROLE.ROOT, text: "管理员" });
MAP_ENUM_CORP_ROLE.set(ENUM_CORP_ROLE.TRAINEE, { value: ENUM_CORP_ROLE.TRAINEE, text: "实习生" });
MAP_ENUM_CORP_ROLE.set(ENUM_CORP_ROLE.PURCHASE, { value: ENUM_CORP_ROLE.PURCHASE, text: "采购专员" });
MAP_ENUM_CORP_ROLE.set(ENUM_CORP_ROLE.SALES, { value: ENUM_CORP_ROLE.SALES, text: "销售专员" });
MAP_ENUM_CORP_ROLE.set(ENUM_CORP_ROLE.WM, { value: ENUM_CORP_ROLE.WM, text: "仓储专员" });
MAP_ENUM_CORP_ROLE.set(ENUM_CORP_ROLE.FINANCE, { value: ENUM_CORP_ROLE.FINANCE, text: "财务专员" });
MAP_ENUM_CORP_ROLE.set(ENUM_CORP_ROLE.ENTERTAIN, { value: ENUM_CORP_ROLE.ENTERTAIN, text: "现场招待" });
MAP_ENUM_CORP_ROLE.set(ENUM_CORP_ROLE.VISITOR, { value: ENUM_CORP_ROLE.VISITOR, text: "访客" });
export { MAP_ENUM_CORP_ROLE };

/** 市场主体：角色 */
export type BrandRole = {
    /** @foreign */
    userId: string;
    /** @foreign */
    corpId: string;

    role: ENUM_CORP_ROLE;
} & MongodbBase;
