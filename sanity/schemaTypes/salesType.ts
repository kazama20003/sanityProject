import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const salesType = defineType({
    name: 'sale',
    title: 'Venta',
    type: 'document',
    icon: TagIcon,
    fields:[
        defineField({
            name: 'title',
            type: 'string',
            title: 'Titulo de venta'
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Descripcion de venta'
        }),
        defineField({
            name: 'discountAmount',
            type: 'number',
            title: 'Descuento de venta',
            description: "Cantidad en porcentaje o valor fijo"
        }),
        defineField({
            name: 'couponCode',
            type: 'string',
            title: 'Codigo de cupon'
        }),
        defineField({
            name: 'validFrom',
            type: 'datetime',
            title: 'Valida desde'
        }),
        defineField({
            name: 'validUntil',
            type: 'datetime',
            title: 'Valido hasta'
        }),
        defineField({
            name: 'isActive',
            type: 'boolean',
            title: 'Es Activo',
            description:"Activar /desactivar la venta",
            initialValue:true,
        }),
    ],
    preview:{
        select:{
            title:"title",
            discountAmount:"discountAmount",
            couponCode:"couponCode",
            isActive:"isActive",
        },
        prepare(selection){
            const {title,discountAmount,couponCode,isActive}= selection;
            const status = isActive ? "Active":"Inactivo";
            return{
                title,
                subtitle: `${discountAmount}% off - Codigo: ${couponCode}-${status}`
            }
        },
    },
})
