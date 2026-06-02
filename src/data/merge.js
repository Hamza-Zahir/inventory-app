import { MASTER_FRAGRANCES } from "./MASTER_FRAGRANCES";
import { BRANCHES } from "./branches";


export function getBranchItems(branchName) {
  const branchList = BRANCHES[branchName] || [];

  return branchList.map((item) => {
    const full = MASTER_FRAGRANCES[item.code];

    return {
      ...full,     // fragrance data كاملة
      id: item.id  // id ديال الفرع
    };
  });
}
