import { BasketIcon } from "@sanity/icons";
import { defineField, defineType,defineArrayMember } from "sanity";

export const orderType = defineType({
    name: "order",
    title: "Orden",
    type: "document",
    icon: BasketIcon,
    fields:[
        defineField({
            name: "orderNumber",
            title:"Numero de orden",
            type: "string",
            validation: (Rule)=> Rule.required(),
        }),
        defineField({
            name: "stripeCheckoutSessionId",
            title:"Identificador de sesión de pago de Stripe",
            type: "string",
        }),
        defineField({
            name: "stripeCustomerId",
            title:"Identificación del cliente de Stripe",
            type: "string",
            validation: (Rule)=> Rule.required(),
        }),
        defineField({
            name: "clerkUserId",
            title:"Almacenar id de usuario",
            type: "string",
            validation: (Rule)=> Rule.required(),
        }),
        defineField({
            name: "customerName",
            title:"Nombre del usuario",
            type: "string",
            validation: (Rule)=> Rule.required(),
        }),
        defineField({
            name: "email",
            title:"Email del usuario",
            type: "string",
            validation: (Rule)=> Rule.required(),
        }),
        defineField({
            name: "stripePaymentIntentId",
            title:"Identificación de intención de pago de Stripe",
            type: "string",
            validation: (Rule)=> Rule.required(),
        }),
        defineField({
            name:"products",
            title:"Productos",
            type:"array",
            of:[
                defineArrayMember({
                    type:"object",
                    fields:[
                        defineField({
                            name:"product",
                            title: "Producto Comprado",
                            type:"reference",
                            to:[{type:"product"}]
                        }),
                        defineField({
                            name:"quantity",
                            title: "Cantidad Comprado",
                            type:"number",
                        }),
                        ],
                        preview: {
                            select: {
                                product: "product.name",
                                quantity: "quantity",
                                image: "product.image",
                                price: "product.price",
                                currency: "product.currency",
                            },
                            prepare(select){
                                return{
                                    title:`${select.product} x ${select.quantity}`,
                                    subtitle:`${select.price * select.quantity}`,
                                    media:select.image
                                }
                            }
                        }
                })
            ]
        }),
        defineField({
            name:"totalPrice",
            title:"Precio Total",
            type:"number",
            validation: (Rule)=>Rule.required(),
        }),
        defineField({
            name:"currency",
            title:"Moneda",
            type:"string",
            validation: (Rule)=>Rule.required(),
        }),
        defineField({
            name:"amountDiscount",
            title:"Cantidad descuento",
            type:"number",
            validation: (Rule)=>Rule.required(),
        }),
        defineField({
            name:"status",
            title:"Orden estado",
            type:"string",
            options:{
                list:[
                    {title:"Pendiente",value:"pending"},
                    {title:"Pagado",value:"paid"},
                    {title:"Enviado",value:"shipped"},
                    {title:"Entregado",value:"delivered"},
                    {title:"Cancelado",value:"cancelled"},
                ],
            },
        }),
        defineField({
            name:"orderDate",
            title:"Orden dato",
            type:"datetime",
            validation: (Rule)=>Rule.required(),
        }),
    ],
    preview:{
        select:{
            name:"customerName",
            amount:"totalPrice",
            currency:"currency",
            orderId:"orderNumber",
            email:"email",
        },
        prepare(select){
            const OrderIdSnippet = `${select.orderId.slice(0, 5)}...${select.orderId.slice(-5)}`;
            return{
                title: `${select.name}(${OrderIdSnippet})`,
                subtitle: `${select.amount} ${select.currency}, ${select.email}`,
                media:BasketIcon
            };
        },
    },
});