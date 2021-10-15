import * as orders_service from "./orders.service"

import * as class_transformer from "class-transformer"
import * as order_input from "./inputs/order.input"
import * as item_input from "./inputs/item.input"
// @ponicode
describe("store", () => {
    let inst: any

    beforeEach(() => {
        inst = new orders_service.OrdersService(undefined)
    })

    test("0", () => {
        let object: any = [class_transformer.plainToClass(item_input.Item,{ id: 987650, quantity: 1 }), class_transformer.plainToClass(item_input.Item,{ id: 56784, quantity: -5.48 }), class_transformer.plainToClass(item_input.Item,{ id: 12, quantity: 0 })]
        let callFunction: any = () => {
            inst.store(class_transformer.plainToClass(order_input.OrderInput,{ products: object, shipping: 0, tax: -100, subtotal: 0.0, total: 6.0 }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object: any = [class_transformer.plainToClass(item_input.Item,{ id: 987650, quantity: -5.48 }), class_transformer.plainToClass(item_input.Item,{ id: "a1969970175", quantity: 0 }), class_transformer.plainToClass(item_input.Item,{ id: 56784, quantity: -5.48 })]
        let callFunction: any = () => {
            inst.store(class_transformer.plainToClass(order_input.OrderInput,{ products: object, shipping: -1, tax: -100, subtotal: 300, total: 6.0 }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object: any = [class_transformer.plainToClass(item_input.Item,{ id: 12345, quantity: 0 }), class_transformer.plainToClass(item_input.Item,{ id: 12, quantity: 0 })]
        let callFunction: any = () => {
            inst.store(class_transformer.plainToClass(order_input.OrderInput,{ products: object, shipping: 0, tax: -1, subtotal: 10000, total: 300 }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object: any = [class_transformer.plainToClass(item_input.Item,{ id: 12345, quantity: -5.48 }), class_transformer.plainToClass(item_input.Item,{ id: "bc23a9d531064583ace8f67dad60f6bb", quantity: -5.48 })]
        let callFunction: any = () => {
            inst.store(class_transformer.plainToClass(order_input.OrderInput,{ products: object, shipping: 100, tax: 1, subtotal: 10000, total: 10000 }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object: any = [class_transformer.plainToClass(item_input.Item,{ id: 56784, quantity: -100 })]
        let callFunction: any = () => {
            inst.store(class_transformer.plainToClass(order_input.OrderInput,{ products: object, shipping: 100, tax: 1, subtotal: 300, total: 300 }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.store(class_transformer.plainToClass(order_input.OrderInput,{ products: [], shipping: -Infinity, tax: -Infinity, subtotal: -Infinity, total: -Infinity }))
        }
    
        expect(callFunction).not.toThrow()
    })
})
