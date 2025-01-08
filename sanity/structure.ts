import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Tienda e-commerce via provisiones')
    .items([
      S.documentTypeListItem("category").title("categories"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item)=> item.getId() && !["post","category"].includes(item.getId()!)
      )
    ])
