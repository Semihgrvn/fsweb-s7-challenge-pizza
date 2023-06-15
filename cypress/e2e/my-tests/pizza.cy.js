describe('pizza-testi', function () {
    it("Buton Testleri", function () {

        cy.visit("/");

        const acıktımButton = cy.get('#order-pizza')

        acıktımButton.click();

        const siparişVerButonu = cy.get('#order-button')

        siparişVerButonu.click();

    })
})


describe('input-testi', function () {
    it("Input Testi", function () {

        cy.visit("/");

        const acıktımButton = cy.get('#order-pizza')

        acıktımButton.click();


        const input = cy.get('#special-text');

        input.type("deneme yazısıdır.");

    })
})


describe('chech-test', function () {
    it("Check Testi", function () {

        cy.visit("/");

        const acıktımButton = cy.get('#order-pizza')

        acıktımButton.click();


        cy.get('#pepperoni-checkbox').check();

        cy.get('#kabak-checkbox').check();

        cy.get('#olives-checkbox').check();

    })
})




