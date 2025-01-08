import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
    name: 'product',
    title: 'Productos',
    type: 'document',
    icon: TrolleyIcon,
    fields: [
        defineField({
            name: "name",
            title: "Nombre del producto",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "Imagen",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Descripción",
            type: "blockContent",
        }),
        defineField({
            name: "price",
            title: "Precio",
            type: "number",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "categories",
            title: "Categoría",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }],
        }),
        defineField({
            name: "stock",
            title: "Stock",
            type: "number",
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: "name",
            media: "image",
            subtitle: "price",
        },
        prepare(select) {
            return {
                title: select.title,
                subtitle: `S/.${select.subtitle}`,
                media: select.media,
            };
        },
    },
});
