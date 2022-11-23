import _ from "lodash";

export function Paginate(items, pagenumber, pagesize) {
    const startindex = (pagenumber - 1) * pagesize;
    return _(items).slice(startindex).take(pagesize).value();
}
